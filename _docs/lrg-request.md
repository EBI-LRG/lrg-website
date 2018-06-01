---
layout: page
title: Request an LRG
tags: Request
icon-class: icon-request
permalink: /documentation/lrg-request/
desc: No LRG record for your gene of interest? You can request one!
---


LRGs are created upon request by collaborators (members of diagnostic and research communities).  

<h3 class="icon-stop smaller-icon margin-top-30" id="before-requesting-an-lrg">Before requesting an LRG</h3>

<p>If you haven’t already, please read about the [LRG creation process](/documentation/lrg-creation){:target="_blank"}. Check if an [LRG already exists](/search/?query=*){:target="_blank"}, and if so its [status and curation progress](/curation-status){:target="_blank"}.</p>

<div class="margin-left-20 margin-bottom-20">

  <h5 id="if-your-gene-of-interest-already-has-a-pending-lrg-record">If your gene of interest already has a Pending LRG record:</h5>

  <p>Please do contact us anyway to let us know you are interested in the record being made public. 
  This helps us prioritise genes for curation.  Let us know which reference sequence you currently use for reporting sequence variants, especially if your transcript of choice is not included in the pending record or if you notice any other issues.</p>

  <div class="clearfix margin-bottom-20">
    <div class="left icon-info close-icon-0 note_header lrg_green2_bg"></div>
    <div class="left note_content">Pending records are subject to change and should not be used until they pass final approval and are made public.</div>
  </div>


  <h5 id="if-your-gene-of-interest-already-has-a-public-lrg-record">If your gene of interest already has a Public LRG record:</h5>

  <p>Please <a href="mailto:{{ site.email_contact }}">contact us</a> if the information in the record is incorrect, or if you think additional transcripts or information are required.</p>

</div>

<div class="margin-bottom-40"></div>



<h3 class="icon-request smaller-icon" id="make-your-request">Make your request</h3>

Feel free to contact us with any pre-request enquiries, especially if you are planning to request multiple LRGs.
 
Email us at <a href="mailto:{{ site.email_contact }}">{{ site.email_contact }}</a> to make your request and include the following details. If you
are requesting multiple LRGs please provide the information in a spreadsheet format.
 
<div class="highlight_block margin-bottom-20">
  <h5 id="required" class="margin-top-0">Required</h5>
  <ul>
    <li>Your name</li>
    <li>Your institution</li>
    <li>The <a class="icon-external-link" href="{{ site.urls.hgnc }}" target="_blank">HGNC</a> Gene symbol</li>
  </ul>

  <div class="margin-top-20"></div>

  <h5 id="strongly-recommended">Strongly recommended</h5>
  <ul>
    <li>Transcript(s) required (accession identifier and version)</li>
    <li>Community information (if applicable, <a href="#community-information-section">see below</a>)</li>
  </ul>
</div>


##### Important points
 
* The LRG record may include more than one transcript, if required for reporting variants.
Please list the more commonly used transcript first (e.g. t1 = NM_x, t2= NM_y). 

* Requesters may suggest any transcript of choice (RefSeq or ENST) for inclusion in an LRG record. Ultimately, the transcript sequences included in the LRG records are identical to RefSeq transcripts (NM).  If there is no RefSeq transcript for your transcript of interest, LRG curators will work with the NCBI to create it.
 
* If you do not know what transcripts should be included in the record please note this in your email.  LRG curators will work with you to establish which transcript is most appropriate.
 
* The genomic sequence included in each LRG record is identical to the RefSeqGene sequence (RSG) for the gene of interest.  
If there is no RSG for the gene, LRG curators will work with the NCBI to create it.  
If there is an issue with the RSG, mention this in your email and LRG curators will work with yourself and the NCBI to resolve the issue.

<div class="clearfix margin-bottom-20">
  <div class="left icon-info close-icon-0 note_header lrg_green2_bg"></div>
  <div class="left note_content">Please, read our <a class="icon-external-link icon-documentation smaller-icon close-icon-2" href="{{ site.privacy-notice-creation-link }}" target="_blank">Privacy Notice</a> for how we use personal data in the LRG record creation process.</div>
</div>

<div class="margin-bottom-30"></div>

##### Community information section
 
A "Community Section" is included in LRG records to note additional information deemed relevant by the requesters.  
This section may include:

* Legacy exon numbering (e.g. [LRG_5](/search/?query=LRG_5){:target="_blank"})
* Legacy amino acid numbering (e.g. [LRG_1](/search/?query=LRG_1){:target="_blank"})
* Haplotype information (e.g. [LRG_802](/search/?query=LRG_802){:target="_blank"})
* Other relevant information (e.g. [LRG_1061](/search/?query=LRG_1061){:target="_blank"})
