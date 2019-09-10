---
title: "Why do some transcripts have a 'MANE Select' tag ?"
faq_group: lrg_definition
faq_order: 5
faq_tags:
  - lrg_definition
---

The **MANE** (**M**atched **A**nnotation from the **N**CBI and **E**MBL-EBI) Project is a joint initiative between EMBL-EBI’s [Ensembl/GENCODE Project]({{ site.urls.gencode }}) and NCBI’s [RefSeq project]({{ site.urls.refseq }}). MANE aims to release a genome-wide transcript set that contains one well-supported transcript per protein-coding locus (MANE Select). All transcripts in the MANE set perfectly align to GRCh38 and represent 100% identity (5’UTR, coding sequence, 3’UTR) between the RefSeq (NM) and corresponding Ensembl (ENST) transcript.  

The flag **MANE Select** has been included in the records to note which transcript is the MANE Select for each gene. Currently, a MANE Select transcript has been defined for ~67% of protein-coding loci, though we aim to achieve genome-wide coverage.  

For more information on MANE see [Ensembl's MANE blog]({{ site.urls.ens_mane_blog }}) and [NCBI’s MANE blog]({{ site.urls.ncbi_mane_blog }}).
