---
layout: page
title: Web services
tags: Webservice
icon-class: icon-tool
permalink: /web-service/
---

<div class="page_info">
  <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg" target="_blank">
    <h4 class="info_highlighted clearfix">
      <div class="left icon-link close-icon-5"></div>
      <div class="left">https://www.ebi.ac.uk/ebisearch/ws/rest/lrg</div>
    </h4>
  </a>
</div>

The EMBL-EBI provides [RESTful web services]({{ site.urls.embl_ebi }}/Tools/webservices/services/eb-eye_rest){: .icon-external-link}{:target="_blank"} for the LRG project. It also provides [client tools]({{ site.urls.embl_ebi }}/Tools/webservices/services/eb-eye_rest#clients){: .icon-external-link}{:target="_blank"} in several programming languages to query their RESTful web services and parse their outputs.
This replaces the now deprecated LRG web services previously available from the old website.

The EMBL-EBI RESTful web services provide several output formats such as XML, JSON, CSV or TSV.

Two main types of queries are available:

* [Search LRG(s)](#ws_lrg_search) using differents terms/IDs, e.g. LRG ID, HGNC symbol, Ensembl accession, NCBI accession, ...
* [Get LRG data annotation](#ws_lrg_data) from one or several entries  

The list of fields retrievables are listed [here](#ws_fields)

<div class="border_bottom_blue"></div>

<button class="btn btn-primary btn-xs is-collapsed" id="item_button" onclick="javascript:show_hide_all('item_title','item_content','item_button', 'web service use cases');">Expand all web service use cases</button>

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


<a name="ws_fields"></a>
<br />

<!-- Get the list of fields available -->
<div class="item_section_title clearfix">
  <div class="left"><h4 class="lrg_dark">List of fields available</h4></div>
  <div class="right" style="margin-right:5px"><a class="icon-next-page close-icon-5 rotate-icon-270" href="#top">Back to top</a></div>
</div>

<table class="table table-hover table-lrg">
  <thead>
    <tr>
      <th>Type</th>
      <th>Field</th>
      <th>Description</th>
      <th>Example <span class="smaller-text">(using LRG_1)</span></th>
    </tr>
  </thead>
  <tbody class="bordered-columns">
    <tr>
      <td rowspan="5">GRCh37 coordinates</td>
      <td class="bold_font">assembly_grch37</td>
      <td>Version of the GRCh37 assembly</td>
      <td>GRCh37.p13</td>
    </tr>
    <tr>
      <td class="bold_font">chr_name_grch37</td>
      <td>Chromosome name where the LRG is mapped on the GRCh37 assembly</td>
      <td>17</td>
    </tr>
    <tr>
      <td class="bold_font">chr_start_grch37</td>
      <td>Location start of the LRG when it is mapped on the GRCh37 assembly</td>
      <td>48259457</td>
    </tr>
    <tr>
      <td class="bold_font">chr_end_grch37</td>
      <td>Location end of the LRG when it is mapped on the GRCh37 assembly</td>
      <td>48284000</td>
    </tr>
    <tr>
      <td class="bold_font">chr_strand_grch37</td>
      <td>Location strand of the LRG when it is mapped on the GRCh37 assembly.
        <ul>
          <li>"1": corresponds to the forward strand</li>
          <li>"-1": corresponds to the reverse strand</li>
        </ul>
      </td>
      <td>-1</td>
    </tr>
    <tr class="tr_separator">
      <td rowspan="5">GRCh38 coordinates</td>
      <td class="bold_font">assembly_grch38</td>
      <td>Version of the GRCh38 assembly</td>
      <td>GRCh38.p7</td>
    </tr>
     <tr>
      <td class="bold_font">chr_name_grch38</td>
      <td>Chromosome name where the LRG is mapped on the GRCh38 assembly</td>
      <td>17</td>
    </tr>
    <tr>
      <td class="bold_font">chr_start_grch38</td>
      <td>Location start of the LRG when it is mapped on the GRCh38 assembly</td>
      <td>50182096</td>
    </tr>
    <tr>
      <td class="bold_font">chr_end_grch38</td>
      <td>Location end of the LRG when it is mapped on the GRCh38 assembly</td>
      <td>50206639</td>
    </tr>
    <tr>
      <td class="bold_font">chr_strand_grch38</td>
      <td>Location strand of the LRG when it is mapped on the GRCh37 assembly.
        <ul>
          <li>"1": corresponds to the forward strand</li>
          <li>"-1": corresponds to the reverse strand</li>
        </ul>
      </td>
      <td>-1</td>
    </tr>
    <tr class="tr_separator">
      <td rowspan="7">Other information</td>
      <td class="bold_font">description</td>
      <td>Corresponding gene short description</td>
      <td>collagen type I alpha 1 chain</td>
    </tr>
    <tr>
      <td class="bold_font">id</td>
      <td>LRG identifier</td>
      <td>LRG_1</td>
    </tr>
    <tr>
      <td class="bold_font">in_ensembl</td>
      <td>Flag informing whether the LRG is available in Ensembl or not.
        <ul>
          <li>"1": The LRG is available in Ensembl</li>
          <li>"0": The LRG is <u>not</u> available in Ensembl</li>
        </ul>
      </td>
      <td>1</td>
    </tr>
    <tr>
      <td class="bold_font">last_modification_date</td>
      <td>Date of the last modification of the updatable section in the format YYYYMMDD</td>
      <td>20161107</td>
    </tr>
    <tr>
      <td class="bold_font">name</td>
      <td>Corresponding HGNC gene symbol</td>
      <td>COL1A1</td>
    </tr>
    <tr>
      <td class="bold_font">organism</td>
      <td>Organism associated with the LRG</td>
      <td>Homo sapiens</td>
    </tr>
    <tr>
      <td class="bold_font">status</td>
      <td>Curation status of the LRG.
        <ul>
          <li>"public": The LRG has been publicly released and its genomic, transcript and protein sequences won't change.</li>
          <li>"pending": The LRG curation is still in working progress, which means that the genomic, transcript and protein sequences can change</li>
        </ul>
      </td>
      <td>public</td>
    </tr>
  </tbody>
</table>


