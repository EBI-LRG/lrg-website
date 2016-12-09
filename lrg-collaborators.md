---
layout: page
title: LRG collaborators
tags: Collaborator
icon-class: icon-industry
permalink: /lrg-collaborators/
---


Each LRG is created upon request by collaborators such as research and diagnostic laboratories, LSDB (locus specific database) curators and mutation consortia. To ensure that each LRG record contains the most appropriate reference sequences for reporting variants in the requested region, requesters are asked to provide details of other collaborators with expertise in the LRG region or field of interest.  

Additional experts on each LRG region are also identified from [GeneTests](http://genetests.org/){: .icon-external-link}, [NIH’s Genetic Testing Registry (GTR)](http://www.ncbi.nlm.nih.gov/gtr){: .icon-external-link} and from the [LSDB list](http://www.lovd.nl/LSDBs){: .icon-external-link} maintained by Leiden University Medical Center, where available.  

The LRG project is committed to creating records that are ideal for each region and fulfill the reporting needs of the community.

<br />
<h4>List of collaborators</h4>

<div class="col-lg-10 col-lg-offset-1">
  <table class="table table-hover table-lrg">
    <thead>
      <tr>
        <th>Collaborator</th>
        <th>Affiliation</th>
      </tr>
    </thead>

    <tbody>
      
    {% assign collaborators = (site.data.list_collaborators | sort: 'name') %}
    {% for collaborator in collaborators %}
      <tr>
        <td class="left-col">{{ collaborator.name }}</td>
        <td>{{ collaborator.affiliation }}</td>
     </tr>
    {% endfor %} 

    </tbody>
  </table>
</div>
