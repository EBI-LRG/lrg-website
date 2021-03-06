---
layout: page
title: LRG collaborators
tags: Collaborator
icon-class: icon-industry
permalink: /documentation/lrg-collaborators/
desc: List of locus-specific experts that have worked with the LRG team on the creation of records
---


Each LRG is created upon request by collaborators such as research and diagnostic laboratories, LSDB (locus specific database) curators and mutation consortia. To ensure that each LRG record contains the most appropriate reference sequences for reporting variants in the requested region, requesters are asked to provide details of other collaborators with expertise in the LRG region or field of interest.  

Additional experts on each LRG region are also identified from [GeneTests](http://genetests.org/){: .icon-external-link}{:target="_blank"}, [NIH’s Genetic Testing Registry (GTR)](http://www.ncbi.nlm.nih.gov/gtr){: .icon-external-link}{:target="_blank"} and from the [LSDB list](http://www.lovd.nl/LSDBs){: .icon-external-link}{:target="_blank"} maintained by Leiden University Medical Center, where available.  

The LRG project is committed to creating records that are ideal for each region and fulfill the reporting needs of the community.

<br />
<h4>List of collaborators</h4>

  <table class="table table-hover table-lrg table-lrg-bold-left-col">
    <thead>
      <tr>
        <th>Collaborator</th>
        <th>Affiliation</th>
      </tr>
    </thead>

    <tbody>
      
    {% assign collaborators = site.data.list_collaborators | sort: 'name' %}
    {% for collaborator in collaborators %}
      <tr>
        <td>{{ collaborator.name }}</td>
        <td>{{ collaborator.affiliation }}</td>
     </tr>
    {% endfor %} 

    </tbody>
  </table>