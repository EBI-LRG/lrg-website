---
layout: page
title: "FAQ"
permalink: /faq/
tags: FAQ
icon-class: icon-help
exclude_from_search: true
---

This is the LRG Frequently Asked Questions page.

{% assign sorted_faq = (site.faq | sort: 'title') %}
{% for faq in sorted_faq %}
* [{{ faq.title }}]({{ faq.url }}){% endfor %}
