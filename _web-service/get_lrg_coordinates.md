---
title: "Get the genomic coordinates of a list of LRGs"
tag: ws_lrg_data
order: 1
---

<p>
  <b>URL syntax:</b> /entry/<i>&lt;lrg_ids_list&gt;</i>?fields=<i>&lt;list_of_fields&gt;</i>
</p>
<p>
  <b>Example GRCh37:</b> 
  <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37" target="_blank">/entry/LRG_1?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37</a>
</p>
<p>
  <b>Example GRCh38:</b> 
  <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38" target="_blank">/entry/LRG_1?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38</a>
</p>
<p>
  <b>Example for several LRGs in 1 query:</b> 
  <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg/entry/LRG_1,LRG_2?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37" target="_blank">/entry/LRG_1,LRG_2?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37</a>
</p>