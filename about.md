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
      <span class="lrg_dark bold_font">Sections</span>
    </li>
    <li><a href="#the-lrg-project">The LRG Project</a></li>
    <li><a href="#further-information">Further information</a></li>
    <li><a href="#further-reading">Further reading</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#past-support">Past support</a></li>
  </ul>  
</div>


### The LRG Project

An LRG is a manually curated record that contains stable and thus, un-versioned reference sequences designed specifically for reporting sequence variants with clinical implications.
Each LRG contains a stable “**fixed**” section and a regularly updated “**updatable**” section:  

* The **fixed section** contains:  
  * stable genomic DNA sequence for the region of interest
  * transcripts and proteins deemed essential for reporting variants
  * mappings to define the relationship between LRG transcripts and known transcript models (RefSeq and GENCODE sets)
  * exon numbering system that is LRG-specific

* The **updatable section** contains the most recent biological information for each LRG region, including:
  * how the LRG sequences map to the reference assembly 
  * annotation of all known transcripts and overlapping genes in the region
  * relevant information provided by the community, such as legacy exon and amino acid numbering systems

The sequences of each LRG are chosen in collaboration with research and diagnostic laboratories, LSDB (locus specific database) curators and mutation consortia with expertise in the region of interest. Additional information on collaborators can be found [here](/lrg-collaborators/).  

<br />
The LRG project is a collaboration between the NCBI and EMBL-EBI. The creation of an LRG involves several steps: 

* **LRG requested** - Collaborators (for example, LSDB curators, members of diagnostic and research communities and/or clinical experts from specific disease areas, etc.) can request an LRG, following the [guidelines](/lrg-request/).

* **Pending LRG created** - The pending LRG contains the RefSeq/GENCODE transcript(s) specified by the requester and the RefSeqGene of the locus. If no RefSeqGene exists one is made by the NCBI. 

* **Manual Curation** - To ensure the LRG contains the most suitable reference sequences, expert scientists at the EMBL-EBI manually review all known transcript models (RefSeq and GENCODE), supporting evidence, alleles and mismatches with the reference assembly, and existing community usage. When appropriate, LRGs may represent legacy or alternative sequences that do not fully match the reference assembly. Only transcripts with good biological evidence that are essential for reporting variants will be included. LRG curators may request RefSeq and/or GENCODE review the locus of interest if there are significant discrepancies between transcript sets.  Changes can be made to a pending LRG at this stage, if necessary.  

* **Experts in LRG region of interest contacted** for input. For more on experts see [the LRG collaborators page](/lrg-collaborators/). Changes can be made to a pending record at this stage, if necessary.

* **Final review** performed by LRG curators at EBI

* **LRG published** and collaborators informed  


This website lists existing LRG sequences and has a FTP site for downloading LRGs. EMBL-EBI and NCBI are committed to developing the technical solutions, as well as computational and visual tools to work with LRG sequences. This enables all the information reported using LRG sequences to be integrated with the data using the human genome reference sequence. LRGs can be visualised in NCBI, Ensembl and UCSC genome browsers. 


The LRG project is a collaborative effort. See below the relationship between the project and key stakeholders.

<div class="clearfix margin-bottom-20">
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <div class="vignette">
      <div class="icon-group vignette_title lrg_green2"><span class="lrg_dark">Community</span></div>
      <div class="padding-bottom-5"><b>Description:</b> clinicians, diagnosticians, researchers, locus specific database curators</div>
      <div><b>Collaboration with LRG:</b> collaboration with locus specific experts to identify most suitable genomic and transcript sequences for variant reporting</div>
    </div>
  </div>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <div class="vignette">
      <div class="padding-bottom-10 text-center"><img src="/images/gencode_logo.png" /></div>
        <div class="padding-bottom-5"><b>Description:</b> GENCODE Transcripts (ENST)</div>
      <div><b>Collaboration with LRG:</b> review and improve annotation of clinically relevant transcripts</div>
    </div>
  </div>
</div> 
<div class="clearfix" style="margin-bottom:10px">
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <div class="vignette">
      <div class="padding-bottom-10 text-center"><img src="/images/refseq_logo.png" /></div>
      <div class="padding-bottom-5"><b>Description:</b> RefSeqGene (NG), RefSeq transcript (NM)</div>
      <div><b>Collaboration with LRG:</b> review and improve annotation of clinically relevant transcripts</div>
    </div>
  </div>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <div class="vignette">
      <div class="padding-bottom-10 text-center">
        <div class="vignette_title_grc">
          <img src="/images/grc_logo.png" /><span>Genome Reference Consortium</span></div>
      </div>
      <div class="padding-bottom-5"><b>Description:</b> Reference genome assembly GRCh37/GRCh38</div>
      <div><b>Collaboration with LRG:</b> review and improve the sequence of the reference assembly and determine compatibility with legacy or community-requested sequences</div>
    </div>
  </div>
</div>

<br />


### Further information

For more information on the specification and LRGs, see the following publications:

* **Locus Reference Genomic: reference sequences for the reporting of clinically relevant sequence variants**  
[MacArthur JA et al., Nucleic Acids Res. **2014** Jan (doi: 10.1093/nar/gkt1198)](http://dx.doi.org/10.1093/nar/gkt1198){: .icon-external-link}

* Locus Reference Genomic sequences: an improved basis for describing human DNA variants  
[Dalgleish R et al., Genome Med. **2010**, 2:24](http://genomemedicine.com/content/2/4/24/){: .icon-external-link}

* Conventional wisdom (Editorial)  
[Nature Genetics **2010**, 42, p. 363](http://www.nature.com/ng/journal/v42/n5/abs/ng0510-363.html){: .icon-external-link}


##### Also available

* [Frequently Asked Questions](/faq) (FAQs)

* [LRG video presentation](http://www.ebi.ac.uk/training/online/course/locus-reference-genomic-lrg-resource-webinar){: .icon-external-link}: a webinar of ~30min providing an overview and demo of the LRG resource.

* The LRG specification [document](ftp://ftp.ebi.ac.uk/pub/databases/lrgex/docs/LRG.pdf)

For more information on how the RefSeqGene records relate to the LRG project, please refer to this NCBI webpage [document](http://www.ncbi.nlm.nih.gov/refseq/rsg/lrg/){: .icon-external-link}.  
<br />


### Further reading

* **[RefSeqGene](http://www.ncbi.nlm.nih.gov/refseq/rsg){: .icon-external-link}** - For more information on how the RefSeqGene records relate to the LRG project, please refer to this NCBI webpage [document](http://www.ncbi.nlm.nih.gov/refseq/rsg/lrg/){: .icon-external-link}.  

* **[GENCODE](https://www.gencodegenes.org/about.html){: .icon-external-link}**

* **[Ensembl](http://www.ensembl.org/){: .icon-external-link}**

* **[HAVANA](http://www.sanger.ac.uk/science/groups/vertebrate-annotation){: .icon-external-link}**

<br />


### Licence

The LRG project imposes no restrictions on access to, or use of, the data provided. The code written by the members of the project is provided under the **Apache 2.0 licence**.  
<br />

  
### Contact

If you would like to give us feedback or request an LRG for your gene of interest, please email us at <a class="bold_font" href="mailto:contact@lrg-sequence.org">contact@lrg-sequence.org</a>.  
<br />
  
### Past support

* [Gen2Phen](http://www.gen2phen.org/){: .icon-external-link} sponsored a meeting in 2008 with key stakeholders, including EMBL-EBI, NCBI, HGVS, LSDB curators and other members of the community. As a result, the Locus Reference Genomic (LRG) project was created founded on the RefSeqGene project.




