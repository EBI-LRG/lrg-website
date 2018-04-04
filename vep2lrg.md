---
layout: page
title: "Variant Effect Predictor (VEP) results"
tag: vep
permalink: /vep2lrg/
icon-class: icon-tool
include_in_search: false
include_in_sitemap: false
---

<script type="text/javascript" src="/js/vep2lrg.js"></script>
<script type="text/javascript">
  window.onload = function () {
    get_vep_results();
  }
</script>

<div class="section-box" id="search_help">
  <div class="clearfix">
    <div class="section-header icon-help left">About the VEP</div>
    <div class="right close-button icon-close close-icon-0" title="Close this box" onclick="javascript:$('#search_help').hide()"></div>
  </div>
  <p class="margin-top-5 margin-bottom-0 smaller-text">
    The <a class="icon-external-link" href="{{ site.urls.ensembl }}/info/docs/tools/vep/index.html" target="_blank">Variant Effect Predictor (VEP)</a> determines the effect of variants (SNPs, insertions, deletions, CNVs or structural variants) on genes, transcripts, and protein sequence, as well as regulatory regions. 
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


<div id="vep_msg" style="display:none">
  <h4 class="icon-info close-icon-5 smaller-icon" style="text-align:center">Request sent to Ensembl. Please wait for the results ...</h4>
  <div class="loader" style="text-align:center"></div>
</div>


<!-- VEP results -->
<div id="vep_results" style="display:none">
  
  <h2>Results for <span id="vep_hgvs"></span></h2>

  <!-- Summary results -->
  <div id="vep_summmary">
    <h3 class="icon-menu smaller-icon close-icon-5 margin-bottom-10">Summary</h3>

    <div class="clearfix">
      <div class="col-xs-8 col-sm-8 col-md-7 col-lg-7 padding-left-0">
        <table class="table-vep-sum" style="width:100%"><tbody></tbody></table>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-5 col-lg-5 padding-right-0">
        <table class="table-vep-map"><tbody></tbody></table>
      </div>
    </div>

    <div id="vep_strand"></div>
  </div>


  <!-- Co-located variants -->
  <div id="coloc_variants">

    <h3 class="icon-location smaller-icon close-icon-5 margin-top-50 margin-bottom-10">Co-located variant(s)</h3>
      
    <table id="coloc_variants_table" class="table table-hover table-lrg">
      <thead>
        <tr>
          <th rowspan="2">Variant</th>
          <th rowspan="2">Alleles</th>
          <th class="split-header text-center" colspan="2">1000Genomes <a class="icon-external-link" href="http://www.internationalgenome.org/" target="_blank"></a></th>
          <th class="split-header text-center" colspan="2">gnomAD <a class="icon-external-link" href="http://gnomad.broadinstitute.org/" target="_blank"></a></th>
          <th rowspan="2">Ancestral<br />allele</th><th rowspan="2">Strand</th>
        </tr>
        <tr>
          <th>Minor allele<span class="icon-help tiny-icon close-icon-0 padding-left-5" data-toggle="tooltip" data-placement="bottom" id="ma" title="Minor Allele from the 1000Genomes Project (Phase 3)"></span></th>
          <th>MAF<span class="icon-help tiny-icon close-icon-0 padding-left-5" data-toggle="tooltip" data-placement="bottom"  id="maf" title="Minor Allele Frequency from the 1000Genomes Project (Phase 3)"></span></th>
          <th>Alt. Allele<span class="icon-help tiny-icon close-icon-0 padding-left-5" data-toggle="tooltip" data-placement="bottom" id="ma_gnomAD" title="Alternative allele of existing variant in gnomAD exomes combined population"></span></th>
          <th>AF<span class="icon-help tiny-icon close-icon-0 padding-left-5" data-toggle="tooltip" data-placement="bottom" id="maf_gnomAD" title="Frequency of existing variant in gnomAD exomes combined population"></span></th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>


  <!-- Transcript consequences -->
  <h3 class="icon-analyse smaller-icon close-icon-5 margin-top-50 margin-bottom-10">Transcript consequences</h3>

  <div id="tr_consequences">
    <table class="table table-hover table-lrg">
      <thead>
        <tr>
          <th>Gene</th>
          <th>Transcript</th>
          <th>Biotype</th>
          <th>Strand</th>
          <th>HGVS</th> 
          <th>Consequences<a class="icon-info-link" href="{{ site.urls.conseq_url }}consequences" data-toggle="tooltip" data-placement="bottom" title="Click here to see the list of consequences and their descriptions" target="_blank"></a></th>
          <th>Variant allele</th>
          <th>IMPACT<a class="icon-info-link" href="{{ site.urls.conseq_url }}consequences" data-toggle="tooltip" data-placement="bottom" title="Click here to see the list of consequences and their descriptions" target="_blank"></a></th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody></tbody>  
    </table>
  </div>

</div>



