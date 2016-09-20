---
layout: page
title: "FAQ"
permalink: /faq/
tags: FAQ
icon-class: icon-help
exclude_from_search: true
---

<a id="top"/>
This is the LRG Frequently Asked Questions page.

{% include tutorial.html %}

{% assign sorted_faq = (site.faq | sort: 'faq_order') %}
<div>
  <h3>Frequently Asked Questions <button class="btn btn-primary btn-sm is-collapsed" style="margin-left:100px" id="faq_button" onclick="javascript:show_hide_all('faq_title','faq_content','faq_button');">Expand all FAQs</button></h3>
{% assign faq_groups = (site.faq_groups | sort: 'order') %}
{% for faq_group in faq_groups %}
  <div class="faq_section_title clearfix">
    <div class="left"><h4 class="lrg_dark">{{ faq_group.title }}</h4></div>
    <div class="right" style="margin-right:5px"><a class="icon-next-page close-icon-5 rotate-icon-270" href="#top">Back to top</a></div>
  </div>
  {% assign faq_group_name = faq_group.url | split:"/" | last %}
  <div>
  {% for faq in sorted_faq %}
    {% if faq.faq_group contains faq_group_name %}
      <div class="faq_entry">
        <div class="faq_title close-icon-5 icon-collapse-closed" id="{{ faq.faq_group }}_{{ faq.faq_order }}_button" onclick="javascript:show_hide('{{ faq.faq_group }}_{{ faq.faq_order }}')">
          {{ faq.title }}
        </div>
        <div class="faq_content" id="{{ faq.faq_group }}_{{ faq.faq_order }}">
          {{ faq.content }}
        </div>
    </div>
    {% endif %}
  {% endfor %}
  </div>
{% endfor %}
</div>
