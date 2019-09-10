---
layout: page
title: News
tags: News
icon-class: icon-news
permalink: /news/
---


{% for post in site.posts %}

  {% assign pdate = post.date | date: "%Y%m%d" %}
  {% if post.category == 'new data' %}
    {% assign news_id = 'n' | append: pdate %}
  {% else %}
    {% assign news_id = 'o' | append: pdate %}
  {% endif %}

<h4 id="{{ news_id }}" class="icon-calendar close-icon-5 lrg_blue"><span class="lrg_dark">{{ post.date | date_to_long_string }}</span><span class="padding-left-10 padding-right-10">|</span><span class="badge badge_news_title">{{ post.lrg_count }}</span><span class="lrg_dark">{{ post.title }}:</span></h4>
<div>{{ post.content }}</div>

  {% if forloop.last == false %}
  <hr class="hr_separator margin-top-40"/>
  {% endif %}

{% endfor %}
