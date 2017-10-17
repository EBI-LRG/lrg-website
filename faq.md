---
layout: page
title: "Frequently Asked Questions"
permalink: /faq/
tags: FAQ
icon-class: icon-help
exclude_from_search: true
---

<a id="top"/>

{% assign sorted_faq = (site.faq | sort: 'faq_order') %}
<div>

<!-- Table of content -->
{% assign faq_groups = (site.faq_groups | sort: 'order') %}
  <div class="clearfix margin-bottom-40">
    <div class="left sections_list">
      <span class="icon-next-page smaller-icon close-icon-2 lrg_blue padding-bottom-5">
        <span class="lrg_dark bold_font">Categories</span>
      </span>
      <ul class="margin-top-5 margin-bottom-5">
 {% for faq_group in faq_groups %}
    {% assign faq_group_name = faq_group.url | split:"/" | last %}
        <li><a href="#{{ faq_group_name }}">{{ faq_group.title }}</a></li>
  {% endfor %}
      </ul>
    </div>
    <div class="left" style="padding-left:60px">
      <button class="btn btn-primary btn-xs is-collapsed" id="item_button" onclick="javascript:show_hide_all('item_title','item_content','item_button');">Expand all FAQs</button>
    </div>
  </div>

{% for faq_group in faq_groups %}
  {% assign faq_group_name = faq_group.url | split:"/" | last %}
  <div class="item_section_title clearfix" id="{{ faq_group_name }}">
    <div class="left"><h4 class="lrg_dark">{{ faq_group.title }}</h4></div>
    <div class="right" style="margin-right:5px"><a class="icon-next-page close-icon-5 rotate-icon-270" href="#top">Back to top</a></div>
  </div>
  {% assign faq_group_name = faq_group.url | split:"/" | last %}
  <div>
  {% for faq in sorted_faq %}
    {% if faq.faq_group contains faq_group_name %}
      {% assign faq_id = faq.faq_group | append : '_' | append : faq.faq_order %}
      <div class="item_entry">
        <div class="item_title close-icon-5 icon-collapse-closed" id="{{ faq_id }}_button" onclick="javascript:show_hide('{{ faq_id }}')">
          {{ faq.title }}
        </div>
        <div class="item_content" id="{{ faq_id }}">
          {{ faq.content }}
        </div>
    </div>
    {% endif %}
  {% endfor %}
  </div>
{% endfor %}
</div>
