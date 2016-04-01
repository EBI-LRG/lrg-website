---
title: "LRG records don't have versions and RefSeqGene records do. Why?"
faq_group: most_frequent
faq_tags:
  - most_frequent
  - records
  - version
---

The RefSeq project, following the convention of the International Nucleotide Sequence Database collaboration (http://www.insdc.org/), assigns sequence identifiers as a combination of a stable component (the accession), and a version. Any revision of the sequence results in the incrementing of the version number. The version number is indicated after the decimal point at end of the accession number (e.g. NM_000088.3).  
Unfortunately, the version of a sequence is often not reported when a variant description is presented in a publication. Thus, uncertainty can result when trying to interpret the consequence of any variant if the current version of the reference sequence is greater than 1. This problem is avoided in the LRG accessioning system by not having versions. Once an LRG is created, the sequence data are never changed.
