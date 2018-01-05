---
layout: page
title: Convert variant coordinates
tags: Convert
icon-class: icon-mapping
permalink: /documentation/convert/
desc: Convert coordinates from different sources (e.g. LRG, RefSeqGene, GRCh38, GRCh37)
---


#### Convert variant coordinates between different reference sequences.

There are several tools that allows users to project annotation data from one coordinate system to another.  
These include:


##### [NCBI Remap]({{ site.urls.ncbi }}/genome/tools/remap/docs/whatis){: .icon-external-link}{:target="_blank"}

* [Clinical remap]({{ site.urls.ncbi }}/genome/tools/remap#tab=rsg&in_fmt=guess&out_fmt=guess&genome_workbench=true){: .icon-external-link}{:target="_blank"} allows for the remapping of features from assembly sequences to RefSeqGene and LRG sequences (including transcript and protein sequences annotated on the RefSeqGene and LRG) or from RefSeqGene and LRG sequences to an assembly.

* [Assembly-Assembly]({{ site.urls.ncbi }}/genome/tools/remap#tab=asm&src_org=Homo%20sapiens&min_ratio=0.5&max_ratio=2.0&allow_locations=true&merge_fragments=true&in_fmt=guess&out_fmt=guess&genome_workbench=true){: .icon-external-link}{:target="_blank"} allows the remapping of features from one assembly to another.

* [Alt loci remap]({{ site.urls.ncbi }}/genome/tools/remap#tab=alt-loci&org_alt_loci=Homo%20sapiens&assm_alt_loci=GCF_000001405.37&min_ratio=0.5&max_ratio=2.0&allow_locations=true&merge_fragments=true&in_fmt=guess&out_fmt=guess&genome_workbench=true){: .icon-external-link}{:target="_blank"} allows for the mapping of features between the Primary assembly unit and the Alternate Loci and Patches assembly units available for GRC assemblies.

<div class="margin-bottom-30"></div>
##### [Ensembl - Assembly Converter]({{ site.urls.ensembl }}/Homo_sapiens/Tools/AssemblyConverter?db=core){: .icon-external-link}{:target="_blank"}
Maps coordinates between different reference genome assemblies

<div class="margin-bottom-30"></div>
##### [Mutalyzer]({{ site.urls.mutalyzer }}){: .icon-external-link}{:target="_blank"}
Provides a series of tools to check variant HGVS nomenclature and convert between different reference sequence systems.

<div class="margin-bottom-30"></div>
##### [VariantValidator]({{ site.urls.vvalidator }}){: .icon-external-link}{:target="_blank"}
Enables accurate validation, mapping and formatting of sequence variants using HGVS nomenclature