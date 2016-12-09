---
title: "Can I see an example of variant for a gene with more than one transcript?"
faq_group: variant
faq_order: 3
faq_tags:
  - variant
  - gene
---

The calcitonin gene (CALCA) encodes two peptide hormones, calcitonin and calcitonin gene-related peptide (CGRP), that have no amino acid sequence in common. These hormones are derived by enzymatic cleavage of the translation products of two alternatively spliced mRNAs that exclusively contain exon 4 (calcitonin) or exons 5 and 6 (CGRP). Consequently, a SNP in the first base of exon 4 ([rs5241](http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=5241)) affects only the mRNA that encodes calcitonin.  

Using HGVS nomenclature, the variant can be described as **NM_001033952.2:c.228C>A** using the calcitonin RefSeq mRNA as the reference sequence. The corresponding protein-level description is **NP_001029124.1:p.Ser76Arg**.  
Alternatively, it can be described with respect to the RefSeqGene genomic DNA sequence as **NG_015960.1:g.8290C>A**.  

The LRG for the CALCA gene ([LRG_13](http://ftp.ebi.ac.uk/pub/databases/lrgex/LRG_13.xml)) contains information for both the major alternatively spliced forms of the gene's transcripts. Calcitonin and CGRP are represented by transcripts t2 and t1 respectively. Consequently, the SNP can be described at the DNA level as **LRG_13: g.8290C>A** or **LRG_13t2:c.228C>A**.  
The corresponding protein-level description is **LRG_13p2:p.Ser76Arg**.  

<div class="row">
  <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
    <table class="table table-hover table-lrg">
      <thead>
        <tr class="sorttable_header">
          <th class="first-col">Description Level</th>
          <th>RefSeqGene or RefSeq</th>
          <th>LRG</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left-col">Gene</td>
          <td>NG_015960.1:g.8290C>A</td>  
          <td>LRG_13:g.8290C>A</td>
        </tr>
        <tr>
          <td class="left-col">mRNA</td>
          <td>NM_001033952.2:c.228C>A</td>  
          <td>LRG_13t2:c.228C>A</td>
        </tr>
        <tr>
          <td class="left-col">Protein</td>
          <td>NP_001029124.1:p.Ser76Arg</td>  
          <td>LRG_13p2:p.Ser76Arg</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
