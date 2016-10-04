---
layout: page
title: "VEP results"
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
    The <a href="http://www.ensembl.org/info/docs/tools/vep/index.html" target="_blank">Variant Effect Predictor (VEP)</a> determines the effect of variants (SNPs, insertions, deletions, CNVs or structural variants) on genes, transcripts, and protein sequence, as well as regulatory regions. 
  </p>
  <div style="margin: 15px 5px 0px">
    {% assign faqs = (site.faq | where: 'help','vep') %}
     
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

<div id="vep_results"></div>



