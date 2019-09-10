---
layout: page
title: Reference sequence sources
tags: ref-seq-sources
icon-class: icon-resource
permalink: /documentation/ref-seq-sources/
desc: Learn more about the different reference sequences, their sources and how they relate to the LRG project
docs_order: 3
---

<table class="table table-hover table-lrg ref-sources margin-bottom-75">
  <thead>
    <tr>
      <th class="default_col" rowspan="2" style="width:8%">Category</th>
      <th colspan="4" class="split-header">REFERENCE SEQUENCE SOURCES</th>
    </tr>
    <tr>
      <th class="border-left grc" style="width:23%">Genome Reference Consortium (GRC)</th>
      <th class="genecode" style="width:23%">GENCODE</th>
      <th class="refseq" style="width:23%">RefSeq</th>
      <th class="lrg" style="width:23%">Locus Reference Genomic (LRG)</th>
    </tr>
  </thead>

  <tbody>
    <!-- PURPOSE -->
    <tr>
      <td class="left-col left-col-bg">PURPOSE</td>
      <td>
        <a class="icon-external-link" href="{{ site.urls.grc }}" target="_blank">Maintaining and updating reference genome sequences, including for human.</a>
      </td><td>
        <a class="icon-external-link" href="{{ site.urls.gencode }}" target="_blank">Enhancing and extending the annotation of all evidence-based gene features in the human genome at a high accuracy</a>
      </td><td>
        <a class="icon-external-link" href="{{ site.urls.refseq }}" target="_blank">Providing a comprehensive, integrated, non-redundant, well-annotated set of sequences (genomic, transcript and protein).</a>
      </td><td>
        <a href="{{ site.baseurl }}/about">Creating stable reference sequence records that are used for reporting sequence variants with clinical implications.</a>
      </td>
    </tr>

    <!-- PRODUCT -->
    <tr>
      <td class="left-col left-col-bg">PRODUCT</td>
      <td>
        The reference genome assembly for human consists of the primary assembly and alternate loci (patches).  Patches either represent error corrections (FIX patch) or alternate alleles (NOVEL patch).
      </td><td>
        GENCODE genes, transcripts and proteins. The GENCODE gene set is is made by merging manual annotation created by the Ensembl-HAVANA team and automated evidence-based annotation from the Ensembl Genebuild.
      </td><td>
        RefSeqGene (a region of genomic DNA encompassing and flanking the transcribed region of a gene), RefSeq transcripts, RefSeq proteins.
      </td><td>
        LRG records contain stable and thus, un-versioned reference sequences designed specifically for reporting sequence variants with clinical implications.
      </td>
    </tr>

    <!-- SOURCE -->
    <tr>
      <td class="left-col left-col-bg">SOURCE</td>
      <td>
        A collaboration between the Sanger Institute, EMBL-EBI, the NCBI and McDonnell Genome Institute.
      </td><td>
        A collaboration led by Ensembl at EMBL-EBI, based near Cambridge, UK and including partners from Yale University, UCSC, MIT, CRG, CNIO and the University of Lausanne.
      </td><td>
        The NCBI, based in Bethesda, MD, USA.
      </td><td>
        A collaboration between EMBL-EBI and the NCBI RefSeq team.
      </td>
    </tr>

    <!-- ACCESSION IDENTIFIER -->
    <tr>
      <td class="left-col left-col-bg">ACCESSION<br />IDENTIFIER</td>
      <td>
        <div class="margin-bottom-5">GRChxxx; e.g. GRCh38</div>
        <div>Assembly release with patches: GRChxxxpX; e.g. GRCh38p7</div>
      </td><td>
        <div class="margin-bottom-5"><b>Gene identifier format</b>: ENSGxxx; e.g. ENSG00000012048</div>
        <div class="margin-bottom-5"><b>Transcript identifier format</b>: ENSTxxx; e.g. ENST00000357654.7</div>
        <div><b>Protein identifier format</b>: ENSPxxx e.g. ENSP00000350283.3</div>
      </td><td>
        <div class="margin-bottom-5"><b>Gene identifier format</b>: NG_xxx; e.g. NG_005905.2</div>
        <div class="margin-bottom-5"><b>Transcript identifier format</b>: NM_xxx; e.g. NM_007294.3</div>
        <div><b>Protein identifier format</b>: NP_xxx; e.g. NP_009225.1</div>
      </td><td>
        <div class="margin-bottom-5"><b>Gene identifier format</b>: LRG_xxx; e.g. LRG_292</div>
        <div class="margin-bottom-5"><b>Transcript identifier format</b>: LRG_xxxtxxx; e.g. LRG_292t1</div>
        <div><b>Protein identifier format</b>: LRG_xxxpxxx; e.g. LRG_292p1</div>
      </td>
    </tr>

    <!-- STABILITY -->
    <tr>
      <td class="left-col left-col-bg">STABILITY</td>
      <td>
        <div class="margin-bottom-20">Version very infrequently.</div>
        <div class="margin-bottom-5">Major updates (sequence and structure changes, which may disrupt chromosome coordinates) are indicated by the number after GRCh (e.g. GRCh37 to GRCh38).</div>
        <div class="margin-bottom-5">Minor updates (the addition of patches) can occur quaterly, and are indicated by the digit after 'p' e.g. GRCh38.p10. Patch updates do not disrupt the primary assembly chromosome coordinates.</div>
        <div>The GRC has not announced plans to release a GRCh39 assembly.</div>
      </td><td>
        <div class="margin-bottom-20">Version.</div>
        <div class="margin-bottom-5">Updates denoted by the final digit in the accession number (after the full stop/period); e.g. ENSTxxx.1</div>
        <div>Updates are issued in batches (e.g. GENCODE release 26) as part of an Ensembl release (e.g. Ensembl release 88). This is normally every 2-3 months.</div>
      </td><td>
        <div class="margin-bottom-20">Version.</div>
        <div class="margin-bottom-5">Updates denoted by increment to the numeric version after the decimal; e.g. NM_xxx.2</div>
        <div>Individual sequence updates are available on an ad hoc basis and batch released at a later date (e.g. RefSeq release 81).</div>
      </td><td>
        <div class="margin-bottom-20">Do not version.</div>
        <div class="margin-bottom-5">Once an LRG has been made public, its “fixed” section, which contains reference sequences and exon numbering, will never change.</div>
        <div>The “updatable” section, which contains mappings, annotations and community information is updated weekly.</div>
      </td>
    </tr>

    <!-- SEQUENCE -->
    <tr>
      <td class="left-col left-col-bg">SEQUENCE</td>
      <td>
        The primary reference assembly is a composite of sequence from 13 individuals and therefore does not necessarily represent the major alleles of any given population.
      </td><td>
        GENCODE sequences always match the genome reference assembly.
      </td><td>
        RefSeq sequences don’t necessarily match the genome reference assembly. RefSeq, to the extent for which this is possible, represent a prevalent, 'standard' allele. The default implementation of 'standard allele' is the sequence from the GRCh38 primary assembly. If, however, there is evidence that the GRCh38 sequence is not standard, the sequences can be constructed from an alternate source sequence, or locally modified.
      </td><td>
        As LRGs are based on RefSeq sequences they do not necessarily match the primary reference assembly. However, it is our default policy to match the primary reference assembly, unless there is a convincing argument that an alternate allele is more appropriate.
      </td>
    </tr>

    <!-- ANNOTATION -->
    <tr>
      <td class="left-col left-col-bg">
        ANNOTATION
        <div class="smaller-font lrg_green2" style="padding-top:2px;font-weight:normal">The process of finding and designating locations of individual genes and other features on raw DNA sequences</div>
      </td>
      <td>
        Genome assemblies (GRCh37 or GRCh38) are un-annotated genome builds.  Annotation is provided by Ensembl (GENCODE) and the NCBI (RefSeq).
      </td><td>
        <div>
          Both manual and automated gene annotation approaches utilise primary transcriptomic and proteomic data aligned to the reference genome to determine transcript stucture and CDSs.
        </div>
        <div>
          Manual annotation also incorporates datasets that capture TSS and transcript 3’ ends, epigenetic and transcription factor binding data as well as cross-species conservation at both the sequence and transcript level to refine structural and functional annotation.
        </div>
        <div>
          The resulting manual annotation is merged with the automated annotation via a hierarchical method that gives precedence to manual annotation to produce the GENCODE gene set.
        </div>
      </td><td>
        <div>
          RefSeq curators at the NCBI review a variety of transcript, proteomic, epigenomic, and variation data to annotate a set of well-supported and biologically valid transcripts and their encoded proteins for each gene.
        </div>
        <div>
          The curated transcripts and proteins are aligned to the genome and combined with additional computational models to generate a comprehensive genome annotation.
        </div>
        <div>
          Genomic RefSeqGene records are then defined for a subset of genes, and annotated by aligning the curated transcripts to the genomic sequence, as well as projection of features for neighboring genes from the genome annotation.
        </div>
      </td><td>
        LRG curators review both RefSeq and GENCODE locus annotion as well as reviewing supporting evidence.  They work with RefSeq and GENCODE annototers to update locus annotation with a view to create matching transcript models for inclusion in the LRG record.
      </td>
    </tr>

    <!-- INTERACTION WITH LRG -->
    <tr>
      <td class="left-col left-col-bg">INTERACTION<br />WITH LRG</td>
      <td>
        LRG curators may request a review by the GRC if the primary reference assembly contains a non-standard allele and may request the creation of patches, if required by the community.
      </td><td>
        <div class="margin-bottom-5">At request from LRG curators, GENCODE annotators review annotation of clinically relevant transcripts.</div>
        <div>GENCODE sequences are included in LRGs. Any mismatches are clearly shown.</div>
      </td><td>
        <div class="margin-bottom-5">The LRG is a collaboration with RefSeq. LRG records contain RefSeq sequences.</div>
        <div class="margin-bottom-5">At request from LRG curators NCBI curators review annotation of clinically relevant transcripts.</div>
        <div>LRG curators can request NCBI curators to change RefSeq alleles to the ‘standard allele’ as determined by population data or expert community input.</div>
      </td><td>
        <div class="margin-bottom-5">Communication with GENCODE and RefSeq is aimed at ensuring that the highest quality, ideally matching, model exists for inclusion in the LRG.</div>
        <div>LRG curators can feed back input from the clinical community to RefSeq, GENCODE and the GRC.</div>
      </td>
    </tr>

     <!-- REFERENCES -->
    <tr>
      <td class="left-col left-col-bg">REFERENCES</td>
      <td>
        <div class="margin-bottom-5">
          <a class="icon-external-link" href="{{ site.urls.ncbi }}/grc/help/definitions" target="_blank">Assembly Terminology</a>
        </div>
        <div class="margin-bottom-5">
          <a class="icon-external-link" href="{{ site.urls.ncbi }}/grc/help/patches" target="_blank">Patches</a>
        </div>
        <div>
          <a class="icon-external-link" href="{{ site.urls.ncbi }}/pubmed/28396521" target="_blank">Schneider VA et al., 2017 </a>
        </div>
      </td><td>
       <div class="margin-bottom-5">
          <a class="icon-external-link" href="{{ site.urls.ensembl }}/info/website/glossary.html" target="_blank">Ensembl glossary</a>
        </div>
        <div class="margin-bottom-5">
          <a class="icon-external-link" href="{{ site.urls.ncbi }}/pubmed/26110515" target="_blank">Frankish A et al., 2015</a>
        </div>
        <div>
          <a class="icon-external-link" href="{{ site.urls.ncbi }}/pubmed/22955987" target="_blank">Harrow J et al., 2012</a>
        </div>
      </td><td>
        <div class="margin-bottom-5">
          <a class="icon-external-link" href="{{ site.urls.ncbi }}/books/NBK50679/" target="_blank">RefSeq FAQ</a>
        </div>
        <div class="margin-bottom-5">
          <a class="icon-external-link" href="{{ site.urls.ncbi }}/refseq/rsg/lrg/" target="_blank">RefSeqGene and LRG</a>
        </div>
        <div class="margin-bottom-5">
          <a class="icon-external-link" href="{{ site.urls.ncbi }}/pubmed/26553804" target="_blank">O’Leary NA et al., 2016</a>
        </div>
        <div>
          <a class="icon-external-link" href="{{ site.urls.ncbi }}/pubmed/22121212" target="_blank">Pruitt KD et al., 2012</a>
        </div>
      </td><td>
        <div class="margin-bottom-5">
          <a class="icon-external-link" href="http://dx.doi.org/10.1093/nar/gkt1198" target="_blank">MacArthur JA et al. 2014</a>
        </div>
        <div class="margin-bottom-5">
          <a class="icon-external-link" href="http://genomemedicine.com/content/2/4/24/" target="_blank">Dalgleish R et al 2010</a>
        </div>
        <div>
          <a class="icon-external-link" href="http://www.nature.com/ng/journal/v42/n5/abs/ng0510-363.html" target="_blank">Nature Genetics 2010</a>
        </div>
      </td>
    </tr>

  </tbody>
</table>



<table class="table table-hover table-lrg">
  <thead>
    <tr>
      <th colspan="2">Other sources of annotation and relevant projects</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td class="left-col" style="width:125px">
        <a class="icon-external-link" href="http://appris.bioinfo.cnio.es" target="_blank">APPRIS</a>
      </td>
      <td>
        APPRIS is a system to annotate alternatively spliced transcripts based on a range of computational methods. LRG curators use this information to help identify well-supported transcript models (<a class="icon-external-link" href="{{ site.urls.ncbi }}/pubmed/23161672" target="_blank">Rodriguez JM et al., 2013</a>).
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="{{ site.urls.ncbi }}/projects/CCDS/CcdsBrowse.cgi" target="_blank">CCDS</a>
      </td>
      <td>
        The CCDS project is a collaborative effort to identify a core set of protein coding regions that are consistently annotated and of high quality.  A combination of manual and automated genome annotations provided by (NCBI) and Ensembl (which incorporates manual HAVANA annotations) are compared to identify annotations with matching genomic coordinates.
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="{{ site.urls.embl_ebi }}/about" target="_blank">EMBL-EBI</a>
      </td>
      <td>
        The European Bioinformatics Institute (EMBL-EBI) shares data from <a class="icon-external-link" href="{{ site.urls.embl_ebi }}/services" target="_blank">life science experiments</a>, performs basic <a class="icon-external-link" href="{{ site.urls.embl_ebi }}/research" target="_blank">research</a> in computational biology and offers an extensive user  <a class="icon-external-link" href="{{ site.urls.embl_ebi }}/training" target="_blank">training</a> programme, supporting researchers in academia and <a class="icon-external-link" href="{{ site.urls.embl_ebi }}/industry" target="_blank">industry</a>. It is part of <a class="icon-external-link" href="http://embl.org/" target="_blank">EMBL</a>, Europe’s flagship laboratory for the life sciences.
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="{{ site.urls.ensembl }}" target="_blank">Ensembl</a>
      </td>
      <td>
        Ensembl, based at EMBL-EBI, is a project to develop a software system which produces and maintains automatic annotation on selected eukaryotic genomes (<a class="icon-external-link" href="{{ site.urls.ncbi }}/pubmed/27899575" target="_blank">Aken BL et al., 2017</a>).
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="{{ site.urls.ensembl }}/vep" target="_blank">Ensembl VEP</a>
      </td>
      <td>
        VEP (Variant effect predictor) determines the effect of variants (SNPs, insertions, deletions, CNVs or structural variants) on genes, transcripts, and protein sequence.  It is produced by Ensembl at EMBL-EBI. <a class="icon-external-link" href="{{ site.urls.ncbi }}/pubmed/27268795" target="_blank">McLaren W et al., 2016</a>
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="http://www.sanger.ac.uk/science/groups/vertebrate-annotation" target="_blank">HAVANA</a>
      </td>
      <td>
        High-quality gene models produced by the manual annotation of vertebrate genomes.  Previously based at the Sanger Institute, has recently moved to EMBL-EBI
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="http://www.hgmd.cf.ac.uk/" target="_blank">HGMD</a>
      </td>
      <td>
        The Human Gene Mutation Database (HGMD®) represents an attempt to collate known (published) gene lesions responsible for human inherited disease. LRG curators use this information to inform community used transcript models.
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="http://www.genenames.org/" target="_blank">HGNC</a>
      </td>
      <td>
        HGNC (HUGO gene nomenclature committee) is responsible for approving unique symbols and names for human loci, including protein coding genes, ncRNA genes and pseudogenes, to allow unambiguous scientific communication.
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="{{ site.urls.hgvs }}" target="_blank">HGVS</a>
      </td>
      <td>
        The Human Genome Variation Society issues <a class="icon-external-link" href="http://varnomen.hgvs.org/recommendations/general/" target="_blank">guidelines and recommendations</a> on the nomenclature of gene variations. <a class="icon-external-link" href="{{ site.urls.ncbi }}/pubmed/26931183" target="_blank">den Dunnen et al., 2016</a>
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="http://www.lovd.nl/3.0/home" target="_blank">LOVD</a>
      </td>
      <td>
        The Leiden Open Variation Database (LOVD) provides a  tool for Gene-centered collection and display of DNA variations and aggregates variants from <a class="icon-external-link" href="https://grenada.lumc.nl/LSDB_list/lsdbs" target="_blank">locus-specific databases (LSDBs)</a>. LRG curators refer to LOVD LSDBs to help establish which transcript models are in use by the community.
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="{{ site.urls.ens_mane_blog }}" target="_blank">MANE</a>
      </td>
      <td>
        The <b>MANE</b> (<b>M</b>atched <b>A</b>nnotation from the <b>N</b>CBI and <b>E</b>MBL-EBI) Project is a joint initiative between EMBL-EBI’s <a href="{{ site.urls.gencode }}" target="_blank">Ensembl/GENCODE Project</a> and NCBI’s <a href="{{ site.urls.refseq }}" target="_blank">RefSeq project</a>. MANE aims to release a genome-wide transcript set that contains one well-supported transcript per protein-coding locus (MANE Select). All transcripts in the MANE set perfectly align to GRCh38 and represent 100% identity (5’UTR, coding sequence, 3’UTR) between the RefSeq (NM) and corresponding Ensembl (ENST) transcript.
        For more information on MANE see <a href="{{ site.urls.ens_mane_blog }}" target="_blank">Ensembl's MANE blog</a> and <a href="{{ site.urls.ncbi_mane_blog }}" target="_blank">NCBI’s MANE blog</a>.
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="{{ site.urls.ncbi }}/home/about/" target="_blank">NCBI</a>
      </td>
      <td>
        The USA’s National Centre for Biotechnology Information advances science and health by providing access to biomedical and genomic information.
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="http://www.thetgmi.org/" target="_blank">TGMI</a>
      </td>
      <td>
        The Transforming Genetic Medicine Initiative (TGMI) is building the knowledge base, tools and processes needed to deliver genetic medicine.
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="{{ site.urls.ucsc }}" target="_blank">UCSC</a>
      </td>
      <td>
        Provides UCSC specific annotations on GRCh37, these are based on RefSeq annotation.  As of July 29, 2015 GENCODE annotations are the default annotations on GRCh38 in the UCSC genome browser.  UCSC annotations are no longer being generated.  Together with Ensembl, UCSC supplies Transcript Support Levels (TSL) for all GENCODE transcripts. LRG curators use this information to identify well-supported transcript models.
      </td>
    </tr>
    <tr>
      <td class="left-col">
        <a class="icon-external-link" href="{{ site.urls.uniprot }}" target="_blank">UniProt</a>
      </td>
      <td>
        The Universal Protein Resource (UniProt) is a comprehensive resource for protein sequence and annotation data. UniProt is a collaboration between the European Bioinformatics Institute (EMBL-EBI), the SIB Swiss Institute of Bioinformatics and the Protein Information Resource (PIR).
      </td>
    </tr>

  </tbody>
</table>
