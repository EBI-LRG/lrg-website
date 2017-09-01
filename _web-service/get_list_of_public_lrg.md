---
title: "Get the list of public LRG"
tag: ws_lrg_search
order: 3
---


<div class="clearfix margin-top-20">
  <div class="left bold_font margin-right-10" style="width:75px">Query:</div> 
  <div class="left">{{ site.rest_lrg }}<b>?query=status:<span class="lrg_blue">public</span></b></div>
</div>
<div class="clearfix ws_example_title">
  <div class="left bold_font margin-right-10" style="width:75px">Example:</div> 
  <div class="left">
    <table class="table table-lrg">
      <thead>
        <tr>
          <th>Output format</th>
          <th>Example URL</th>
          <th>Example output</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XML <span class="smaller-font">(default)</span></td>
          <td>
            <a href="{{ site.rest_lrg }}?query=status:public&size=100" target="_blank">{{ site.rest_lrg }}?query=status:public<b>&size=100</b></a>
          </td>
          <td>
            <button class="btn btn-primary btn-xs" onclick="javascript:show_output('public_search','xml')">XML output</button>
          </td>
        </tr>
        <tr>
          <td>JSON</td>
          <td>
            <a href="{{ site.rest_lrg }}?query=status:public&size=100&format=json" target="_blank">{{ site.rest_lrg }}?query=status:public<b>&size=100&format=json</b></a>
          </td>
          <td>
            <button class="btn btn-primary btn-xs" onclick="javascript:show_output('public_search','json')">JSON output</button>
          </td>
        </tr>
      </tbody>   
    </table>

    <div id="public_search">
      <div class="output_example" id="public_search_xml">
        <div class="clearfix">
          <div class="left"><h5>Example XML output</h5></div>
          <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#public_search_xml').hide()"></div>
        </div>
        <pre>
&lt;result>
  &lt;hitCount><b>665</b>&lt;/hitCount>
  &lt;entries>
    &lt;entry id="<b>LRG_100</b>" source="<b>lrg</b>"/>
    &lt;entry id="<b>LRG_886</b>" source="<b>lrg</b>"/>
    &lt;entry id="<b>LRG_96</b>" source="<b>lrg</b>"/>
    <span class="lrg_green">... up to 100 entries</span>
  &lt;/entries>
  &lt;facets/>
&lt;/result>
  </pre>
      </div>
      <div class="output_example" id="public_search_json">
        <div class="clearfix">
          <div class="left"><h5>Example JSON output</h5></div>
          <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#public_search_json').hide()"></div>
        </div>
        <pre>
{
  "hitCount": <b>665</b>,
  "entries":
            [
              {"id": "<b>LRG_100</b>", "source": "<b>lrg</b>"},
              {"id": "<b>LRG_886</b>", "source": "<b>lrg</b>"},
              {"id": "<b>LRG_96</b>", "source": "<b>lrg</b>"},
              <span class="lrg_green">... up to 100 entries</span>
            ],
  "facets": []
}
        </pre>
      </div>
    </div>

  </div>
</div>

<p>
  The particularity of the EMBL-EBI REST web service is it only returns a <span class="warning">maximum of 100 results at a time.</span>
</p>
<p>
  To retrieve all the data, if the total of entries is greater than 100, you need to use the pagination, e.g.:<br />
  Looking at the tag <b>"hitCount"</b> you can see how many entries have been found, and then you can loop over this number to retrieve all the results. Let's say the total number of result is <b>&lt;hitCount&gt;<span class="warning">665</span>&lt;/hitCount&gt;</b>, we have to loop like this:
</p>
<p>
  <a href="{{ site.rest_lrg }}?query=status:public&size=100&start=0" target="_blank">{{ site.rest_lrg }}?query=status:public<b>&size=100&start=0</b></a>
</p>
<p>
  <a href="{{ site.rest_lrg }}?query=status:public&size=100&start=100" target="_blank">{{ site.rest_lrg }}?query=status:public<b>&size=100&start=100</b></a>
</p>
<p>...</p>
<p>
  <a href="{{ site.rest_lrg }}?query=status:public&size=100&start=600" target="_blank">{{ site.rest_lrg }}?query=status:public<b>&size=100&start=600</b></a>
</p>


