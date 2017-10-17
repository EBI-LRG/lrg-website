---
layout: page
title: About
tags: About
icon-class: icon-info
permalink: /about/
---

{% assign sorted_about = (site.about | sort: 'about_order') %}
  <div class="clearfix margin-bottom-25">
    <div class="left sections_list">
      <span class="icon-next-page smaller-icon close-icon-2 lrg_blue padding-bottom-5">
        <span class="lrg_dark bold_font">Sections</span>
      </span>
      <ul class="margin-top-5 margin-bottom-5">
  {% for about_section in sorted_about %}
        <li><a href="#about_{{ about_section.about_order }}">{{ about_section.title }}</a></li>
  {% endfor %}
      </ul>
    </div>
  </div>

A **L**ocus **R**eference **G**enomic (**LRG**) record is manually curated and contains stable genomic, transcript and protein reference sequences for reporting clinically relevant sequence variants.

{% for about_section in sorted_about %}

<div id="about_{{ about_section.about_order }}" class="item_title_no_border_big margin-top-20">
  {{ about_section.title }}
</div>
<div class="about_content margin-left-10 margin-bottom-60" id="about_section_{{ about_section.about_order }}">
  {{ about_section.content }}
</div>

{% endfor %}