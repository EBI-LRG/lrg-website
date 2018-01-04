---
layout: page
title: LRG records
tags: LRG records
icon-class: icon-file
permalink: /documentation/lrg-records/
desc: Details about the content of LRG records
---

LRG records are created upon request for a region of the genome, usually a gene of interest. Each record contains a stable “**fixed**” section and a regularly updated “**updatable**” section:

##### The fixed section does not version or change over time. It includes:

* Reference sequences
  * Genomic DNA sequence for the region of interest:
    * The [RefSeqGene]({{ site.urls.refseqgene }}){: .icon-external-link}{:target="_blank"} (NG) which matches the genome reference assembly (GRCh38) or a legacy sequence
  * Transcripts and proteins for reporting variants:
    * [RefSeq]({{ site.urls.refseq }}){: .icon-external-link}{:target="_blank"} transcript (NM) and protein (NP)
    * [GENCODE]({{ site.urls.gencode }}){: .icon-external-link}{:target="_blank"} transcript (ENST) to [RefSeq]({{ site.urls.refseq }}){: .icon-external-link}{:target="_blank"} transcript (NM) matches 
    * Ideally only one transcript per locus
    * Only well-supported, community approved sequences
  
* Exon numbering 
  * Based on all exons in transcripts in the fixed section
  * Assigned 5’ to 3’ with overlapping exons from multiple transcripts differentiated by a letter suffix e.g. 2A/2B in LRG_5.


##### Other content is updated weekly with the most recent biological information:

* Defined mappings between the LRG sequences and past and present genome reference assemblies, fixed patches and haplotypes. 
  * Mismatches are highlighted with their position and predicted consequence.
* Comments that summarise the relationship (sequence content and transcript structure) between LRG sequences and related transcripts from GENCODE (ENST) and RefSeq (NM)
* Mappings to all known transcripts, proteins and overlapping genes in the LRG region provided by RefSeq and GENCODE
* Relevant information provided by the community, such as legacy exon and amino acid numbering systems 
