---
layout: page
title: Documentation
tags: Documentation
icon-class: icon-documentation
permalink: /documentation/
---

{% assign sorted_docs = (site.docs | sort: 'docs_order') %}
{% assign count_items = 0 %}

{% for doc in sorted_docs %}

  {% if count_items == 3 %}
    {% assign count_items = 0 %}
</div>
  {% endif %}

  {% if count_items == 0 %}
<div class="panel-row2 clearfix">
  {% endif %}

  {% assign count_items = count_items | plus: 1 %}
  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 section">
    <a class="section-link" href="{{ doc.permalink }}">
      <div class="section-title clearfix">
        <div class="{{ doc.icon-class }} close-icon-0 section-circle section-circle_blue"></div>
        <div class="section-sub-circle">{{ doc.title }}</div>
      </div>

       <div class="section-content text-center">{{ doc.desc }}</div>
    </a>
  </div>

{% endfor %}

{% capture faq_button %}
  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 section">
    <a class="section-link" href="/faq">
      <div class="section-title">
        <div class="icon-help close-icon-0 section-circle section-circle_blue"></div>
        <div class="section-sub-circle">FAQs</div>
      </div>

      <div class="section-content text-center">
        Find answers to most frequently asked questions
      </div>
    </a>
  </div>
{% endcapture %}


{% if count_items == 3 %}
</div>

<div class="panel-row2 clearfix">

{{ faq_button }}

</div>
{% else %}

{{ faq_button }}

{% endif %}

</div>
