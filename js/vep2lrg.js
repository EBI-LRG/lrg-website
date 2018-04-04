
var rest_url    = '{{ site.rest.rest_url_38 }}';
var rest_grch37 = '{{ site.rest.rest_url_37 }}';

var conseq_url  = '{{ site.urls.conseq_url }}';

// 38
var ens_gene_url  = '{{ site.js_url.ens_gene }}';
var ens_trans_url = '{{ site.js_url.ens_trans }}';
var ens_var_url   = '{{ site.js_url.ens_var }}';

//37
var ens_gene_url_grch37  = '{{ site.js_url.ens_gene_37 }}';
var ens_trans_url_grch37 = '{{ site.js_url.ens_trans_37 }}';
var ens_var_url_grch37   = '{{ site.js_url.ens_var_37 }}';

var default_val = '';

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

    rest_url += hgvs+'?merged=1;hgvs=1;failed=1;content-type=application/json';
console.log(rest_url);
    $('#vep_msg').show();

    $.getJSON(rest_url)
              .done(function(data) {
                  console.log(data);
                  parseData(data[0],lrg_id,hgnc_symbol,g_strand);
                  $('#vep_msg').hide();
                  $('#vep_results').show();
              })
              .fail(function(data,status,xhr) {
                console.log( status+": "+ xhr);
                var fail_html = '<div class="clearfix"><div class="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 lrg_gray_bg">' + 
                                 '<h4 class="icon-alert close-icon-5 smaller-icon" style="text-align:center"><span class="lrg_dark">Sorry, we can\'t get results from Ensembl!</span></h4>' +
                                 '<h6>Type: <span style="font-style:italic">'+status+'</span></h6><h6>Cause: <span style="font-style:italic">'+xhr+'</span></h6>' +
                                 '</div></div>';
                $('#vep_msg').html(fail_html);
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
  var alt_allele = (data.id.indexOf("LRG_") >= 0) ? allele1 : allele2;

  var genome_assembly  = data.assembly_name.toLowerCase();
  var genome_bg_colour = (genome_assembly.match('grch37')) ? 'lrg_purple_bg' : 'lrg_green2_bg';
  var genome_colour    = (genome_assembly.match('grch37')) ? 'lrg_purple' : 'lrg_green2';

  var flagged = data.strand

  // Strands
  var strand1 = data.strand;
  var strand2 = (g_strand) ? g_strand : '';

  var strand_gen = (data.id.indexOf("LRG_") >= 0) ? strand2 : strand1;
  var strand_lrg = (data.id.indexOf("LRG_") >= 0) ? strand1 : strand2;

  $('#vep_hgvs').html(data.id);

  // Consequence
  vep_sum_table = '      <tr>' + 
                  '        <td class="' + genome_bg_colour + '"></td>' +
                  '        <td colspan="5">' + 
                  '          <span class="bold_font">Most severe consequence' + msc_help + '</span>:' + 
                  '          <span class="bold_font padding-left-5">' + 
                  '            <a class="icon-external-link" data-toggle="tooltip" data-placement="bottom" href="'+conseq_url+data.most_severe_consequence+'" title="Click here to see the description of the consequence term '+data.most_severe_consequence+'" target="_blank">'+data.most_severe_consequence+'</a>' + 
                  '          </span>' +
                  '        </td>' +
                  '      </tr>';

  // Genomic sequence
  vep_sum_table += '      <tr>' + 
                    '        <td class="' + genome_bg_colour + '"></td>' +
                    '        <td style="width:120px">' + 
                    '          <span class="bold_font">' + data.assembly_name + '</span> allele:' + 
                    '        </td>' +
                    '        <td class="' + genome_colour + ' bold_font bigger-font">' + genome_allele + '</td>' +
                    '        <td colspan="2" class="smaller-font margin-left-15">';
  if (strand_gen) {
    var genome_strand = get_strand(strand_gen);
    var genome_strand_label = get_strand(strand_gen, 1);

     vep_sum_table += '          [ <span class="padding-right-5">' + genome_strand + '</span> ' + data.assembly_name + ' <span class="bold_font">' + genome_strand_label + '</span> strand ]';
  }
  vep_sum_table += '      </td></tr>';


  // LRG sequence
  vep_sum_table += '      <tr>';

  if (strand_lrg) {
    var fwd_lrg_allele = alt_allele;
    var rev_lrg_allele = reverse_complement(alt_allele);

    if (strand_lrg == -1) {
      fwd_lrg_allele = reverse_complement(alt_allele);
      rev_lrg_allele = alt_allele;
    }

    var lrg_allele_label_css = 'lrg_blue bigger-font';
    var bold_lrg_allele_label_css = lrg_allele_label_css +' bold_font';
    

    var fwd_lrg_allele_label = (strand_lrg == 1)  ? '<span class="'+bold_lrg_allele_label_css+'">'+fwd_lrg_allele+'</span>' : '<span class="'+lrg_allele_label_css+'">'+fwd_lrg_allele+'</span>';
    var rev_lrg_allele_label = (strand_lrg == -1) ? '<span class="'+bold_lrg_allele_label_css+'">'+rev_lrg_allele+'</span>' : '<span class="'+lrg_allele_label_css+'">'+rev_lrg_allele+'</span>';

    vep_sum_table += '        <td class="lrg_blue_bg"></td>'+
                     '        <td style="width:120px">' + 
                     '          <span class="bold_font">LRG</span> allele: ' + 
                     '        </td>' ;

    var lrg_strand = get_strand(1);
    var lrg_strand_label = get_strand(1,1);
    var lrg_genome_strand = get_strand(strand_lrg);
    var lrg_genome_strand_label = (strand_lrg == 1) ? "Forward" : "Reverse";
    var lrg_genome_strand_label2 = get_strand(strand_lrg,' ');
    
    var lrg_displayed_allele = (strand_lrg == 1) ? fwd_lrg_allele_label : rev_lrg_allele_label;
    vep_sum_table += '      </td><td>' + lrg_displayed_allele + '</td>' +
                     '      <td class="smaller-font margin-left-15">' +
                     '        [ <span class="padding-right-5">' + genome_strand + '</span> ' + data.assembly_name + ' <span class="bold_font">' + genome_strand_label + '</span> strand ]<br />' +
                     '        [ <span class="padding-right-5">' + get_strand(strand_lrg) + '</span> LRG <span class="bold_font">' + lrg_genome_strand_label + '</span> strand ]' +
                     '      </td>' + 
                     '      <td class="smaller-font">';

    if (strand_lrg == -1) {
      vep_sum_table += '      ' + fwd_lrg_allele_label + '<span style="padding-left:15px">[ <span class="padding-right-5">' + lrg_strand + '</span> LRG <span class="bold_font">' + lrg_strand_label + '</span> strand ]</span>'
    }
  }
  else {
    vep_sum_table += '        <td class="lrg_blue_bg"></td>'+
                     '        <td colspan="3">Can\'t determine which is the LRG allele: we need to know on which strand the LRG sequence maps to the genome'; 
  }
  vep_sum_table += '      </td></tr>';

  $('.table-vep-sum > tbody').html(vep_sum_table);

  // Genomic sequence
  var vep_map_table = '      <tr><td colspan="3">Sequences</td><td colspan="3">Alignment</td></tr>' +
                      '      <tr><td>' +
                      '          <div class="text-center margin-bottom-2 '+genome_bg_colour+'" style="width:60px;height:20px">'+get_strand(1)+'</div>' +
                      '          <div class="text-center '+genome_bg_colour+'" style="width:60px;height:20px">'+get_strand(-1)+'</div>' +
                      '        </td><td class="padding-left-0 padding-right-0">' +
                      '          <div class="margin-bottom-2"><span class="'+ genome_colour + ' bold_font bigger-font">' + genome_allele + '</span></div>' +
                      '          <div>' + reverse_complement(genome_allele) + '</div>' +
                      '        </td><td>' +
                      '          <div class="text-center  margin-bottom-2 '+genome_bg_colour+'" style="width:60px;height:20px">'+get_strand(1)+'</div>' +
                      '          <div class="text-center '+genome_bg_colour+'" style="width:60px;height:20px">'+get_strand(-1)+'</div>' +
                      '        </td>';
  // Genomic Mapping
  vep_map_table += '        <td style="vertical-align:bottom">' +
                   '          <div class="text-center '+genome_bg_colour+'" style="width:60px;height:20px">'+get_strand(1)+'</div>' +
                   '        </td><td class="padding-left-0 padding-right-0" style="vertical-align:bottom">' +
                   '          <div><span class="'+ genome_colour + ' bold_font bigger-font">' + genome_allele + '</span></div>' +
                   '        </td><td style="vertical-align:bottom">' +
                   '          <div class="text-center '+genome_bg_colour+'" style="width:60px;height:20px">'+get_strand(1)+'</div>' +
                   '        </td></tr>';
  // LRG sequence
  vep_map_table += '      <tr><td>' +
                   '          <div class="lrg_blue_bg text-center margin-left-20 margin-bottom-2" style="width:40px;height:20px">'+get_strand(1)+'</div>' +
                   '          <div class="lrg_blue_bg text-center margin-left-20" style="width:40px;height:20px">'+get_strand(-1)+'</div>' +
                   '        </td><td class="padding-left-0 padding-right-0">' +
                   '          <div class="margin-bottom-2">' + fwd_lrg_allele_label + '</div>' +
                   '          <div>' + rev_lrg_allele_label + '</div>' +
                   '        </td><td>' +
                   '          <div class="lrg_blue_bg text-center margin-bottom-2" style="width:40px;height:20px">'+get_strand(1)+'</div>' +
                   '          <div class="lrg_blue_bg text-center" style="width:40px;height:20px">'+get_strand(-1)+'</div>' +
                   '        </td>';
  // LRG Mapping
  var aligned_lrg_strand_label = '<span class="bigger-font" style="color:blue" title="Forward">&rarr;</span>';
  var aligned_lrg_allele = fwd_lrg_allele_label;
  if (strand_lrg == -1) {
    aligned_lrg_strand_label = '<span class="bigger-font" style="color:red" title="Reverse">&rarr;</span>';
    aligned_lrg_allele = rev_lrg_allele_label;
  }

  vep_map_table += '        <td style="vertical-align:top">' +
                   '          <div class="lrg_blue_bg text-center margin-left-20" style="width:40px;height:20px">'+aligned_lrg_strand_label+'</div>' +
                   '        </td><td class="padding-left-0 padding-right-0" style="vertical-align:top">' +
                   '          <div>'+aligned_lrg_allele+ '</div>' +
                   '        </td><td style="vertical-align:top">' +
                   '          <div class="lrg_blue_bg text-center" style="width:40px;height:20px">'+aligned_lrg_strand_label+'</div>' +
                   '        </td></tr>';

  $('.table-vep-map > tbody').html(vep_map_table);

  if (strand_lrg) {
    var lrg_gene_name = (hgnc_symbol) ? ' ('+hgnc_symbol+')' : '';
    $('#vep_strand').html('    <div class="clearfix margin-top-10 margin-bottom-20">'+
                          '      <div class="left icon-info close-icon-0 note_header lrg_dark_bg"></div>' + 
                          '      <div class="left note_content"><b>'+ lrg_id + '</b>' + lrg_gene_name +' maps to the ' + lrg_genome_strand + ' <span class="bold_font">' + lrg_genome_strand_label2 + '</span> strand of the genome assembly</div>'+
                          '    </div>');
  }

  parse_colocated_variants(data,seqs_by_allele);
  
  parse_transcript_data(data);
}


function parse_colocated_variants (data,seqs_by_allele) {

   var html = "";

  if (data.colocated_variants) {

    $.each(data.colocated_variants, function (index, variant) {
      var ma_colour = maf_colour['default'];
      if (variant.minor_allele && seqs_by_allele[variant.minor_allele]) {
        ma_colour = maf_colour[seqs_by_allele[variant.minor_allele]];
      }

      var gnomad_colour = maf_colour['default'];
      if (variant.gnomad_allele && seqs_by_allele[variant.gnomad_allele]) {
        gnomad_colour = maf_colour[seqs_by_allele[variant.gnomad_allele]];
      }

      var var_id     = (variant.id) ? '<a target="_blank" class="icon-external-link" href="'+ens_var_url+variant.id+'">'+variant.id+'</a>' : default_val;
      var var_al     = (variant.allele_string) ? variant.allele_string : default_val;
      var ma         = (variant.minor_allele) ? '<span class="'+ma_colour+'">'+variant.minor_allele+'</span>' : default_val;
      var maf        = (variant.minor_allele_freq || variant.minor_allele_freq == 0) ? variant.minor_allele_freq : default_val;
      var ma_gnomad  = (variant.gnomad_allele) ? '<span class="'+gnomad_colour+'">'+variant.gnomad_allele+'</span>' : default_val;
      var maf_gnomad = (variant.gnomad_maf || variant.gnomad_maf == 0) ? variant.gnomad_maf : default_val;
      var aa         = (variant.ancestral_allele) ? variant.ancestral_allele : default_val;
      var strand     = (variant.strand) ? get_strand(variant.strand) : default_val;
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
          minor_allele_seq_info = '<tr id="'+variant.id+'" ><td></td><td colspan="7">'+minor_allele_seq_info+'</td></tr>';
        }
      }
      html += '      <tr><td>' + var_id + '</td><td>' + var_al + '</td><td>' + ma + minor_allele_seq + '</td><td>' + maf + '</td><td>' + ma_gnomad + '</td><td>' + maf_gnomad + '</td><td>' + aa + '</td><td style="text-align:center">' + strand +'</td></tr>'+minor_allele_seq_info;
    });
    $('#coloc_variants_table > tbody').html(html);
  }
  else {
    $('#coloc_variants').html('<div class="clearfix margin-top-10 margin-bottom-20">'+
                              '  <div class="left icon-info close-icon-0 note_header lrg_dark_bg"></div>' + 
                              '  <div class="left note_content">No co-located variant found in Ensembl</div>' +
                              '</div>');
  }
}


// Transcript consequence results 
function parse_transcript_data (data) {
  var html = "";

  // Transcript consequences
  if (data.transcript_consequences) {

    // Sort by gene symbol
    var sorted_transcript_consequences = data.transcript_consequences.sort(function(a,b) {
      return compareStrings(a.gene_symbol, b.gene_symbol);
    });

    $.each(sorted_transcript_consequences, function (index, trans) {
      var gene_id  = '<a class="icon-external-link bold_font" href="'+ ens_gene_url + trans.gene_id +'">'+trans.gene_symbol+'</a>';
      var trans_id = '<a class="icon-external-link" href="'+ ens_trans_url + trans.transcript_id +'">'+trans.transcript_id+'</a>';
      var strand = get_strand(trans.strand);

      var cons = [];
      $.each(trans.consequence_terms, function (index, cterm) {
        cons.push('<a class="icon-external-link" href="'+conseq_url+cterm+'" title="Click here to see the description of the consequence term '+cterm+'" target="_blank">'+cterm+'</a>');
      });

      var distance = (trans.distance) ? '<i>Distance to transcript: '+trans.distance+'bp' : '-';

      var hgvsc = (trans.hgvsc) ? trans.hgvsc : '-';
      
      var v_allele = (trans.strand == 1) ? trans.variant_allele : reverse_complement(trans.variant_allele,1);

      var biotype = trans.biotype.replace('_', ' ');

      html += '    <tr><td>' + gene_id + '</td><td>' + trans_id + '</td><td>' + biotype + '</td><td style="text-align:center">'+ strand + '</td><td>'+hgvsc+'</td><td>' +
                       cons.join(', ') + '</td><td>' + v_allele + '</td><td>' + trans.impact + '</td><td>' + distance+ '</td></tr>';
    });

    $('#tr_consequences > table > tbody').html(html);
  }
  else {
    $('#tr_consequences').html('<div class="clearfix margin-top-10 margin-bottom-20">'+
                               '  <div class="left icon-info close-icon-0 note_header lrg_dark_bg"></div>' + 
                               '  <div class="left note_content">No transcript consequence found</div>' +
                               '</div>');
  }
  return html;
}

function get_strand (strand, label) {
  var fw_arrow  = '<span class="bigger-font" style="color:blue" title="Forward strand of the coordinate system">&rarr;</span>';
  var rev_arrow = '<span class="bigger-font" style="color:red" title="Reverse strand of the coordinate system">&larr;</span>';
  if (label) {
    return (strand == 1) ? "Forward" : "Reverse";
  }
  else {
    return (strand == 1) ? fw_arrow : rev_arrow;
  }
}

function complement(seq) {
    return { A: 'T', T: 'A', G: 'C', C: 'G' , '-':'-' }[seq];
}    
function reverse_complement(seq, to_reverse) {
    var seq_array = seq.split('');
    if (to_reverse) {
      seq_array = seq_array.reverse();
    }
    return seq_array.map(complement).join('');
}  


function compareStrings(a, b) {
  // Assuming you want case-insensitive comparison
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}
