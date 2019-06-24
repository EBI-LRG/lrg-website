---
layout: page
title: "Variant information"
tag: vep
permalink: /vep2lrg/
icon-class: icon-help
include_in_search: false
include_in_sitemap: false
---

<script type="text/javascript" src="/js/vep2lrg.js"></script>
<script type="text/javascript">
  window.onload = function () {
    get_vep_results();
  }
</script>


<!-- Searched entry -->
<h2 id="vep_hgvs_title" style="display:none">HGVS: <span class="vep_hgvs"></span></h2>

<div id="vep_msg" style="display:none">
  <h4 class="icon-info close-icon-5 smaller-icon" style="text-align:center">Request sent to Ensembl. Please wait for the results ...</h4>
  <div class="loader" style="text-align:center"></div>
</div>


<!-- VEP results -->
<div id="vep_results" style="display:none">


  <!-- Co-located variants -->
  <div id="coloc_variants">
    <h3 class="icon-location smaller-icon close-icon-5 margin-top-10 margin-bottom-10">Co-located variant(s)</h3>
    <div id="coloc_variants_entry"></div>
  </div>

  <!-- Sequence variants -->
  <div id="seq_variants">  
    <h3 class="icon-info smaller-icon close-icon-5 margin-top-10 margin-bottom-10">Alleles</h3>
    <table id="seq_variants_table" class="table table-hover table-lrg">
      <thead>
        <tr><th colspan="4" class="split-header">Genomic sequences</th></tr>
        <tr>
          <th style="width:10%"></th>
          <th class="text-center" style="width:30%">Primary reference genome (<span class="assembly"></span>)</th>
          <th class="text-center" style="width:30%">LRG genomic</th>
          <th class="text-center" style="width:30%">Mapped LRG sequence</th>
        </tr>
      </thead>
      <tbody id="gen_seq">
        <tr>
          <td><b>Alleles</b></td>

          <!-- Reference assembly -->
          <td id="gen_ref_cell">
            <div class="allele_label clearfix">
              <div class="gen_ref_fwd_label allele_label_fwd"></div>
              <div class="gen_ref_fwd allele_label_text"></div>
            </div>
            <div class="clearfix">
              <div class="arrow ref_arrow"><div class="line"></div><div class="point point_right"></div></div>
            </div>
            <div class="clearfix">
              <div class="arrow ref_arrow"><div class="point point_left"></div><div class="line"></div></div>
            </div>
            <div class="allele_label clearfix">
              <div class="gen_ref_rev allele_label_text"></div>
              <div class="gen_ref_rev_label allele_label_rev"></div>
            </div>
          </td>

          <!-- LRG genomic -->
          <td id="gen_lrg_cell">
            <div class="allele_label_lrg clearfix">
              <div id="gen_lrg_fwd_label" class="allele_label_fwd"></div>
              <div id="gen_lrg_fwd" class="allele_label_text"></div>
            </div>
            <div class="clearfix">
              <div class="arrow_lrg"><div class="line lrg_blue_bg"></div><div class="point point_right lrg_blue"></div></div>
            </div>
            <div class="clearfix">
              <div class="arrow_lrg"><div class="point point_left lrg_purple"></div><div class="line lrg_purple_bg"></div></div>
            </div>
            <div class="allele_label_lrg clearfix">
              <div id="gen_lrg_rev" class="allele_label_text"></div>
              <div id="gen_lrg_rev_label" class="allele_label_rev"></div>
            </div>
          </td>

          <!-- LRG mapping to assembly -->
          <td id="lrg_ref_cell">
            <div class="allele_label_lrg clearfix">
              <div id="gen_lrg_ref_fwd_label" class="allele_label_fwd"></div>
              <div id="gen_lrg_ref_fwd" class="allele_label_text"></div>
            </div>
            <div class="clearfix">
              <div class="arrow_lrg"><div id="gen_lrg_ref_fwd_arrow_line" class="line lrg_blue_bg"></div><div id="gen_lrg_ref_fwd_arrow_point" class="point point_right lrg_blue"></div></div>
            </div>
            <div class="allele_label clearfix">
              <div class="gen_ref_fwd_label allele_label_fwd"></div>
              <div class="gen_ref_fwd allele_label_text"></div>
            </div>
            <div class="clearfix">
              <div class="arrow ref_arrow"><div class="line"></div><div class="point point_right"></div></div>
            </div>
            <div class="clearfix">
              <div class="arrow ref_arrow"><div class="point point_left"></div><div class="line"></div></div>
            </div>
            <div class="allele_label clearfix">
              <div class="gen_ref_rev allele_label_text"></div>
              <div class="gen_ref_rev_label allele_label_rev"></div>
            </div>
            <div class="clearfix">
              <div class="arrow_lrg"><div id="gen_lrg_ref_rev_arrow_point" class="point point_left lrg_blue"></div><div id="gen_lrg_ref_rev_arrow_line" class="line lrg_blue_bg"></div></div>
            </div>
            <div class="allele_label_lrg clearfix">
              <div id="gen_lrg_ref_rev" class="allele_label_text"></div>
              <div id="gen_lrg_ref_rev_label" class="allele_label_rev"></div>
            </div>
          </td>
        </tr>
        <tr id="allele_freq_row">
          <td><b>Allele frequency</b></td>
          <td id="ref_al_cell"></td>
          <td id="lrg_al_cell"></td>
          <td></td>
        </tr>
      </tbody>
      <thead>
        <tr><th colspan="4" class="split-header">Transcript sequences</th></tr>
        <tr>
          <th></th>
          <th class="text-center">Ensembl transcripts</th>
          <th class="text-center">LRG and RefSeq transcripts</th>
          <th class="text-center">Mapped LRG and RefSeq transcripts</th>
        </tr>
      </thead>
      <tbody id="trans_seq">
        <tr>
          <td><b>Transcript alleles</b></td>
          <td id="tr_ref_cell">            
            <div class="clearfix">
              <div id="tr_ref_arrow" class="arrow"></div>
            </div>
            <div id="tr_ref_al" style="text-align:center"></div>
          </td>
          <td id="tr_lrg_cell">            
            <div class="clearfix">
              <div id="tr_lrg_arrow" class="arrow_lrg"></div>
            </div>
            <div id="tr_lrg_al" style="text-align:center"></div>
          </td>
          <td id="tr_lrg_ref_cell">            
            <div class="clearfix">
              <div id="tr_lrg_ref_arrow" class="arrow_lrg"></div>
            </div>
            <div id="tr_lrg_ref_al" style="text-align:center"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


  <h3 class="icon-tool smaller-icon close-icon-5 margin-top-50">Predicted effect of variant (mismatch between LRG and primary reference genome)</h3>

  <!-- Summary results -->
  <div id="vep_summmary" class="clearfix margin-bottom-10">
    <div class="col-xs-6 col-sm-6 col-md-5 col-lg-5 padding-left-0">
      <table class="table-vep-sum" style="width:100%"><tbody></tbody></table>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-7 col-lg-7 padding-left-0 padding-right-0">
      <div class="section-box" id="search_help">
        <div class="clearfix">
          <div class="section-header icon-help left">About the VEP</div>
          <div class="right close-button icon-close close-icon-0" title="Close this box" onclick="javascript:$('#search_help').hide()"></div>
        </div>
        <p class="margin-top-5 margin-bottom-0 smaller-font">
          These results are generated by the <a class="icon-external-link" href="{{ site.urls.ensembl }}/info/docs/tools/vep/index.html" target="_blank">Variant Effect Predictor (VEP)</a>a>, an Ensembl tool that determines the effect of variants (SNPs, insertions, deletions, CNVs or structural variants) on genes, transcripts and protein sequences, as well as regulatory regions.<br />
          Results are presented based on a change FROM the primary reference genome allele to the LRG allele.
        </p>
        <div style="margin: 15px 5px 0px">
          {% assign faqs = site.faq | where: 'help','vep' %}
            {% for faq in faqs %}
              {% if faq.faq_tags contains "vep" %}
                {% assign faq_id = faq.faq_group | append : '_' | append : faq.faq_order %}
                <div class="item_entry" style="width:auto">
                  <div class="item_title close-icon-5 icon-collapse-closed" id="{{ faq_id }}_button" onclick="javascript:show_hide('{{ faq_id }}')">
                    {{ faq.title }}
                    <div class="icon-help right" data-toggle="tooltip" data-placement="bottom" title="Contextual help from the FAQ"></div>
                  </div>
                  <div class="item_content" id="{{ faq_id }}">
                    {{ faq.content }}
                  </div>
              </div>
              {% endif %}
          {% endfor %}
        </div>
      </div>
    </div>
  </div>

  <!-- Transcript consequences -->
  <h3 class="icon-analyse smaller-icon close-icon-5 margin-top-20 margin-bottom-10">Transcript consequences</h3>

  <div id="tr_consequences">
    <table class="table table-hover table-lrg">
      <thead>
        <tr>
          <th>Gene</th>
          <th>Transcript</th>
          <th>Biotype</th>
          <th>Strand</th>
          <th>HGVS</th>
          <th>Consequences<a class="icon-info-link" href="{{ site.urls.conseq_url }}consequence_type_table" data-toggle="tooltip" data-placement="bottom" title="Click here to see the list of consequences and their descriptions" target="_blank"></a></th>
          <th>Non-reference genome allele</th>
          <th>IMPACT<a class="icon-info-link" href="{{ site.urls.conseq_url }}consequence_type_table" data-toggle="tooltip" data-placement="bottom" title="Click here to see the list of consequences and their descriptions" target="_blank"></a></th>
        </tr>
      </thead>
      <tbody></tbody>  
    </table>
  </div>

</div>
