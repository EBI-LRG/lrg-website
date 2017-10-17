---
layout: page
title: LRG creation process
tags: LRG creation process
icon-class: icon-request
permalink: /documentation/lrg-creation/
desc: Description about how the LRG records are created
docs_order: 2
---

The LRG project is a collaboration between the NCBI and EMBL-EBI. The creation of an LRG involves several steps, listed here.   
You can check the progress of pending LRGs [here](/curation-status).

* **Request of an LRG** 
  * LRGs are created upon request by collaborators (e.g. members of diagnostic and research communities and/or clinical experts from specific disease areas, LSDB curators, etc.), following the guidelines found here: [Request an LRG](/lrg-request).
  * The genomic sequence included in each LRG record is identical to the [RefSeqGene]({{ site.urls.refseqgene }}){: .icon-external-link}{:target="_blank"} sequence (RSG) for the gene of interest. If there is no RSG for the gene, LRG curators will work with the NCBI to ensure its creation. It is our policy for all LRGs to match the genome reference assembly. However, alternative sequences may be requested if there is a prevalent legacy alternate allele or if there is an error in the genome reference assembly.
  * Requesters may suggest any transcript of choice (RefSeq or ENST) for inclusion in an LRG record. If there is no sequence for the desired transcript, LRG curators will work to ensure its creation.  

<div class="margin-bottom-10"></div>
* **Creation of pending record**
  * Pending records are not finalised and are subject to change.

<div class="margin-bottom-10"></div>
* **Automated Annotation**
  * The most current annotation from [GENCODE]({{ site.urls.gencode }}){: .icon-external-link}{:target="_blank"} and [RefSeq]({{ site.urls.refseq }}){: .icon-external-link}{:target="_blank"} at each locus is included in the updatable section of records and refreshed on a weekly basis.

<div class="margin-bottom-10"></div>
* **Manual Curation**
  * Curation of LRG records is an expert activity performed by scientists at the EMBL-EBI.
  * Review of genomic reference sequence
    * Curators examine the RefSeqGene for any mismatches with respect to the genome reference assembly (GRCh38).
    * If a mismatch exists, curators examine the frequency of the alleles
    * If the genome reference assembly alleles have a frequency of 5% or less in all populations, LRG curators will report this to [GRC]({{ site.urls.grc }}){: .icon-external-link}{:target="_blank"} and request a review. Genome reference assembly alleles with a frequency higher than 5% in any population are considered representative and will not be requested for review. 
    *  LRG curators also discuss with the requester to determine whether the RefSeqGene alternate alleles represent prevalent legacy alleles. 
    *  The goal is to match the genome reference assembly as much as possible, and curators work with the NCBI to make changes to the RefSeqGene if appropriate. 
  * Review of Transcripts
    *  All known transcripts (RefSeq and GENCODE) are manually reviewed by our curators.
    *  Transcriptional and translational supporting evidence and community usage is assessed. 
    *  LRG curators request that GENCODE and/or RefSeq review the locus of interest if there are significant discrepancies between transcripts. 
  * Selection of Transcript(s) for inclusion
    * We aim to include one transcript, though sometimes more than one will be necessary to ensure that all variants at the locus can be reported. 
    * Only transcripts with good biological evidence that are essential for reporting variants will be included. 
    * For each selected transcript, it is our goal to build complete identity between the RefSeq transcript and the corresponding GENCODE transcript.
  * Expert review
    * Experts in the LRG region of interest are contacted for input. For more on experts see the [LRG collaborators page](/lrg-collaborators).

<div class="margin-bottom-10"></div> 
* **Publication of LRG**
  * Once the LRG record and sequences have been reviewed and approved by requesters, experts and LRG curators, the record is finalised and collaborators informed. These records are referred to as “public” LRGs. The reference sequences included in the fixed section cannot be changed once the LRG is made public.

<div class="margin-bottom-10"></div>
* The **updatable section** of all records, “pending” and “public”, **is refreshed** in an automated manner on a weekly basis.

<div class="margin-bottom-40"></div>

