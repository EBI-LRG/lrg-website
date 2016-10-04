---
layout: page
title: Web services
tags: Webservice
icon-class: icon-tool
permalink: /web-service/
---

<div class="page_info">
  <h4 class="info_highlighted">Web service URL for LRG: <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg</a></h4>
</div>

The EMBL-EBI provides [RESTful web services](http://www.ebi.ac.uk/Tools/webservices/services/eb-eye_rest) for LRG. It also provides [client tools](http://www.ebi.ac.uk/Tools/webservices/services/eb-eye_rest#clients) in several programming languages to query their RESTful web services and parse their outputs.

The EMBL-EBI RESTful web services provide several output format such as XML, JSON, CSV or TSV.

Here are listed differents type of calls, which replace the deprecated LRG web services.  
They are grouped in 2 main types of queries:

* [Search LRG(s)](#ws_lrg_search) using differents terms/IDs, e.g. LRG ID, HGNC symbol, Ensembl accession, NCBI accession, ...
* [Get LRG data annotation](#ws_lrg_data) from one or several entries

<div class="border_bottom_blue"></div>

<button class="btn btn-primary btn-sm is-collapsed" id="item_button" onclick="javascript:show_hide_all('item_title','item_content','item_button', 'web service use cases');">Expand all web service use cases</button>

<a name="ws_lrg_search"></a>

<!-- Search LRG(s) -->
<div class="item_section_title clearfix">
  <div class="left"><h4 class="lrg_dark">Search LRG(s)</h4></div>
  <div class="right" style="margin-right:5px"><a class="icon-next-page close-icon-5 rotate-icon-270" href="#top">Back to top</a></div>
</div>

{% assign sorted_ws = (site.web-service | where:"tag","ws_lrg_search" | sort: 'order') %}
{% for ws in sorted_ws %}
  {% assign ws_id = 'ws_lrg_search_' | append : ws.order %}
  <div class="item_entry">
    <div class="item_title close-icon-5 icon-collapse-closed" id="{{ ws_id }}_button" onclick="javascript:show_hide('{{ ws_id }}')">
      {{ ws.title }}
    </div>
    <div class="item_content" id="{{ ws_id }}">
      {{ ws.content }}
    </div>
  </div>
{% endfor %}


<a name="ws_lrg_data"></a>
<br />

<!-- Get LRG data annotation from one or several entries -->
<div class="item_section_title clearfix">
  <div class="left"><h4 class="lrg_dark">Get LRG data annotation from one or several entries</h4></div>
  <div class="right" style="margin-right:5px"><a class="icon-next-page close-icon-5 rotate-icon-270" href="#top">Back to top</a></div>
</div>

{% assign sorted_ws = (site.web-service | where:"tag","ws_lrg_data" | sort: 'order') %}
{% for ws in sorted_ws %}
  {% assign ws_id = 'ws_lrg_data_' | append : ws.order %}
  <div class="item_entry">
    <div class="item_title close-icon-5 icon-collapse-closed" id="{{ ws_id }}_button" onclick="javascript:show_hide('{{ ws_id }}')">
      {{ ws.title }}
    </div>
    <div class="item_content" id="{{ ws_id }}">
      {{ ws.content }}
    </div>
  </div>
{% endfor %}
