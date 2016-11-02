---
title: "Retrieve a LRG using a HGNC symbol"
tag: ws_lrg_search
order: 1
---

<div class="clearfix margin-top-10">
  <div class="left bold_font margin-right-10" style="width:75px">Query:</div> 
  <div class="left">{{ site.rest_lrg }}<b>?query=name:<span class="lrg_blue">&lt;HGNC_symbol&gt;</span></b></div>
</div>
<div class="clearfix margin-top-10">
  <div class="left bold_font margin-right-10" style="width:75px">Example:</div> 
  <div class="left">
    <table class="table table-lrg">
      <thead>
        <tr>
          <th>Output format</th>
          <th>URL</th>
          <th>Example output</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XML <span class="smaller-font">(default)</span></td>
          <td>
            <a href="{{ site.rest_lrg }}?query=name:COL1A1" target="_blank">{{ site.rest_lrg }}?query=name:COL1A1</a>
          </td>
          <td>
            <button class="btn btn-primary btn-sm" onclick="javascript:show_output('hgnc_search','xml')">XML output</button>
          </td>
        </tr>
        <tr>
          <td>JSON</td>
          <td>
            <a href="{{ site.rest_lrg }}?query=name:COL1A1&format=json" target="_blank">{{ site.rest_lrg }}?query=name:COL1A1<b>&format=json</b></a>
          </td>
          <td>
            <button class="btn btn-primary btn-sm" onclick="javascript:show_output('hgnc_search','json')">JSON output</button>
          </td>
        </tr>
      </tbody>   
    </table>

    <div id="hgnc_search">
      <div class="output_example" id="hgnc_search_xml">
        <h5>Example XML output</h5>
        <pre>
&lt;result>
    &lt;hitCount><b>1</b>&lt;/hitCount>
    &lt;entries>
        &lt;entry id="<b>LRG_1</b>" source="<b>lrg</b>"/>
    &lt;/entries>
    &lt;facets/>
&lt;/result>
        </pre>
      </div>
      <div class="output_example" id="hgnc_search_json">
        <h5>Example JSON output</h5>
        <pre>
{
  "hitCount": <b>1</b>,
  "entries": [
               {
                 "id": "<b>LRG_1</b>",
                 "source": "<b>lrg</b>"
               }
             ],
  "facets": []
}
        </pre>
      </div>
    </div>

  </div>
</div>