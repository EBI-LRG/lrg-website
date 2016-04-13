---
title: "Get the list of public LRG"
tag: ws_lrg_search
order: 1
---

<p>
  <b>Query:</b> ?query=status:public
</p>
<p>
  <b>Example:</b> 
  <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100</a>
</p>
<p>
  The particularity of the EMBL-EBI REST web service is it only returns a <span class="warning">maximum of 100 results at a time.</span>
</p>
<p>
  To retrieve all the data, if the total of entries is greater than 100, you need to use the pagination, e.g.:<br />
  Looking at the tag <b>"hitCount"</b> you can see how many entries have been found, and then you can loop over this number to retrieve all the results. Let's say the total number of result is <b>&lt;hitCount&gt;<span class="warning">663</span>&lt;/hitCount&gt;</b>, we have to loop like this:
</p>
<p>
  <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=0" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=0</a>
</p>
<p>
  <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=100" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=100</a>
</p>
<p>...</p>
<p>
  <a href="http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=600" target="_blank">http://www.ebi.ac.uk/ebisearch/ws/rest/lrg?query=status:public&size=100&start=600</a>
</p>