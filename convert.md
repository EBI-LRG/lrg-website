---
layout: page
title: Convert variant coordinates
tags: Convert
icon-class: icon-mapping
permalink: /convert/
---


#### Convert variant coordinates between different reference sequences.

 
[NCBI Remap]({{ site.urls.ncbi }}/genome/tools/remap/docs/whatis){: .icon-external-link}{:target="_blank"} is a tool that allows users to project annotation data from one coordinate system to another.

<div class="highlight_block margin-bottom-40">  
  <a class="icon-external-link bold_font" href="{{ site.urls.ncbi }}/genome/tools/remap#tab=rsg&in_fmt=guess&out_fmt=guess&genome_workbench=true" target="_blank">Clinical remap</a> allows for the remapping of features from assembly sequences to RefSeqGene and LRG sequences (including transcript and protein sequences annotated on the RefSeqGene and LRG) or from RefSeqGene and LRG sequences to an assembly.
</div>

There are two other versions of NCBI remap that may be useful:

* [Assembly-Assembly]({{ site.urls.ncbi }}/genome/tools/remap#tab=asm&src_org=Homo%20sapiens&min_ratio=0.5&max_ratio=2.0&allow_locations=true&merge_fragments=true&in_fmt=guess&out_fmt=guess&genome_workbench=true){: .icon-external-link}{:target="_blank"} allows the remapping of features from one assembly to another.

* [Alt loci remap]({{ site.urls.ncbi }}/genome/tools/remap#tab=alt-loci&org_alt_loci=Homo%20sapiens&assm_alt_loci=GCF_000001405.37&min_ratio=0.5&max_ratio=2.0&allow_locations=true&merge_fragments=true&in_fmt=guess&out_fmt=guess&genome_workbench=true){: .icon-external-link}{:target="_blank"} allows for the mapping of features between the Primary assembly unit and the Alternate Loci and Patches assembly units available for GRC assemblies.

 
There are other conversion tools, such as:

* [Mutalyzer]({{ site.urls.mutalyzer }}){: .icon-external-link}{:target="_blank"}
* [Ensembl - Assembly Converter]({{ site.urls.ensembl }}/Homo_sapiens/Tools/AssemblyConverter?db=core){: .icon-external-link}{:target="_blank"}