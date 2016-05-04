---
layout: page
title: Web services
tags: Webservice
icon-class: icon-tool
permalink: /web-service/
---


The EMBL-EBI provides [RESTful web services](http://www.ebi.ac.uk/Tools/webservices/services/eb-eye_rest) for LRG. It also provides [client tools](http://www.ebi.ac.uk/Tools/webservices/services/eb-eye_rest#clients) in several programming languages to query their RESTful web services and parse their outputs.

Web service root URL for LRG: [http://www.ebi.ac.uk/ebisearch/ws/rest/lrg](http://www.ebi.ac.uk/ebisearch/ws/rest/lrg)

The EMBL-EBI RESTful web services provide several output format such as: XML, JSON, CSV, TSV.

Here are listed differents type of calls, which replace the deprecated LRG web services.  
They are grouped in 2 main types of queries:

* [Search LRG(s)](#ws_lrg_search) using differents terms/IDs, e.g. LRG ID, HGNC symbol, Ensembl accession, NCBI accession, ...
* [Get LRG data annotation](#ws_lrg_data) from one or several entries

<a name="ws_lrg_search"></a>
<br />


### Search LRG(s)

{% assign sorted_ws = (site.web-service | where:"tag","ws_lrg_search" | sort: 'order') %}
{% for ws in sorted_ws %}
  <div class="section-row">
    <div class="section-header">{{ ws.title }}</div>
    <div>
      {{ ws.content }}
    </div>
  </div>
{% endfor %}


<a name="ws_lrg_data"></a>
<br />

### Get LRG data annotation from one or several entries

{% assign sorted_ws = (site.web-service | where:"tag","ws_lrg_data" | sort: 'order') %}
{% for ws in sorted_ws %}
  <div class="section-row">
    <div class="section-header">{{ ws.title }}</div>
    <div>
      {{ ws.content }}
    </div>
  </div>
{% endfor %}
