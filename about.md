---
layout: page
title: About
tags: About
icon-class: icon-info
permalink: /about/
---

{% assign sorted_about = (site.about | sort: 'about_order') %}

<!-- Table of content -->
<div class="clearfix margin-bottom-25">
  <ul class="sections_list">
    <li class="icon-next-page smaller-icon close-icon-2 lrg_blue section_title" style="padding-left:0px">
      <span class="lrg_dark bold_font">Main sections</span>
    </li>

{% for about_section in sorted_about %}
    <li><a href="#about_section_{{ about_section.about_order }}_button">{{ about_section.title }}</a></li>
{% endfor %}
    <li style="background-color:#FFF;padding:0px">
      <button class="btn btn-primary btn-xs is-expanded" id="about_button" onclick="javascript:show_hide_all('item_title_no_border_big','about_content','about_button','sections');">Collapse all sections</button>
    </li>
  </ul>
</div>


A **L**ocus **R**eference **G**enomic (**LRG**) record is manually curated and contains stable genomic, transcript and protein reference sequences for reporting clinically relevant sequence variants.

{% for about_section in sorted_about %}

  {% if about_section.expanded == 1 %}

<div class="item_title_no_border_big close-icon-5 icon-collapse-open margin-top-20" title="Click to expand" id="about_section_{{ about_section.about_order }}_button" onclick="javascript:show_hide('about_section_{{ about_section.about_order }}')">
  {{ about_section.title }}
</div>
<div class="about_content margin-left-10 margin-bottom-60" id="about_section_{{ about_section.about_order }}">
  {{ about_section.content }}
</div>

  {% else %}

<div class="item_title_no_border_big close-icon-5 icon-collapse-closed margin-top-20" title="Click to expand" id="about_section_{{ about_section.about_order }}_button" onclick="javascript:show_hide('about_section_{{ about_section.about_order }}')">
  {{ about_section.title }}
</div>
<div class="about_content margin-left-10 margin-bottom-60" id="about_section_{{ about_section.about_order }}" style="display:none">
  {{ about_section.content }}
</div>

  {% endif %}

{% endfor %}