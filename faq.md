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
  <h3>Frequently Asked Questions <button class="btn btn-primary btn-xs is-collapsed" style="margin-left:50px" id="item_button" onclick="javascript:show_hide_all('item_title','item_content','item_button');">Expand all FAQs</button></h3>
{% assign faq_groups = (site.faq_groups | sort: 'order') %}
{% assign half_faq_groups_size = faq_groups.size | divided_by: 2 %}
  <div class="clearfix">
    <div class="left">
      <ul>
      
      
  {% for faq_group in faq_groups %}
    
    {% if forloop.index0 == half_faq_groups_size %}
      </ul>
    </div>
    <div class="left margin-left-20">
      <ul>
    {% endif %}

    {% assign faq_group_name = faq_group.url | split:"/" | last %}
        <li><a href="#{{ faq_group_name }}">{{ faq_group.title }}</a></li>

  {% endfor %}
      </ul>
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
