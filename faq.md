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

{% assign sorted_faq = (site.faq | sort: 'title') %}

{% assign faq_groups = (site.data['faq_group_map'] | sort: 'order') %}
{% for faq_group in faq_groups %}
<h4>{{ faq_group.title }}</h4>
<ul>
  {% for faq in sorted_faq %}
    {% if faq.faq_group contains faq_group.stub_name %}
  <li><a href="{{ faq.url }}">{{ faq.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>  
{% endfor %}