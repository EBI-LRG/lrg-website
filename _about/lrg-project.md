---
title: "LRG project"
about_order: 1
expanded: 1
---

##### Created specifically for clinical reporting by manual curation
In recognition of the need to create universally accepted reference standards for variant reporting, a meeting of key stakeholders, including [EMBL-EBI]({{ site.urls.embl_ebi }}){: .icon-external-link}{:target="_blank"}, the [NCBI]({{ site.urls.ncbi }}){: .icon-external-link}{:target="_blank"}, [HGVS]({{ site.urls.hgvs }}){: .icon-external-link}{:target="_blank"}, LSDB curators and other members of the community, was held in 2008. The goal of the meeting was to design a reference system that would address the shortcomings of existing systems, including confusion over versioning, and that would allow consistent and unambiguous reporting of variants in clinically relevant loci. The new system, founded on  the [RefSeqGene project]({{ site.urls.refseqgene }}){: .icon-external-link}{:target="_blank"}, was named Locus Reference Genomic (LRG).  
<p>
  As of {{ site.lrg-date }}, over {{ site.lrg-created }} LRGs have been created, of which over {{ site.lrg-public }} are public and in use by the community.<br />
  The aim of the project is to create an LRG for every locus with clinical implications.
</p>

<div class="margin-top-30"></div>

##### Stable
Accurate and unambiguous reporting of variants over time is difficult, partly due to regular updates to transcripts and the genome reference assembly. Confusion over different transcript versions has also resulted in inconsistent variant reporting in the past. To address these challenges, all reference sequences included in the fixed section of public LRG records are stable, thus they neither change over time nor version. As a result, the LRG project establishes a coordinate system that is independent from upgrades to the genome reference assembly and includes sequences that are independent of ongoing changes to transcripts. The LRG system also establishes identifiers that do not version or change. To facilitate reporting, each LRG record provides annotation and mapping data that define the relationship between the LRG fixed section sequences, the genome reference assembly (GRCh37 and GRCh38) and all known transcripts from [RefSeq]({{ site.urls.refseq }}){: .icon-external-link}{:target="_blank"} and [GENCODE]({{ site.urls.gencode }}){: .icon-external-link}{:target="_blank"}.

<div class="margin-top-30"></div>

##### Flexible and collaborative
Each LRG record is created in collaboration with experts in the region of interest. Therefore, inclusion of legacy or community-requested reference sequences is supported. However, in recognition of the fact that NGS technology is based on alignments to the genome reference assembly, it is now our policy for all LRGs to match the genome reference assembly ({{ site.ref_assembly }}), unless there is a known error in the genome reference assembly or there is a prevalent legacy alternate allele that has been consistently and systematically used in clinical reporting.  

<div class="margin-top-30"></div>

##### Connect the past, present and future of clinical variant reporting
To be compatible with NGS-based sequencing, we aim to match all LRGs to the genome reference assembly ({{ site.ref_assembly }}). However, when an LRG based on legacy sequence is required, creating the LRG defines the relationship of the legacy sequence to the reference genome assembly. This facilitates the usage of legacy data alongside NGS technology. Where the community requests an allele that is incompatible with the genome reference assembly, we evaluate and request a review by the GRC if appropriate. 

The annotation for both RefSeq and GENCODE is reviewed as part of the manual curation process. Once a transcript model has been selected, efforts are made to have the corresponding RefSeq and GENCODE transcripts match each other and match the reference. In addition, we aim to have complete identity between the two transcripts, including the UTRs. This facilitates unambiguous multi-directional data exchange between RefSeq, GENCODE and the reference genome assemblies (GRCh37, GRCh38).

LRG records contain both GENCODE and RefSeq transcripts in the updatable section, therefore they are a unique record of annotation from both transcript sets in one place. More information on sequence sources can be found [here](/documentation/ref-seq-sources).

<div class="margin-top-30"></div>

##### Well-supported
All LRGs are generated and maintained by the NCBI and EMBL-EBI. They can be visualized in the [Ensembl]({{ site.urls.ensembl }}){: .icon-external-link}{:target="_blank"}, [NCBI]({{ site.urls.ncbi }}){: .icon-external-link}{:target="_blank"} and [UCSC]({{ site.urls.ucsc }}){: .icon-external-link}{:target="_blank"} genome browsers in context with all other existing annotations. Also, LRG sequences are compatible with HGVS nomenclature are supported by nomenclature checker systems, such as [Mutalyzer]({{ site.urls.mutalyzer }}){: .icon-external-link}{:target="_blank"} and [VariantValidator]({{ site.urls.vvalidator }}){: .icon-external-link}{:target="_blank"}. Use of LRG records has been recommended  by key organisations, such as the Human Genome Variation Society ([HGVS]({{ site.urls.hgvs }}){: .icon-external-link}{:target="_blank"}), the European Molecular Genetics Quality Network ([EMQN]({{ site.urls.emqn }}){: .icon-external-link}{:target="_blank"}), and the American College of Medical Genetics and Genomics ([ACMG]({{ site.urls.acmg }}){: .icon-external-link}{:target="_blank"}).
