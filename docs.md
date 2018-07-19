---
layout: page
title: Documentation
tags: Documentation
icon-class: icon-documentation
permalink: /documentation/
---

{% assign count_item = 0 %}
{% assign max_item_per_line = 3 %}

<div class="panel-row clearfix">
	{% for docs in site.docs %}
		{% if count_item == max_item_per_line %}
</div>
<div class="panel-row clearfix">
			{% assign count_item = 0 %}
		{% endif %}
		<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 section">
		  <a class="section-link" href="{{ docs.permalink }}">  
		    <div class="section-title">
		      <div class="{{ docs.icon-class }} close-icon-0 section-circle section-circle_blue"></div>
		      <div class="section-sub-circle">{{ docs.title }}</div>
		    </div>
		    <div class="section-content text-center">
		      {{ docs.desc }}
		    </div>
		  </a>
		</div>
		{% assign count_item = count_item | plus: 1 %}
	{% endfor %}
</div>