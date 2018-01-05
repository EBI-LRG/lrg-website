---
layout: page
title: Documentation
tags: Documentation
icon-class: icon-info
permalink: /documentation
---

{% assign sorted_docs = site.docs | sort: 'title' %}

{% assign items = 0 %}
{% assign max-items-per-line = 3 %}

<div class="panel-row clearfix">

  {% for doc in sorted_docs %}

  {% if items == max-items-per-line %}
    {% assign items = 0 %}
</div>
<div class="panel-row clearfix">
  {% endif %}

  
  {% assign items=items | plus:1 %}

  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 section">
    <div class="section">
      <a class="section-link" href="{{ doc.permalink }}">
        <div class="section-title">
          <div class="{{ doc.icon-class }} close-icon-0 section-circle section-circle_blue"></div>
          <div class="section-sub-circle margin-left-5">{{ doc.title }}</div>
        </div>
        <div class="section-content text-center">{{ doc.desc }}</div>
      </a>
    </div>
  </div>

  {% endfor %}

</div>