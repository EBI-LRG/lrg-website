---
layout: page
title: About
tags: About
icon-class: icon-info
permalink: /about/
---

<!-- Table of content -->
<div class="clearfix page_menu">
  <ul class="sections_list">
    <li class="icon-next-page smaller-icon close-icon-2 lrg_blue section_title">
      <span class="lrg_dark bold_font">Main sections</span>
    </li>
    <li><a href="#lrg-records">LRG records</a></li>
    <li><a href="#lrg-project">LRG project</a></li>
    <li><a href="#lrg-creation-process">LRG creation process</a></li>
    <li><a href="#accessing-lrg-records">Accessing LRG records</a></li>
    <li><a href="#further-information">Further information</a></li>
  </ul>  
</div>


A **L**ocus **R**eference **G**enomic (**LRG**) record is manually curated and contains stable genomic, transcript and protein reference sequences for reporting clinically relevant sequence variants.




### LRG records

LRG records are created upon request for a region of the genome, usually a gene of interest. Each record contains a stable “**fixed**” section and a regularly updated “**updatable**” section:

##### The fixed section does not version or change over time. It includes:

* Reference sequences
  * Genomic DNA sequence for the region of interest:
    * The RefSeqGene (NG) which matches the genome reference assembly (GRCh38) or a legacy sequence
  * Transcripts and proteins for reporting variants:
    * RefSeq transcript (NM) and protein (NP)
    * GENCODE transcript (ENST) to RefSeq transcript (NM) matches 
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
  
<div class="margin-bottom-40"></div>


### LRG project

<div class="margin-top-25"></div>

##### Created specifically for clinical reporting by manual curation
In recognition of the need to create universally accepted reference standards for variant reporting, a meeting of key stakeholders, including EMBL-EBI, the NCBI, HGVS, LSDB curators and other members of the community, was held in 2008. The goal of the meeting was to design a reference system that would address the shortcomings of existing systems, including confusion over versioning, and that would allow consistent and unambiguous reporting of variants in clinically relevant loci. The new system, founded on  the RefSeqGene project, was named Locus Reference Genomic (LRG). As of July 2017, over 1000 LRGs have been created, of which over x (695) are public and in use by the community. The aim of the project is to create an LRG for every locus with clinical implications.

<div class="margin-top-25"></div>

##### Stable
Accurate and unambiguous reporting of variants over time is difficult, partly due to regular updates to transcripts and the genome reference assembly. Confusion over different transcript versions has also resulted in inconsistent variant reporting in the past. To address these challenges, all reference sequences included in the fixed section of public LRG records are stable, thus they neither change over time nor version. As a result, the LRG project establishes a coordinate system that is independent from upgrades to the genome reference assembly and includes sequences that are independent of ongoing changes to transcripts. The LRG system also establishes identifiers that do not version or change. To facilitate reporting, each LRG record provides annotation and mapping data that define the relationship between the LRG fixed section sequences, the genome reference assembly (GRCh37 and GRCh38) and all known transcripts from RefSeq and GENCODE.

<div class="margin-top-25"></div>

##### Flexible and collaborative
Each LRG record is created in collaboration with experts in the region of interest. Therefore, inclusion of legacy or community-requested reference sequences is supported. However, in recognition of the fact that NGS technology is based on alignments to the genome reference assembly, it is now our policy for all LRGs to match the reference genome, unless there is a known error in the genome reference assembly or there is a prevalent legacy alternate allele that has been consistently and systematically used in clinical reporting.  

<div class="margin-top-25"></div>

##### Connect the past, present and future of clinical variant reporting
To be compatible with NGS-based sequencing, we aim to match all LRGs to the genome reference assembly. However, when an LRG based on legacy sequence is required, creating the LRG defines the relationship of the legacy sequence to the reference genome assembly. This facilitates the usage of legacy data alongside NGS technology. Where the community requests an allele that is incompatible with the genome reference assembly, we evaluate and request a review by the GRC if appropriate. 

The annotation for both RefSeq and GENCODE is reviewed as part of the manual curation process. Once a transcript model has been selected, efforts are made to have the corresponding RefSeq and GENCODE transcripts match each other and match the reference. In addition, we aim to have complete identity between the two transcripts, including the UTRs. This facilitates unambiguous multi-directional data exchange between RefSeq, GENCODE and the reference genome assemblies (GRCh37, GRCh38).

LRG records contain both GENCODE and RefSeq transcripts in the updatable section, therefore they are a unique record of annotation from both transcript sets in one place. (See below for more info on different sequence sources

<div class="margin-top-25"></div>

##### Well-supported
All LRGs are generated and maintained by the NCBI and EMBL-EBI, and can be visualized in the Ensembl, NCBI and UCSC genome browsers in context with all other existing annotations. Also, LRG sequences are compatible with HGVS nomenclature and supported by nomenclature checker systems, such as Mutalyzer. Use of LRG records has been recommended  by key organisations, such as the Human Genome Variation Society (HGVS), the European Molecular Genetics Quality Network (EMQN), and the American College of Medical Genetics and Genomics (ACMG).

<div class="margin-bottom-40"></div>




### LRG creation process

The LRG project is a collaboration between the NCBI and EMBL-EBI. The creation of an LRG involves several steps, listed here.   
You can check the progress of pending LRGs [here](/curation-status).

* **Request of an LRG -** 
  * LRGs are created upon request by collaborators (e.g. members of diagnostic and research communities and/or clinical experts from specific disease areas, LSDB curators, etc.), following the guidelines found here: <span style="font-style:bold;color:red">include LINK</span>.
  * The genomic sequence included in each LRG record is identical to the RefSeqGene sequence (RSG) for the gene of interest. If there is no RSG for the gene, LRG curators will work with the NCBI to ensure its creation. It is our policy for all LRGs to match the genome reference assembly. However, alternative sequences may be requested if there is a prevalent legacy alternate allele or if there is an error in the genome reference assembly.
  * Requesters may suggest any transcript of choice (RefSeq or ENST) for inclusion in an LRG record. If there is no sequence for the desired transcript, LRG curators will work to ensure its creation.  

<div class="margin-bottom-10"></div>
* **Creation of pending record -**
  * Pending records are not finalised and are subject to change.

<div class="margin-bottom-10"></div>
* **Automated Annotation -**
  * The most current annotation from GENCODE and RefSeq at each locus is included in the updatable section of records and refreshed on a weekly basis.

<div class="margin-bottom-10"></div>
* **Manual Curation -**
  * Curation of LRG records is an expert activity performed by scientists at the EMBL-EBI.
  * Review of genomic reference sequence
    * Curators examine the RefSeqGene for any mismatches with respect to the genome reference assembly (GRCh38).
    * If a mismatch exists, curators examine the frequency of the alleles
    * If the genome reference assembly alleles have a frequency of 5% or less in all populations, LRG curators will report this to GRC and request a review. Genome reference assembly alleles with a frequency higher than 5% in any population are considered representative and will not be requested for review. 
    *  LRG curators also discuss with the requester to determine whether the RefSeqGene alternate alleles represent prevalent legacy alleles. 
    *  The goal is to match the genome reference assembly as much as possible, and curators work with the NCBI to make changes to the RefSeqGene if appropriate. 
  * Review of Transcripts - 
    *  All known transcripts (RefSeq and GENCODE) are manually reviewed by our curators.
    *  Transcriptional and translational supporting evidence and community usage is assessed. 
    *  LRG curators request that GENCODE and/or RefSeq review the locus of interest if there are significant discrepancies between transcripts. 
  * Selection of Transcript(s) for inclusion - 
    * We aim to include one transcript, though sometimes more than one will be necessary to ensure that all variants at the locus can be reported. 
    * Only transcripts with good biological evidence that are essential for reporting variants will be included. 
    * For each selected transcript, it is our goal to build complete identity between the RefSeq transcript and the corresponding GENCODE transcript.
  * Expert review - 
    * Experts in the LRG region of interest are contacted for input. For more on experts see the [LRG collaborators page](/lrg-collaborators).

<div class="margin-bottom-10"></div> 
* **Publication of LRG -**
  * Once the LRG record and sequences have been reviewed and approved by requesters, experts and LRG curators, the record is finalised and collaborators informed. These records are referred to as “public” LRGs. The reference sequences included in the fixed section cannot be changed once the LRG is made public.

<div class="margin-bottom-10"></div>
* The **updatable section** of all records, “pending” and “public”, **is refreshed** in an automated manner on a weekly basis.

<div class="margin-bottom-40"></div>




### Accessing LRG records

The website lists public and pending records and has a FTP site for downloading LRGs. LRGs can be visualized in NCBI, Ensembl and UCSC genome browsers.

<div class="margin-bottom-40"></div>




### How to use LRG records
* Use for reporting variants
* Careful when interpreting



<div class="margin-bottom-40"></div>




### Reference sequence sources
<span style="font-style:bold;font-weight:30px;color:red">TODO</span>

<div class="margin-bottom-40"></div>




### Further information

##### Publications
* **Locus Reference Genomic: reference sequences for the reporting of clinically relevant sequence variants**  
[MacArthur JA et al., Nucleic Acids Res. **2014** Jan (doi: 10.1093/nar/gkt1198)](http://dx.doi.org/10.1093/nar/gkt1198){: .icon-external-link}

* Locus Reference Genomic sequences: an improved basis for describing human DNA variants  
[Dalgleish R et al., Genome Med. **2010**, 2:24](http://genomemedicine.com/content/2/4/24/){: .icon-external-link}

* Conventional wisdom (Editorial)  
[Nature Genetics **2010**, 42, p. 363](http://www.nature.com/ng/journal/v42/n5/abs/ng0510-363.html){: .icon-external-link}

<div class="margin-top-25"></div>

##### [Frequently Asked Questions (FAQs)](/faq)
<div class="margin-top-25"></div>

##### Additional resources
* [LRG video presentation](http://www.ebi.ac.uk/training/online/course/locus-reference-genomic-lrg-resource-webinar){: .icon-external-link}: a webinar of ~30min providing an overview and demo of the LRG resource.

* The LRG specification [document]({{ site.lrg_ftp_http }}docs/LRG.pdf)

For more information on how the RefSeqGene records relate to the LRG project, please refer to this NCBI webpage document
<div class="margin-top-25"></div>

##### Licence
The LRG project imposes no restrictions on access to, or use of, the data provided. The code written by the members of the project is provided under the **Apache 2.0 licence**.
<br />
Special thanks to Spencer Phillips (EMBL-EBI) for designing the LRG logo.

