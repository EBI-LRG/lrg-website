---
layout: page
title: "FAQ"
permalink: /faq/
tags: FAQ
icon-class: icon-help
exclude_from_search: true
---

This is the LRG Frequently Asked Questions page.

{% include tutorial.html %}

{% assign sorted_faq = (site.faq | sort: 'faq_order') %}

{% assign faq_groups = (site.faq_groups | sort: 'order') %}
{% for faq_group in faq_groups %}
  <h4>{{ faq_group.title }}</h4>
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
        {% if faq.faq_related %}
          <b>Related questions:</b>
          <ul>
            {% for faq_related_stub in faq.faq_related %}
              {% assign faq_related = site.data['faq_map'][faq_related_stub] %}
              {% if faq_related %}
                <li><a href="{{faq_related.url}}">{{faq_related.title}}</a></li>
              {% endif %}
            {% endfor %}
          </ul>
        {% endif %}
        </div>
    </div>
    {% endif %}
  {% endfor %}
  </div>
{% endfor %}

<!--<ul>
  {% for faq in sorted_faq %}
    {% if faq.faq_group contains faq_group_name %}
  <li><a href="{{ faq.url }}">{{ faq.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>-->
