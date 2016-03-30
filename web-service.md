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

Here are listed differents type of calls, which replace the deprecated LRG web services. They are classified in 2 main types of queries:


### 1. Search LRG(s)

<!-- List of public LRGs -->
<div class="section-row">
  <div class="section-header">Get list of public LRGs</div>
  <p>
    <b>Query:</b> 
    ?query=status:public
  </p>
  <p>
    <b>Example:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100</a>
  </p>
  <p>
    The particularity of the EMBL-EBI REST web service is it only returns a <span class="warning">maximum of 100 results at a time.</span>
  </p>
  <p>
    To retrieve all the data, if the total of entries is greater than 100, you need to use the pagination, e.g.:<br />
    Looking at the tag <b>"hitCount"</b> you can see how many entries have been found, and then you can loop over this number to retrieve all the results. Let's say the total number of result is <b>&lt;hitCount&gt;<span class="warning">663</span>&lt;/hitCount&gt;</b>, we have to loop like this:
  </p>
  <p>
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=0" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=0</a>
  </p>
  <p>
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=100" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=100</a>
  </p>
  <p>...</p>
  <p>
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=600" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=600</a>
  </p>
</div>


<!-- List of pending LRGs -->
<div class="section-row">
  <div class="section-header">Get list of pending LRGs</div>
  <p>
    <b>Query:</b> 
    ?query=status:pending
  </p>
  <p>
    <b>Example:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:pending&size=100" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:pending&size=100</a>
  </p>
  <p>
    Same as the section above "Get list of public LRGs", replacing the status <b>"public"</b> by <b>"pending"</b>.</span>
  </p>
</div>


<!-- Retrieve a LRG using a HGNC symbol -->
<div class="section-row">
  <div class="section-header">Retrieve a LRG using a HGNC symbol</div>
  <p>
    <b>Query:</b> 
    ?query=name:<i>&lt;HGNC_symbol&gt;</i>
  </p>
  <p>
    <b>Example:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=name:COL1A1" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=name:COL1A1</a>
  </p>
</div>


<!-- Retrieve a LRG using external references -->
<div class="section-row">
  <div class="section-header">Retrieve a LRG using external references</div>
  <p>
    <b>Query:</b> 
    ?query=<i>&lt;xref_id&gt;</i>
  </p>
  <p>
    <b>Example:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=ENSG00000108821" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=ENSG00000108821</a>
  </p>
</div>


### 2. Get data from one or several LRGs

<!-- Get the genomic coordinates of a list of LRGs -->
<div class="section-row">
  <div class="section-header">Get the genomic coordinates of a list of LRGs</div>
  <p>
    <b>URL syntax:</b> 
    /entry/<i>&lt;lrg_ids_list&gt;</i>?fields=<i>&lt;list_of_fields&gt;</i>
  </p>
  <p>
    <b>Example GRCh37:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37" target="_blank">/entry/LRG_1?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37</a>
  </p>
  <p>
    <b>Example GRCh38:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38" target="_blank">/entry/LRG_1?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38</a>
  </p>
  <p>
    <b>Example for several LRGs in 1 query:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1,LRG_2?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37" target="_blank">/entry/LRG_1,LRG_2?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37</a>
  </p>
</div>


<!-- Get the status of a list of LRGs -->
<div class="section-row">
  <div class="section-header">Get the status of a list of LRGs</div>
  <p>
    <b>URL syntax:</b> 
    /entry/<i>&lt;lrg_ids_list&gt;</i>?fields=status
  </p>
  <p>
    <b>Example for one LRG:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1?fields=status" target="_blank">/entry/LRG_1?fields=status</a>
  </p>
  <p>
    <b>Example for several LRGs:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1,LRG_2?fields=status" target="_blank">/entry/LRG_1,LRG_2?fields=status</a>
  </p>
</div>

<!-- Get the HGNC symbols of a list of LRGs -->
<div class="section-row">
  <div class="section-header">Get the HGNC symbols of a list of LRGs</div>
  <p>
    <b>URL syntax:</b> 
    /entry/<i>&lt;lrg_ids_list&gt;</i>?fields=name
  </p>
  <p>
    <b>Example for one LRG:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1?fields=name" target="_blank">/entry/LRG_1?fields=name</a>
  </p>
  <p>
    <b>Example for several LRGs:</b> 
    <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1,LRG_2?fields=name" target="_blank">/entry/LRG_1,LRG_2?fields=name</a>
  </p>
</div>