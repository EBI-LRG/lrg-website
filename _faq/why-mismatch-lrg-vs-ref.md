---
title: "Why are there mismatches between LRG records and the reference genome assembly?"
faq_group: lrg_definition
faq_order: 6
faq_tags:
  - lrg_definition
  - vep
help: vep
---

The sequences in the LRG record do not necessarily perfectly match the reference genome assembly (GRCh37/38).  LRG genomic sequences are based on RefSeqGene records, which are an NCBI project to define genomic sequences to be used as reference standards for well-characterized genes.  

Sequences in the RefSeqGene set are well-supported and, if possible, represent a prevalent, 'standard' allele.  Therefore, there are a number of cases where the RefSeqGene sequences may differ from the reference genome assembly.  

* If the current reference assembly is not well support an alternate sequence is selected, in consultation with gene-specific experts as available.  When feasible, RefSeqGene sequences will be derived from a single clone, based on the assumption that no sequence errors were introduced in cloning, and that a single insert represents an example of a naturally occurring haplotype.  

* The default implementation of 'standard allele' is the sequence from the public reference assembly. If, however, there is published evidence, evidence from locus-specific databases, or evidence from clinical testers, that the sequence in the Reference assembly is not standard, the RefSeqGene sequence can be constructed from an alternate source sequence, or locally modified.  

During the curation of an LRG record our curators review all mismatches between the RefSeqGene and the reference assemblies (GRCh37 and GRCh38).

Read more about the [RefSeqGene project](https://www.ncbi.nlm.nih.gov/refseq/rsg/about/), and its [relationship with the LRG]( https://www.ncbi.nlm.nih.gov/refseq/rsg/lrg/).
