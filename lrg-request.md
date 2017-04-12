---
layout: page
title: LRG request
tags: Request
icon-class: icon-request
permalink: /lrg-request/
---

Below is a list of the information you need to supply when requesting a LRG record to be created. Remember, the LRG records are stable and will be used over a long period of time, so kindly make sure that the information you supply is accurate and in agreement with community consensus.  
<br />

### Contact information

Authoritative source (e.g. LSDB) information:

* Source name  

* Source URL  

* Name of Submitter (and e-mail address) - optional  


<span class="warning">NOTE:</span> Please refer to *e.g.* the LRG record for the **COL1A1** gene, [LRG_1]({{ site.lrg_ftp_http }}LRG_1.xml), for an example of how this contact information is displayed.  
<br />


### Sequence and transcript information


##### Using existing RefSeqGene record

For many genes, a reference gene model may already have been created within the RefSeqGene (RSG) project. In that case, it's often a good idea to use this RSG record as a starting point for the creation of the LRG. Please supply the following information:

* RefSeqGene accession
* Information regarding any alternative transcripts that should be included or modifications to existing sequence and transcript(s) required


##### If no RefSeqGene record exists

* Genomic sequence for your gene of interest
  * Submit this in either Fasta format or using a public sequence accession and version (Genbank/EMBL)
  * Remember to include upstream and downstream sequences for unique placement on the genome (We would recommend 5 kb upstream from the first exon and 2 kb downstream of the last exon or whatever is most appropriate. Be sure to include any promoter regions where mutations are reported).  

* The gene name for the LRG (optional)  

* For each transcript used for reporting mutations/diagnostics, please supply either an accession number (e.g. a RefSeq accession) OR:
  * Transcript-specific exon positions in LRG coordinates
  * Start and end positions of the coding region in LRG coordinates  
    or  
    cDNA sequence and translated peptide sequence  
    or  
    database sequence accessions and versions for the cDNA and peptide sequence
  * Amino acid sequence (optional unless it cannot be automatically generated from the coding region and exons)
  * Location of LRG on chromosome and genome assembly including any mismatch data (optional)  


<span class="warning">NOTE:</span> There can be more than one transcript per LRG if this is necessary and used for reporting mutations and diagnostic purposes. Please put the most used transcript first.
For databases that currently use an idealised set of exons as a reporting standard, these can be submitted for a LRG.  
<br />


### In some cases this information may be relevant

* If there is a legacy/other amino acid numbering system which would result in different amino acid numbering that would be generated automatically, you can include this.  

* Other exon numbering systems

<br />


### Submitting Your Data

Please submit your data to <a class="bold_font" href="mailto:request@lrg-sequence.org">request@lrg-sequence.org</a>.  
<br />


### XML specification

If you're happy using XML format, please download the specification from our [FTP site]({{ site.lrg_ftp_http }}) and use this for your submissions.  
<br />


### Coordinates

Coordinates should be **1-indexed** (i.e. start at position 1 rather than 0).


For information on how to use a LRG record, please see the [FAQ](/faq).
