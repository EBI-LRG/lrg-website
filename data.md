---
layout: page
title: Data
tags: Data
icon-class: icon-download
permalink: /data/
---

<!-- Table of content -->
<div class="clearfix margin-bottom-40">
  <div class="left sections_list">
    <span class="icon-next-page smaller-icon close-icon-2 lrg_blue padding-bottom-5">
      <span class="lrg_dark bold_font">Sections</span>
    </span>
    <ul class="margin-top-5 margin-bottom-5">
      <li><a href="#lrg-data">LRG data</a></li>
      <li><a href="#lrg-in-ensembl">LRG in Ensembl</a></li>
      <li><a href="#lrg-xml-schema">XML schema</a></li>
      <li><a href="#lrg-archived-data">Archived data</a></li>
      <li><a href="#web-services">Web services</a></li>
    </ul>
  </div>
</div>



### LRG data

LRG data is available on the [LRG FTP site]({{ site.urls.lrg_ftp }}){:target="_blank"} in **XML format**.  
The LRG genomic, transcript and protein sequences are also available in **FASTA format** on the [LRG FTP site]({{ site.urls.lrg_ftp }}fasta){:target="_blank"}.

<div class="clearfix">
  <div class="left padding-bottom-5">There is the possibility to download all the public and pending LRGs:</div>

  <div class="row left margin-left-20">
    <table class="table table-hover table-lrg table-lrg-bold-left-col">
      <thead>
        <tr class="sorttable_header">
          <th>Status</th>
          <th colspan="2">Formats (zipped)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="vertical-align:middle">Public</td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}LRG_public_xml_files.zip">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">XML</div>
              </div>
            </a>
          </td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}fasta/LRG_public_fasta_files.zip">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">FASTA</div>
              </div>
            </a>
          </td>  
        </tr>
        <tr>
          <td style="vertical-align:middle">Pending</td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}LRG_pending_xml_files.zip">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">XML</div>
              </div>
            </a>
          </td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}LRG_pending_fasta_files.zip">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">FASTA</div>
              </div>
            </a>
          </td>  
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="clearfix margin-bottom-20">
  <div class="left icon-info close-icon-0 note_header lrg_green2_bg"></div>
  <div class="left note_content">If you can't access to the LRG FTP site through the FTP protocol, you can access it using the HTTP protocol: <a href="http://ftp.ebi.ac.uk/pub/databases/lrgex/" target="_blank">LRG FTP site - HTTP</a>.</div>
</div>


##### Summary data

<div class="row">
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <table class="table table-hover table-lrg table-lrg-bold-left-col">
      <thead>
        <tr>
          <th rowspan="2">Data type(s)</th>
          <th rowspan="2">Description</th>
          <th rowspan="2">Format</th>
          <th colspan="2" class="split-header">Files location by assembly</th>
        </tr>
        <tr>
          <th class="border-left">GRCh37</th>
          <th>GRCh38</th>
        </tr>
      </thead>
      <tbody class="bordered-columns">
        <tr>
          <td>
            <div>LRG genes</div>
            <div>LRG transcripts</div>
          </td>
          <td class="smaller-font">
            The file contains 4 tracks:
            <ul>
              <li>Public LRG genes</li>
              <li>Public LRG transcripts, with their exon(s) coordinates</li>
              <li>Pending LRG genes</li>
              <li>Pending LRG transcripts, with their exon(s) coordinates</li>
            </ul>
          </td>
          <td>BED<br /><span class="smaller-font">(12 columns)</span></td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}LRG_GRCh37.bed" target="_blank">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">BED</div>
              </div>
            </a>
          </td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}LRG_GRCh38.bed" target="_blank">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">BED</div>
              </div>
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div>LRG genes</div>
            <div class="smaller-font padding-top-2" style="font-weight:normal">with <span class="lrg_green2">genomic coordinates</span></div>
          </td>
          <td class="smaller-font">
            The file lists the LRG genes in genomic coordinates. The columns are:
            <ul>
              <li>LRG identifier</li>
              <li>HGNC symbol</li>
              <li>Status (public/pending)</li>
              <li>Chromosome</li>
              <li>Start</li>
              <li>End</li>
              <li>Strand (1 = forward, -1 = reverse)</li>
            </ul>

            <div class="clearfix">
              <div id="lrg_data_file_gene_button" class="item_title_no_border_small close-icon-5 icon-collapse-closed left margin-bottom-2" onclick="javascript:show_hide('lrg_data_file_gene')">File content example</div>
            </div>
            <div id="lrg_data_file_gene" style="display:none">
              <table class="table table-bordered table-lrg">
                <thead>
                  <tr><th>LRG_ID</th><th>HGNC_SYMBOL</th><th>LRG_STATUS</th><th>CHROMOSOME</th><th>START</th><th>STOP</th><th>STRAND</th></tr>
                </thead>
                <tbody>
                  <tr><td>LRG_1</td><td>COL1A1</td><td>public</td><td>17</td><td>50182096</td><td>50206639</td><td>-1</td></tr>
                  <tr><td>LRG_2</td><td>COL1A2</td><td>public</td><td>7</td><td>94389561</td><td>94433232</td><td>1</td></tr>
                </tbody>
              </table>
            </div>
          </td>
          <td>Tabulated</td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}list_LRGs_GRCh37.txt" target="_blank">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">TXT</div>
              </div>
            </a>
          </td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}list_LRGs_GRCh38.txt" target="_blank">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">TXT</div>
              </div>
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div>LRG transcripts</div>
            <div class="smaller-font padding-top-2" style="font-weight:normal">with <span class="lrg_green2">exons coordinates</span></div>
          </td>
          <td class="smaller-font">
            The file lists the LRG transcripts, exons and protein in genomic coordinates<br />
            The columns are:
            <ul>
              <li>LRG transcript identifier</li>
              <li>HGNC symbol</li>
              <li>Chromosome</li>
              <li>Strand (1 = forward, -1 = reverse)</li>
              <li>Transcript start</li>
              <li>Transcript end</li>
              <li>List of exons coordinates ("start-end" separated by a comma)</li>
              <li>LRG protein identifier</li>
              <li>Protein start</li>
              <li>Protein end</li>
            </ul>

            <div class="clearfix">
              <div id="lrg_data_file_tr1_button" class="item_title_no_border_small close-icon-5 icon-collapse-closed left margin-bottom-2" onclick="javascript:show_hide('lrg_data_file_tr1')">File content example</div>
            </div>
            <div id="lrg_data_file_tr1" style="display:none">
              <table class="table table-bordered table-lrg">
                <thead>
                  <tr><th>LRG_TRANSCRIPT</th><th>HGNC_SYMBOL</th><th>CHROMOSOME</th><th>STRAND</th><th>TRANSCRIPT_START</th><th>TRANSCRIPT_STOP</th><th>EXONS_COORDS</th><th>LRG_PROTEIN</th><th>CDS_START</th><th>CDS_STOP</th></tr>
                </thead>
                <tbody>
                  <tr><td>LRG_1t1</td><td>COL1A1</td><td>17</td><td>-1</td><td>50184096</td><td>50201639</td><td><ul style="margin:0px;padding-left:15px"><li>50184096-50185648</li><li>50185778-50186020</li><li>...</li><li>50201411-50201639</li></ul></td><td>LRG_1p1</td><td>50185502</td><td>50201513</td></tr>
                  <tr><td>LRG_2t1</td><td>COL1A2</td><td>7</td><td>1</td><td>94394561</td><td>94431232</td><td><ul style="margin:0px;padding-left:15px"><li>94394561-94395101</li><li>94397748-94397758</li><li>...</li><li>94430247-94431232</li></ul></td><td>LRG_2p1</td><td>94395032</td><td>94430393</td></tr>
                </tbody>
              </table>
            </div>
          </td>
          <td>Tabulated</td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}list_LRGs_transcripts_GRCh37.txt" target="_blank">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">TXT</div>
              </div>
            </a>
          </td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}list_LRGs_transcripts_GRCh38.txt" target="_blank">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">TXT</div>
              </div>
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div>LRG transcripts</div>
            <div class="smaller-font padding-top-2" style="font-weight:normal">with <span class="lrg_green2">external references</span></div>
          </td>
          <td class="smaller-font">
            The file lists the LRG transcripts and their external references<br />
            The columns are:
            <ul>
              <li>LRG ID</li>
              <li>HGNC symbol</li>
              <li>RefSeqGene ID</li>
              <li>LRG transcript</li>
              <li>RefSeq transcript ID with the sequence identical to the LRG transcript</li>
              <li>Ensembl transcript ID with the sequence identical to LRG transcript</li>
              <li>CCDS ID</li>
            </ul>

            <div class="clearfix">
              <div id="lrg_data_file_tr2_button" class="item_title_no_border_small close-icon-5 icon-collapse-closed left margin-bottom-2" onclick="javascript:show_hide('lrg_data_file_tr2')">File content example</div>
            </div>
            <div id="lrg_data_file_tr2" style="display:none">
              <table class="table table-bordered table-lrg">
                <thead>
                  <tr><th>LRG</th><th>HGNC_SYMBOL</th><th>REFSEQ_GENOMIC</th><th>LRG_TRANSCRIPT</th><th>REFSEQ_TRANSCRIPT</th><th>ENSEMBL_TRANSCRIPT</th><th>CCDS</th></tr>
                </thead>
                <tbody>
                  <tr><td>LRG_1</td><td>COL1A1</td><td>NG_007400.1</td><td>t1</td><td>NM_000088.3</td><td>-</td><td>CCDS11561.1</td></tr>
                  <tr><td>LRG_2</td><td>COL1A2</td><td>NG_007405.1</td><td>t1</td><td>NM_000089.3</td><td>ENST00000297268.10</td><td>CCDS34682.1</td></tr>
                </tbody>
              </table>
            </div>
          </td>
          <td>Tabulated</td>
          <td>-</td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}list_LRGs_transcripts_xrefs.txt" target="_blank">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">TXT</div>
              </div>
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div>LRG proteins</div>
            <div class="smaller-font padding-top-2" style="font-weight:normal">with <span class="lrg_green2">RefSeq proteins</span></div>
          </td>
          <td class="smaller-font">
            The file lists the LRG proteins and their corresponding RefSeq proteins and transcripts<br />
            The columns are:
            <ul>
              <li>LRG protein ID</li>
              <li>RefSeq Protein ID</li>
              <li>LRG ID</li>
              <li>LRG transcript</li>
              <li>RefSeq Transcript ID</li>
            </ul>

            <div class="clearfix">
              <div id="lrg_data_file_pr_button" class="item_title_no_border_small close-icon-5 icon-collapse-closed left margin-bottom-2" onclick="javascript:show_hide('lrg_data_file_pr')">File content example</div>
            </div>
            <div id="lrg_data_file_pr" style="display:none">
              <table class="table table-bordered table-lrg">
                <thead>
                  <tr><th>LRG_PROTEIN</th><th>REFSEQ_PROTEIN</th><th>LRG</th><th>LRG_TRANSCRIPT</th><th>REFSEQ_TRANSCRIPT</th></tr>
                </thead>
                <tbody>
                  <tr><td>LRG_1p1</td><td>NP_000079.2</td><td>LRG_1</td><td>LRG_1t1</td><td>NM_000088.3</td></tr>
                  <tr><td>LRG_2p1</td><td>NP_000080.2</td><td>LRG_2</td><td>LRG_2t1</td><td>NM_000089.3</td></tr>
                </tbody>
              </table>
            </div>
          </td>
          <td>Tabulated</td>
          <td>-</td>
          <td>
            <a href="{{ site.urls.lrg_ftp }}list_LRGs_proteins_RefSeq.txt" target="_blank">
              <div class="file_link clearfix">
                <div class="left icon-file close-icon-2 tiny-icon"></div>
                <div class="left">TXT</div>
              </div>
            </a>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>  


### LRG in Ensembl

<div class="clearfix">
  <div class="left file_link">
    The list of LRGs already imported in <a class="icon-external-link" href="{{ site.urls.ensembl }}" target="_blank">Ensembl</a> is available in this text file:
  </div>
  <div class="left margin-left-5">
    <a href="{{ site.urls.lrg_ftp }}data_files/lrgs_in_ensembl.txt" target="_blank">
      <div class="file_link clearfix">
          <div class="left icon-file close-icon-2 tiny-icon"></div>
          <div class="left">TXT</div>
      </div>
    </a>
  </div>
</div>
<br />


### LRG XML schema

The LRG XML schema documentation is downloadable [here]({{ site.urls.lrg_ftp }}docs){:target="_blank"} and the different versions of the XML schema definitions (RELAX NG format) are available [here]({{ site.urls.lrg_ftp }}docs/schemas){:target="_blank"}.  
The current LRG XML schema version is **{{ site.lrg-schema }}**.  
<br />


### LRG archived data

<div class="clearfix">
  <div class="left padding-bottom-5">Previous versions of the LRGs (in different LRG XML schemas) are available:</div>

  <div class="row left margin-left-20">
    <table class="table table-hover table-lrg table-lrg-bold-left-col">
      <thead>
        <tr class="sorttable_header">
          <th>Schema version</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Schema 1.8</td>
          <td>
            <a class="icon-link smaller-icon close-icon-5" href="{{ site.urls.lrg_ftp }}SCHEMA_1_8_ARCHIVE/" target="_blank">FTP site</a>
          </td>  
        </tr>
        <tr>
          <td>Schema 1.7</td>
          <td>
            <a class="icon-link smaller-icon close-icon-5" href="{{ site.urls.lrg_ftp }}SCHEMA_1_7_ARCHIVE/" target="_blank">FTP site</a>
          </td>  
        </tr>
        <tr>
          <td>Schema 1.6</td>
          <td>
            <a class="icon-link smaller-icon close-icon-5" href="{{ site.urls.lrg_ftp }}SCHEMA_1_6_ARCHIVE/" target="_blank">FTP site</a>
          </td>  
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h3 class="icon-tool smaller-icon" id="web-services">Web services</h3>

The EMBL-EBI provides RESTful web services for LRG.
<div><a class="icon-next-page smaller-icon close-icon-2" href="/web-service">See more</a></div>
