---
layout: page
title: "FAQ"
permalink: /faq/
tags: FAQ
icon-class: icon-help
---

This is the LRG Frequently Asked Questions page.

{% include tutorial.html %}

{% assign sorted_faq = (site.faq | sort: 'title') %}

{% assign faq_groups = (site.data['faq_group_map'] | sort: 'order') %}
<ul>
  {% for faq in sorted_faq %}
  <li><a href="{{ faq.url }}">{{ faq.title }}</a></li>
  {% endfor %}
</ul> 