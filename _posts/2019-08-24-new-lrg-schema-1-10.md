---
layout: post
title: 'New LRG XML schema 1.10'
category: 'other'
---

##### The LRG XML schema has been updated with the following changes:

---

### "MANE Select" flag

The most significant change is the inclusion of the “MANE” attributes in order to display transcripts selected as part of our new initiative, the **MANE** (**M**atched **A**nnotation from the **N**CBI and **E**MBL-EBI) Project.  

This joint initiative between [Ensembl/GENCODE Project]({{ site.urls.gencode }}) and NCBI’s [RefSeq project]({{ site.urls.refseq }}) aims to release a genome-wide transcript set that contains one well-supported transcript per protein-coding locus (**MANE Select**). All transcripts in the MANE set perfectly align to GRCh38 and represent 100% identity (5’UTR, coding sequence, 3’UTR) between the RefSeq (NM) and corresponding Ensembl (ENST) transcript. Currently, a MANE Select transcript has been defined for ~67% of protein-coding loci. The MANE project also aims to release an expanded set (**MANE Plus**) to include additional transcripts per locus that are well-supported or of particular user interest.
For more information on MANE see [Ensembl’s MANE blog]({{ site.urls.ens_mane_blog }}) and the [NCBI’s MANE blog]({{ site.urls.ncbi_mane_blog }}).  

The **MANE-select** and **MANE-plus** values have been added to the **source** attribute of the **db_xref** XML tag. This allows us to display the “MANE Select” flag in the Fixed and Updatable sections of records. Our aim is to clarify the difference, if any, with LRG transcripts. Also, MANE transcripts are displayed as a Genoverse track in the “Mapping section” of records.

---

### New tag "superceded_by"

In the future, some **LRGs could be deprecated and superseded** by new ones. These new records will be for the same gene as their predecessor, but will have a different identifier and different reference sequences. **A record can be deprecated** if knowledge about the LRG transcript(s) in the Fixed section has changed significantly (i.e. changes to the position of the start ATG or changes to protein coding exons). Given that we cannot remove or replace transcripts in the Fixed Section, the only way to provide accurate information about an LRG transcript that has changed is to create a new record that includes the updated version of the transcript.  
If your favourite LRG has been superseded and you would like more information, please contact us at <a href="mailto:contact@lrg-sequence.org">contact@lrg-sequence.org</a>.

---

### New "type" attributes for the "mapping" tags

The "type" attributes **fix_patch** and **novel_patch** have been added to the "mapping" tag, for more clarity.

---

The full history of the LRG XML schema changes can be found [**here**](http://ftp.ebi.ac.uk/pub/databases/lrgex/README.txt).
