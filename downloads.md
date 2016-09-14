---
layout: page
title: Downloads
tags: Downloads
icon-class: icon-download
permalink: /downloads/
---

### LRG data

LRG data is available on the [LRG FTP site](ftp://ftp.ebi.ac.uk/pub/databases/lrgex/) in **XML format**.  
The LRG genomic, transcript and protein sequences are also available in **FASTA format** on the [LRG FTP site](ftp://ftp.ebi.ac.uk/pub/databases/lrgex/fasta).

There is the possibility to download all the public and pending LRGs:

<div class="row">
  <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4">
    <table class="table table-hover table-lrg">
      <thead>
        <tr class="sorttable_header">
          <th class="first-col">Status</th>
          <th colspan="2">Formats (zipped)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left-col">Public</td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/LRG_public_xml_files.zip">[XML]</a>
          </td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/fasta/LRG_public_fasta_files.zip">[FASTA]</a>
          </td>  
        </tr>
        <tr>
          <td class="left-col">Pending</td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/LRG_pending_xml_files.zip">[XML]</a>
          </td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/fasta/LRG_pending_fasta_files.zip">[FASTA]</a>
          </td>  
        </tr>
      </tbody>
    </table>
  </div>
</div>

<span class="warning">NOTE:</span> If you can't access to the LRG FTP site through the FTP protocol, you can access it using the HTTP protocol: [LRG FTP site - HTTP](http://ftp.ebi.ac.uk/pub/databases/lrgex/).

<br />  

##### Summary data

<div class="row">
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <table class="table table-hover table-lrg">
      <thead>
        <tr class="sorttable_header">
          <th rowspan="2" class="first-col">Format</th>
          <th rowspan="2">Description</th>
          <th colspan="2" class="split-header">Files location by assembly</th>
        </tr>
        <tr class="sorttable_header">
          <th>GRCh37</th>
          <th>GRCh38</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left-col">BED</td>
          <td>
            The file contains 4 tracks:
            <ul>
              <li>Public LRG genes</li>
              <li>Public LRG transcripts, with their exon(s) coordinates</li>
              <li>Pending LRG genes</li>
              <li>Pending LRG transcripts, with their exon(s) coordinates</li>
            </ul>
          </td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/LRG_GRCh37.bed" target="_blank">[BED]</a>
          </td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/LRG_GRCh38.bed" target="_blank">[BED]</a>
          </td>
        </tr>

        <tr>
          <td class="left-col">Tabulated<br /><span style="font-weight:normal">(LRG genes)</span></td>
          <td>
            The file lists the LRG genes in genomic coordinates. The columns are:
            <ul>
              <li>LRG identifier (e.g. LRG_1)</li>
              <li>HGNC symbol (e.g. COL1A1)</li>
              <li>Status (public/pending)</li>
              <li>Chromosome</li>
              <li>Start</li>
              <li>End</li>
              <li>Strand (1 = forward, -1 = reverse)</li>
            </ul>
          </td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/list_LRGs_GRCh37.txt" target="_blank">[TXT]</a>
          </td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/list_LRGs_GRCh38.txt" target="_blank">[TXT]</a>
          </td>
        </tr>

        <tr>
          <td class="left-col">Tabulated<br /><span style="font-weight:normal">(LRG transcripts, exons, proteins)</span></td>
          <td>
            The file lists the LRG transcripts, exons and protein in genomic coordinates<br />
            The columns are:
            <ul>
             <li>LRG transcript identifier (e.g. LRG_1t1)</li>
             <li>HGNC symbol (e.g. COL1A1)</li>
             <li >Chromosome</li>
             <li>Strand (1 = forward, -1 = reverse)</li>
             <li>Transcript start</li>
             <li>Transcript end</li>
             <li>List of exons coordinates ("start-end" separated by a comma)</li>
             <li>LRG protein identifier (e.g. LRG_1p1)</li>
             <li>Protein start</li>
             <li>Protein end</li>
            </ul>
          </td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/list_LRGs_transcripts_GRCh37.txt" target="_blank">[TXT]</a>
          </td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/list_LRGs_transcripts_GRCh38.txt" target="_blank">[TXT]</a>
          </td>
        </tr>

        <tr>
          <td class="left-col">Tabulated<br /><span style="font-weight:normal">(LRG transcripts + external references)</span></td>
          <td>
            The file lists the LRG transcripts and their external references<br />
            The columns are:
            <ul>
             <li>LRG ID (e.g. LRG_2)</li>
             <li>HGNC symbol (e.g. COL1A2)</li>
             <li>RefSeqGene ID (e.g. NG_007405.1)</li>
             <li>LRG transcript (e.g. t1)</li>
             <li>RefSeq transcript ID with the same sequence as the LRG transcript (e.g. NM_000089.3)</li>
             <li>Ensembl transcript ID with the same sequence as the LRG transcript (e.g. ENST00000297268.10)</li>
             <li>CCDS ID (e.g. CCDS34682.1)</li>
            </ul>
          </td>
          <td>-</td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/list_LRGs_transcripts_xrefs.txt" target="_blank">[TXT]</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>  


### LRG in Ensembl
  
The list of LRGs already imported in [Ensembl](http://www.ensembl.org) is available in this [text file](ftp://ftp.ebi.ac.uk/pub/databases/lrgex/lrgs_in_ensembl.txt).  
<br />
  
  
### LRG XML schema

The LRG XML schema doumentations are downloadable [here](ftp://ftp.ebi.ac.uk/pub/databases/lrgex/docs) and the different version of the XML schema definitions (RELAX NG format) are available [here](ftp://ftp.ebi.ac.uk/pub/databases/lrgex/docs/schemas).  
The current LRG XML schema version is **{{ site.lrg-schema }}**.  
<br />
  
  
### LRG archived data

Previous versions of the LRGs (in different LRG XML schemas) are available:

<div class="row">
  <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4">
    <table class="table table-hover table-lrg">
      <thead>
        <tr class="sorttable_header">
          <th class="first-col">Schema version</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left-col">Schema 1.8</td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/SCHEMA_1_8_ARCHIVE/" target="_blank">FTP site</a>
          </td>  
        </tr>
        <tr>
          <td class="left-col">Schema 1.7</td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/SCHEMA_1_7_ARCHIVE/" target="_blank">FTP site</a>
          </td>  
        </tr>
        <tr>
          <td class="left-col">Schema 1.6</td>
          <td>
            <a href="ftp://ftp.ebi.ac.uk/pub/databases/lrgex/SCHEMA_1_6_ARCHIVE/" target="_blank">FTP site</a>
          </td>  
        </tr>
      </tbody>
    </table>
  </div>
</div>

### Web services

The EMBL-EBI provides [RESTful web services](http://www.ebi.ac.uk/Tools/webservices/services/eb-eye_rest) for LRG.
<div><a class="icon-next-page smaller-icon close-icon-2" href="/web-service">See more</a></div>