
var rest_current = 'http://rest.ensembl.org/vep/human/hgvs/';
var rest_grch37  = 'http://grch37.rest.ensembl.org/vep/human/hgvs/';

var ens_gene_url  = 'http://www.ensembl.org/Homo_sapiens/Gene/Summary?g=';
var ens_trans_url = 'http://www.ensembl.org/Homo_sapiens/Transcript/Summary?t=';
var ens_var_url   = 'http://www.ensembl.org/Homo_sapiens/Variation/Explore?v=';
var conseq_url    = 'http://www.ensembl.org/info/genome/variation/predicted_data.html#';

var default_val   = 'unknown';

var maf_help = { 
                 'LRG' : 'The <b>LRG</b> genomic sequence contains the ',
                 'Reference' : 'The <b>reference</b> genome assembly (GRCh38) contains the '
               };
var maf_colour = {  
                    'LRG' : 'lrg_blue',
                    'Reference' : 'lrg_green2',
                    'default' : 'lrg_dark'
                 };

var msc_help = '<a class="icon-info-link" href="'+conseq_url+'consequences" title="Click here to see the list of consequences and their descriptions" target="_blank"></a>';


function get_vep_results () {

  var assembly = getUrlParam('assembly');
  var hgvs     = getUrlParam('hgvs');

  if (assembly && hgvs) {
    assembly = assembly.toLowerCase();
    var rest_url = rest_current;
    if (assembly.match('grch37')) {
      rest_url = rest_grch37;
      maf_help['Reference'] = maf_help['Reference'].replace('GRCh38','GRCh37');
    }

    rest_url += hgvs+'?content-type=application/json';

    $('#vep_results').html('<h4 class="icon-info close-icon-5 smaller-icon" style="text-align:center">Request sent to Ensembl. Please wait for the results ...</h4><div class="loader" style="text-align:center"></div>');

    $.getJSON(rest_url)
              .done(function(data) {
                  console.log(data);
                  var html_content = parseData(data[0]);
                  $('#vep_results').html(html_content);
              })
              .fail(function(data,status,xhr) {
                console.log( status+": "+ xhr);
                var fail_html = '<div class="clearfix"><div class="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 lrg_gray_bg">' + 
                                 '<h4 class="icon-alert close-icon-5 smaller-icon" style="text-align:center"><span class="lrg_dark">Sorry, we can\'t get results from Ensembl!</span></h4>' +
                                 '<h6>Type: <span style="font-style:italic">'+status+'</span></h6><h6>Cause: <span style="font-style:italic">'+xhr+'</span></h6>' +
                                 '</div></div>';
                $('#vep_results').html(fail_html);
              });
    console.log("Ensembl REST query done to retrieve VEP data from HGVS notation");
  }
  else {
    if (!assembly && !hgvs) {
      alert("Missing parameters 'assembly' and 'hgvs'");
    }
    else if (!assembly) {
      alert("Missing parameter 'assembly'");
    }
    else if (!hgvs) {
      alert("Missing parameter 'hgvs'");
    }
  }
}

function getUrlParam (name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (!results) {
    return undefined;
  }
  else if (results[1]) {
    return results[1];
  }
  else {
    return undefined;
  }
}

function parseData(data) {
  var html = "";

  var strand = get_strand(data.strand);

  var allele_desc = (data.id.indexOf("LRG_") >= 0) ? ['LRG','Reference'] : ['Reference','LRG'];

  var alleles = data.allele_string.split('/');

  var allele1 = alleles.shift();
  var allele2 = alleles.join('/');

  var alleles_by_seq = {};
      alleles_by_seq[allele_desc[0]] = allele1;
      alleles_by_seq[allele_desc[1]] = allele2;

  var seqs_by_allele = {};
      seqs_by_allele[allele1] = allele_desc[0];
      seqs_by_allele[allele2] = allele_desc[1];

  var info_div_classes  = "link_list text_row";
  var info_span_classes = "icon-next-page close-icon-5 smaller-icon padding-right-8";

  var allele_html = allele_desc[0] + ' allele</span><span class="lrg_green2 bold_font bigger-font">' + alleles_by_seq[allele_desc[0]] + '</span><span class="lrg_blue" style="padding:0px 15px">|</span><span class="padding-right-8">'+ allele_desc[1] + ' allele</span><span class="lrg_blue bold_font bigger-font">' + alleles_by_seq[allele_desc[1]] + '</span>';
  
  html += "<h3>Results for "+data.id+"</h3>";
  html += '<div class="clearfix">';
  html += '  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 padding-left-0">';
  html += '    <div class="' + info_div_classes + '"><span class="' + info_span_classes + '">Most severe consequence' + msc_help + ' </span><span class="bold_font">' + data.most_severe_consequence + '</span></div>';
  html += '    <div class="' + info_div_classes + '"><span class="' + info_span_classes + '">'+ allele_html + '</div>';
  html += '    <div class="' + info_div_classes + '"><span class="' + info_span_classes + '">Assembly</span><span class="bold_font">' + data.assembly_name + '</span>' + 
               '<span class="lrg_blue" style="padding:0px 15px">|</span><span class="padding-right-8">Strand</span><span class="bold_font">'+ strand + '</span></div>';
  html += '  </div>';

  html += '  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 padding-right-0">';

  html += parse_colocated_variants(data,seqs_by_allele);

  html += '  </div>';
  html += '</div>';

  html += parse_transcript_data(data);

  return html;
}


function parse_colocated_variants (data,seqs_by_allele) {

   var html = "";

  if (data.colocated_variants) {
    html += '    <table class="table table-hover table-lrg"><thead>';
    html += '        <tr><th class="split-header" style="text-align:center" colspan="5">Co-located variant(s)</th></tr>';
    html += '        <tr><th>Variant</th><th>Alleles</th><th>Minor allele</th>' + 
                    '<th data-toggle="tooltip" data-placement="bottom" id="maf" title="Minor Allele Frequency">MAF</th><th>Ancestral allele</th></tr>';
    html += '      </thead><tbody>';

    $.each(data.colocated_variants, function (index, variant) {
      var ma_colour = maf_colour['default'];
      if (variant.minor_allele && seqs_by_allele[variant.minor_allele]) {
        ma_colour = maf_colour[seqs_by_allele[variant.minor_allele]];
      }

      var var_id = (variant.id) ? '<a target="_blank" class="icon-external-link" href="'+ens_var_url+variant.id+'">'+variant.id+'</a>' : default_val;
      var var_al = (variant.allele_string) ? variant.allele_string : default_val;
      var ma     = (variant.minor_allele) ? '<span class="'+ma_colour+'">'+variant.minor_allele+'</span>' : default_val;
      var maf    = (variant.minor_allele_freq || variant.minor_allele_freq == 0) ? variant.minor_allele_freq : default_val;
      var aa     = (variant.ancestral_allele) ? variant.ancestral_allele : default_val;
console.log("Variant:  "+variant.id);

      var minor_allele_seq = "";
      var minor_allele_seq_info = ""
      if (variant.minor_allele) {
        if (seqs_by_allele[variant.minor_allele]) {
          
          minor_allele_seq_info = '<div>' + maf_help[seqs_by_allele[variant.minor_allele]] + '<b>MINOR</b> allele <span class="bold_font ' + ma_colour + '">' + variant.minor_allele + '</span>.</div>';
          $.each(seqs_by_allele, function(allele, seq) {
            if (seq != seqs_by_allele[variant.minor_allele]) {
              minor_allele_seq_info += '<div>' + maf_help[seq] + '<b>MAJOR</b> allele <span class="bold_font ' + maf_colour[seq] + '">' + allele + '</span>.</div>';
            }
          });

          minor_allele_seq = ' <div class="btn btn-xs btn-primary btn-lrg-small icon-plus close-icon-0 right" id="'+variant.id+'_button" onclick="javascript:show_hide_info(\''+variant.id+'\')"></div>';
          minor_allele_seq_info = '<tr id="'+variant.id+'" style="display:none"><td colspan="5">'+minor_allele_seq_info+'</td></tr>';
        }
      }
      html += '      <tr><td>' + var_id + '</td><td>' + var_al + '</td><td>' + ma + minor_allele_seq + '</td><td>' + maf + '</td><td>' + aa + '</td></tr>'+minor_allele_seq_info;
    });
    html += '      </tbody></table>';
  }
  else {
    html += '    <span class="icon-info close-icon-5 smaller-icon">No co-located variant found in Ensembl</span>';
  }

  return html;
}

function parse_transcript_data (data) {
  var html = "";

  // Transcript consequences
  html += "<h4>Transcripts consequences</h4>";

  if (data.transcript_consequences) {

    html += '<table class="table table-hover table-lrg">';
    html += '  <thead><tr>';
    html += '    <th>Gene</th><th>Transcript</th><th>Biotype</th><th>Strand</th>' + 
                '<th>Consequences' + msc_help + '</th><th>Variant allele</th><th>IMPACT'+ msc_help +'</th><th>Details</th>';
    html += '  </tr></thead><tbody>';

    $.each(data.transcript_consequences, function (index, trans) {
      var gene_id  = '<a class="icon-external-link bold_font" href="'+ ens_gene_url + trans.gene_id +'">'+trans.gene_symbol+'</a>';
      var trans_id = '<a class="icon-external-link" href="'+ ens_trans_url + trans.transcript_id +'">'+trans.transcript_id+'</a>';
      var strand = get_strand(trans.strand,1);

      var cons = [];
      $.each(trans.consequence_terms, function (index, cterm) {
        cons.push('<a class="icon-external-link" href="'+conseq_url+cterm+'" title="Click here to see the description of the consequence term '+cterm+'" target="_blank">'+cterm+'</a>');
      });

      var distance = (trans.distance) ? '<i>Distance to transcript: '+trans.distance+'bp' : '-';

      html += '    <tr><td>' + gene_id + '</td><td>' + trans_id + '</td><td>' + trans.biotype + '</td><td>'+ strand + '</td><td>' + cons.join(', ') + '</td>' +
                      '<td>' + trans.variant_allele + '</td><td>' + trans.impact + '</td><td>' + distance+ '</td></tr>';
    });

    html += '  </tbody></table>';
  }
  else {
    html += '    <span class="icon-info close-icon-5 smaller-icon">No transcript consequence found</span>';
  }
  return html;
}

function get_strand (strand, icon_type) {
  if (icon_type) {
    return (strand == 1) ? '<span class="icon-next-page close-icon-0" title="Forward"></span>' : '<span class="icon-previous-page close-icon-0" title="Reverse"></span>';
  }
  else {
    return (strand == 1) ? "Forward" : "Reverse";
  }
}
 