---
title: "Get the HGNC symbols of a list of LRGs"
tag: ws_lrg_data
order: 2
---


<div class="clearfix margin-top-20">
  <div class="left bold_font margin-right-10">Example URL syntax: </div> 
  <div class="left" style="font-weight:normal">
    {{ site.rest.rest_lrg }}<b>/entry/<span class="lrg_purple">&lt;lrg_ids_list&gt;</span>?fields=<span class="lrg_blue">name</span></b>
  </div>
</div>

<div class="ws_example_title bold_font">Example for one LRG:</div>
<div class="ws_example_content">
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
          <a href="{{ site.rest.rest_lrg }}/entry/LRG_1?fields=name" target="_blank">{{ site.rest.rest_lrg }}/entry/LRG_1?fields=name</a>
        </td>
        <td>
          <button class="btn btn-primary btn-xs" onclick="javascript:show_output('lrg2symbol_search','xml')">XML output</button>
        </td>
      </tr>
      <tr>
        <td>JSON</td>
        <td>
          <a href="{{ site.rest.rest_lrg }}/entry/LRG_1?fields=name&format=json" target="_blank">{{ site.rest.rest_lrg }}/entry/LRG_1?fields=name<b>&format=json</b></a>
        </td>
        <td>
          <button class="btn btn-primary btn-xs" onclick="javascript:show_output('lrg2symbol_search','json')">JSON output</button>
        </td>
      </tr>
    </tbody>   
  </table>

  <div id="lrg2symbol_search">
    <div class="output_example" id="lrg2symbol_search_xml">
      <div class="clearfix">
        <div class="left"><h5>Example XML output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#lrg2symbol_search_xml').hide()"></div>
      </div>
      <pre>
&lt;result>
  &lt;entries>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_1</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">name</span>">
          &lt;values>
            &lt;value><b>COL1A1</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
  &lt;/entries>
&lt;/result>
      </pre>
    </div>
    <div class="output_example" id="lrg2symbol_search_json">
      <div class="clearfix">
        <div class="left"><h5>Example JSON output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#lrg2symbol_search_json').hide()"></div>
      </div>
      <pre>
{
  "entries": 
    [
      {
        "id": "<span class="lrg_purple bold_font">LRG_1</span>",
        "source": "<b>lrg</b>",
        "fields": 
          {
            "<span class="lrg_blue bold_font">name</span>": ["<b>COL1A1</b>"],
          }
      }
    ]
}
      </pre>
    </div>
  </div>
</div>


<div class="ws_example_title bold_font">Example for several LRGs:</div>
<div class="ws_example_content">
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
          <a href="{{ site.rest.rest_lrg }}/entry/LRG_1,LRG_2?fields=name" target="_blank">{{ site.rest.rest_lrg }}/entry/LRG_1,LRG_2?fields=name</a>
        </td>
        <td>
          <button class="btn btn-primary btn-xs" onclick="javascript:show_output('lrg2symbol_multi_search','xml')">XML output</button>
        </td>
      </tr>
      <tr>
        <td>JSON</td>
        <td>
          <a href="{{ site.rest.rest_lrg }}/entry/LRG_1,LRG_2?fields=name&format=json" target="_blank">{{ site.rest.rest_lrg }}/entry/LRG_1,LRG_2?fields=name<b>&format=json</b></a>
        </td>
        <td>
          <button class="btn btn-primary btn-xs" onclick="javascript:show_output('lrg2symbol_multi_search','json')">JSON output</button>
        </td>
      </tr>
    </tbody>   
  </table>

  <div id="lrg2symbol_multi_search">
    <div class="output_example" id="lrg2symbol_multi_search_xml">
      <div class="clearfix">
        <div class="left"><h5>Example XML output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#lrg2symbol_multi_search_xml').hide()"></div>
      </div>
      <pre>
&lt;result>
  &lt;entries>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_1</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">name</span>">
          &lt;values>
            &lt;value><b>COL1A1</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_2</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">name</span>">
          &lt;values>
            &lt;value><b>COL1A2</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
  &lt;/entries>
&lt;/result>
      </pre>
    </div>
    <div class="output_example" id="lrg2symbol_multi_search_json">
      <div class="clearfix">
        <div class="left"><h5>Example JSON output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#lrg2symbol_multi_search_json').hide()"></div>
      </div>
      <pre>
{
  "entries": 
    [
      {
        "id": "<span class="lrg_purple bold_font">LRG_1</span>",
        "source": "<b>lrg</b>",
        "fields": 
          {
            "<span class="lrg_blue bold_font">name</span>": ["<b>COL1A1</b>"],
          }
      },
      {
        "id": "<span class="lrg_purple bold_font">LRG_1</span>",
        "source": "<b>lrg</b>",
        "fields": 
          {
            "<span class="lrg_blue bold_font">name</span>": ["<b>COL1A2</b>"],
          }
      }
    ]
}
      </pre>
    </div>
  </div>
</div>
