---
title: "Get the status of a list of LRGs"
tag: ws_lrg_data
order: 3
---


<div class="clearfix margin-top-20">
  <div class="left bold_font margin-right-10">Example URL syntax: </div> 
  <div class="left" style="font-weight:normal">
    {{ site.rest.rest_lrg }}<b>/entry/<span class="lrg_purple">&lt;lrg_ids_list&gt;</span>?fields=<span class="lrg_blue">status</span></b>
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
          <a href="{{ site.rest.rest_lrg }}/entry/LRG_1?fields=status" target="_blank">{{ site.rest.rest_lrg }}/entry/LRG_1?fields=status</a>
        </td>
        <td>
          <button class="btn btn-primary btn-xs" onclick="javascript:show_output('lrg_status_search','xml')">XML output</button>
        </td>
      </tr>
      <tr>
        <td>JSON</td>
        <td>
          <a href="{{ site.rest.rest_lrg }}/entry/LRG_1?fields=status&format=json" target="_blank">{{ site.rest.rest_lrg }}/entry/LRG_1?fields=status<b>&format=json</b></a>
        </td>
        <td>
          <button class="btn btn-primary btn-xs" onclick="javascript:show_output('lrg_status_search','json')">JSON output</button>
        </td>
      </tr>
    </tbody>   
  </table>

  <div id="lrg_status_search">
    <div class="output_example" id="lrg_status_search_xml">
      <div class="clearfix">
        <div class="left"><h5>Example XML output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#lrg_status_search_xml').hide()"></div>
      </div>
      <pre>
&lt;result>
  &lt;entries>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_1</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">status</span>">
          &lt;values>
            &lt;value><b>public</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
  &lt;/entries>
&lt;/result>
      </pre>
    </div>
    <div class="output_example" id="lrg_status_search_json">
      <div class="clearfix">
        <div class="left"><h5>Example JSON output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#lrg_status_search_json').hide()"></div>
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
            "<span class="lrg_blue bold_font">status</span>": ["<b>public</b>"],
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
          <a href="{{ site.rest.rest_lrg }}/entry/LRG_1,LRG_9?fields=name" target="_blank">{{ site.rest.rest_lrg }}/entry/LRG_1,LRG_9?fields=name</a>
        </td>
        <td>
          <button class="btn btn-primary btn-xs" onclick="javascript:show_output('lrg_status_multi_search','xml')">XML output</button>
        </td>
      </tr>
      <tr>
        <td>JSON</td>
        <td>
          <a href="{{ site.rest.rest_lrg }}/entry/LRG_1,LRG_9?fields=name&format=json" target="_blank">{{ site.rest.rest_lrg }}/entry/LRG_1,LRG_9?fields=name<b>&format=json</b></a>
        </td>
        <td>
          <button class="btn btn-primary btn-xs" onclick="javascript:show_output('lrg_status_multi_search','json')">JSON output</button>
        </td>
      </tr>
    </tbody>   
  </table>

  <div id="lrg_status_multi_search">
    <div class="output_example" id="lrg_status_multi_search_xml">
      <div class="clearfix">
        <div class="left"><h5>Example XML output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#lrg_status_multi_search_xml').hide()"></div>
      </div>
      <pre>
&lt;result>
  &lt;entries>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_1</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">status</span>">
          &lt;values>
            &lt;value><b>public</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_9</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">status</span>">
          &lt;values>
            &lt;value><b>pending</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
  &lt;/entries>
&lt;/result>
      </pre>
    </div>
    <div class="output_example" id="lrg_status_multi_search_json">
      <div class="clearfix">
        <div class="left"><h5>Example JSON output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#lrg_status_multi_search_json').hide()"></div>
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
            "<span class="lrg_blue bold_font">status</span>": ["<b>public</b>"],
          }
      },
      {
        "id": "<span class="lrg_purple bold_font">LRG_9</span>",
        "source": "<b>lrg</b>",
        "fields": 
          {
            "<span class="lrg_blue bold_font">status</span>": ["<b>pending</b>"],
          }
      }
    ]
}
      </pre>
    </div>
  </div>

  <div class="ws_example_title">
    The results can be "public" (finalised LRG and thus made public) or "pending" (in working progress to agree on the LRG sequences and the choice of transcript(s)).
  </div>

</div>
