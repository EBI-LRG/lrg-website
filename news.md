---
layout: page
title: New LRGs
tags: New LRGs
icon-class: icon-news
permalink: /news/
---


{% for post in site.posts %}

<h4 class="icon-calendar close-icon-5 lrg_blue"><span class="lrg_dark">{{ post.date | date_to_long_string }}</span><span class="padding-left-10 padding-right-10">|</span><span class="badge badge_news_title">{{ post.lrg_count }}</span><span class="lrg_dark">{{ post.title }}:</span></h4>
<div>{{ post.content }}</div>

{% if forloop.last == false %}
<hr class="hr_separator" />
{% endif %}

{% endfor %}
