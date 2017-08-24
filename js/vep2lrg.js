---
---

//var rest_current = 'http://rest.ensembl.org/vep/human/hgvs/';
var rest_url    = '{{ site.rest_url_38 }}';
var rest_grch37 = '{{ site.rest_url_37 }}';

var conseq_url  = '{{ site.conseq_url }}';

// 38
var ens_gene_url  = '{{ site.ens_gene_url }}';
var ens_trans_url = '{{ site.ens_trans_url }}';
var ens_var_url   = '{{ site.ens_var_url }}';

//37
var ens_gene_url_grch37  = '{{ site.ens_gene_url_37 }}';
var ens_trans_url_grch37 = '{{ site.ens_trans_url_37 }}';
var ens_var_url_grch37   = '{{ site.ens_var_url_37 }}';

var default_val   = 'unknown';

var maf_help = { 
                 'LRG' : 'The <b>LRG</b> genomic sequence contains the ',
                 'Genome' : 'The <b>genome assembly</b> (GRCh38) contains the '
               };
var maf_colour = {  
                    'LRG' : 'lrg_blue',
                    'Genome' : 'lrg_green2',
                    'default' : 'lrg_dark'
                 };

var msc_help = '<a class="icon-info-link" href="'+conseq_url+'consequences" title="Click here to see the list of consequences and their descriptions" target="_blank"></a>';


function get_vep_results () {

  var assembly    = getUrlParam('assembly');
  var hgvs        = getUrlParam('hgvs');
  var lrg_id      = getUrlParam('lrg');
  var hgnc_symbol = getUrlParam('hgnc');
  var g_strand    = getUrlParam('strand');


  if (assembly && hgvs) {
    assembly = assembly.toLowerCase();
    if (assembly.match('grch37')) {
      rest_url = rest_grch37;
      ens_gene_url  = ens_gene_url_grch37;
      ens_trans_url = ens_trans_url_grch37;
      ens_var_url   = ens_var_url_grch37;
      maf_help['Genome'] = maf_help['Genome'].replace('GRCh38','GRCh37');
    }

    rest_url += hgvs+'?merged=1;content-type=application/json';

    $('#vep_results').html('<h4 class="icon-info close-icon-5 smaller-icon" style="text-align:center">Request sent to Ensembl. Please wait for the results ...</h4><div class="loader" style="text-align:center"></div>');

    $.getJSON(rest_url)
              .done(function(data) {
                  console.log(data);
                  var html_content = parseData(data[0],lrg_id,hgnc_symbol,g_strand);
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

function parseData(data,lrg_id,hgnc_symbol,g_strand) {
  var html = "";

  var lrg_label = 'LRG';
  if (lrg_id) {
    lrg_label = lrg_id;
    maf_help[lrg_id] = maf_help['LRG'].replace('LRG',lrg_label);
    maf_colour[lrg_id] = maf_colour['LRG'];
  }

  // Alleles
  var allele_desc = (data.id.indexOf("LRG_") >= 0) ? [lrg_label,'Genome'] : ['Genome',lrg_label];

  var alleles = data.allele_string.split('/');

  var allele1 = alleles.shift();
  var allele2 = alleles.join('/');

  var alleles_by_seq = {};
      alleles_by_seq[allele_desc[0]] = allele1;
      alleles_by_seq[allele_desc[1]] = allele2;

  var seqs_by_allele = {};
      seqs_by_allele[allele1] = allele_desc[0];
      seqs_by_allele[allele2] = allele_desc[1];

  var genome_allele = (data.id.indexOf("LRG_") >= 0) ? allele2 : allele1;
  var lrg_allele = (data.id.indexOf("LRG_") >= 0) ? allele1 : allele2;

  var genome_assembly  = data.assembly_name.toLowerCase();
  var genome_bg_colour = (genome_assembly.match('grch37')) ? 'lrg_purple_bg' : 'lrg_green2_bg';
  var genome_colour    = (genome_assembly.match('grch37')) ? 'lrg_purple' : 'lrg_green2';

  // Strands
  var strand1 = data.strand;
  var strand2 = (g_strand) ? g_strand : '';

  var strand_gen = (data.id.indexOf("LRG_") >= 0) ? strand2 : strand1;
  var strand_lrg = (data.id.indexOf("LRG_") >= 0) ? strand1 : strand2;

  html += '<h3>Results for <span class="lrg_dark">'+data.id+'</span></h3>';
  html += '<div class="clearfix">';
  html += '  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 padding-left-0">';
  html += '    <table class="table-vep" style="width:100%"><tbody>';
  html += '      <tr>' + 
          '        <td class="' + genome_bg_colour + '"></td>' +
          '        <td colspan="3">' + 
          '          <span class="bold_font">Most severe consequence' + msc_help + '</span>:' + 
          '          <span class="bold_font padding-left-5">' + 
          '            <a class="icon-external-link" href="'+conseq_url+data.most_severe_consequence+'" title="Click here to see the description of the consequence term '+data.most_severe_consequence+'" target="_blank">'+data.most_severe_consequence+'</a>' + 
          '          </span>' +
          '        </td>' +
          '      </tr>';
  html += '      <tr>' + 
          '        <td class="' + genome_bg_colour + '"></td>' +
          '        <td style="width:120px">' + 
          '          <span class="bold_font">' + data.assembly_name + '</span> allele:' + 
          '        </td>' +
          '        <td class="' + genome_colour + ' bold_font bigger-font">' + genome_allele + '</td>' +
          '        <td class="smaller-font margin-left-15">';
  if (strand_gen) {
    var genome_strand = get_strand(strand_gen);
    var genome_strand_label = get_strand(strand_gen, 'Allele on the genome');        
    html += '          [ <span class="padding-right-5">' + genome_strand + '</span>' + genome_strand_label + ' ]';
  }
  html += '      </td></tr>' +
          '      <tr>' + 
          '        <td class="lrg_blue_bg"></td>'+
          '        <td style="width:120px">' + 
          '          <span class="bold_font">LRG</span> allele: ' + 
          '        </td>' +
          '        <td class="lrg_blue bold_font bigger-font">' + lrg_allele + '</td>' +
          '        <td class="smaller-font margin-left-15">';
  if (strand_lrg) {
    var lrg_genome_strand = get_strand(strand_lrg);
    var lrg_genome_strand_label = get_strand(strand_lrg,'Allele on the LRG');
    var lrg_genome_strand_label2 = get_strand(strand_lrg,' ');
    html += '          [ <span class="padding-right-5">' + lrg_genome_strand + '</span>' + lrg_genome_strand_label + ' ]';
  }
  html += '      </td></tr>' +
          '      </tbody></table>';

  if (strand_lrg) {
    var lrg_gene_name = (hgnc_symbol) ? ' ('+hgnc_symbol+')' : '';
    html += '    <div class="clearfix margin-top-10 margin-bottom-20">'+
            '      <div class="icon-info close-icon-5"><b>'+ lrg_id + '</b>' + lrg_gene_name +' maps to the ' + lrg_genome_strand_label2 + ' of the genome assembly</div>'+
            '    </div>';
  }

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
    html += '        <tr><th class="split-header" style="text-align:center" colspan="6">Co-located variant(s)</th></tr>';
    html += '        <tr><th>Variant</th><th>Alleles</th><th>Minor allele</th>' + 
                    '<th data-toggle="tooltip" data-placement="bottom" id="maf" title="Minor Allele Frequency">MAF</th><th>Ancestral allele</th>' +
                    '<th>Strand</th></tr>';
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
      var strand = (variant.strand) ? get_strand(variant.strand) : default_val;
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

          minor_allele_seq = ' <div class="btn btn-xs btn-primary btn-lrg-small icon-minus close-icon-0 right" id="'+variant.id+'_button" onclick="javascript:show_hide_info(\''+variant.id+'\')"></div>';
          minor_allele_seq_info = '<tr id="'+variant.id+'" ><td></td><td colspan="5">'+minor_allele_seq_info+'</td></tr>';
        }
      }
      html += '      <tr><td>' + var_id + '</td><td>' + var_al + '</td><td>' + ma + minor_allele_seq + '</td><td>' + maf + '</td><td>' + aa + '</td><td style="text-align:center">' + strand +'</td></tr>'+minor_allele_seq_info;
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
      var strand = get_strand(trans.strand);

      var cons = [];
      $.each(trans.consequence_terms, function (index, cterm) {
        cons.push('<a class="icon-external-link" href="'+conseq_url+cterm+'" title="Click here to see the description of the consequence term '+cterm+'" target="_blank">'+cterm+'</a>');
      });

      var distance = (trans.distance) ? '<i>Distance to transcript: '+trans.distance+'bp' : '-';

      var v_allele = (trans.strand == 1) ? trans.variant_allele : reverse_complement(trans.variant_allele);

      html += '    <tr><td>' + gene_id + '</td><td>' + trans_id + '</td><td>' + trans.biotype + '</td><td style="text-align:center">'+ strand + '</td><td>' + cons.join(', ') + '</td>' +
                      '<td>' + v_allele + '</td><td>' + trans.impact + '</td><td>' + distance+ '</td></tr>';
    });

    html += '  </tbody></table>';
  }
  else {
    html += '    <span class="icon-info close-icon-5 smaller-icon">No transcript consequence found</span>';
  }
  return html;
}

function get_strand (strand, label) {
  var fw_arrow  = '<span class="bigger-font" style="color:blue" title="Forward">&rarr;</span>';
  var rev_arrow = '<span class="bigger-font" style="color:red" title="Reverse">&larr;</span>'
  if (label) {
    return (strand == 1) ? label+" <b>Forward</b> strand" : label+" <b>Reverse</b> strand";
  }
  else {
    return (strand == 1) ? fw_arrow : rev_arrow;
  }
}

function complement(seq) {
    return { A: 'T', T: 'A', G: 'C', C: 'G' }[seq];
}    
function reverse_complement(seq) {
    return seq.split('').reverse().map(complement).join('');
}  
