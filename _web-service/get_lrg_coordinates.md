---
title: "Get the genomic coordinates of a list of LRGs"
tag: ws_lrg_data
order: 1
---

<div class="clearfix margin-top-20">
  <div class="left bold_font margin-right-10">Example URL syntax: </div> 
  <div class="left" style="font-weight:normal">
    {{ site.rest_lrg }}<b>/entry/<span class="lrg_purple">&lt;lrg_ids_list&gt;</span>?fields=<span class="lrg_blue">&lt;list_of_fields&gt;</span></b>
  </div>
</div>

<div class="ws_example_title bold_font">Example for GRCh37 coordinates:</div>
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
          <a href="{{ site.rest_lrg }}/entry/LRG_1?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37" target="_blank">/entry/LRG_1?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37</a>
        </td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="javascript:show_output('coord_37_search','xml')">XML output</button>
        </td>
      </tr>
      <tr>
        <td>JSON</td>
        <td>
          <a href="{{ site.rest_lrg }}/entry/LRG_1?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37&format=json" target="_blank">/entry/LRG_1?fields=chr_name_grch37,chr_start_grch37,chr_end_grch37,chr_strand_grch37<b>&format=json</b></a>
        </td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="javascript:show_output('coord_37_search','json')">JSON output</button>
        </td>
      </tr>
    </tbody>   
  </table>

  <div id="coord_37_search">
    <div class="output_example" id="coord_37_search_xml">
      <div class="clearfix">
        <div class="left"><h5>Example XML output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#coord_37_search_xml').hide()"></div>
      </div>
      <pre>
&lt;result>
  &lt;entries>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_1</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">chr_name_grch37</span>">
          &lt;values>
            &lt;value><b>17</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_start_grch37</span>">
          &lt;values>
            &lt;value><b>48259457</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_end_grch37</span>">
          &lt;values>
            &lt;value><b>48284000</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_strand_grch37</span>">
          &lt;values>
            &lt;value><b>-1</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
  &lt;/entries>
&lt;/result>
      </pre>
    </div>
    <div class="output_example" id="coord_37_search_json">
      <div class="clearfix">
        <div class="left"><h5>Example JSON output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#coord_37_search_json').hide()"></div>
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
            "<span class="lrg_blue bold_font">chr_name_grch37</span>": ["<b>17</b>"],
            "<span class="lrg_blue bold_font">chr_start_grch37</span>": ["<b>48259457</b>"],
            "<span class="lrg_blue bold_font">chr_end_grch37</span>": ["<b>48284000</b>"],
            "<span class="lrg_blue bold_font">chr_strand_grch37</span>": ["<b>-1</b>"]
          }
      }
    ]
}
      </pre>
    </div>
  </div>
</div>

<div class="ws_example_title bold_font">Example for GRCh38 coordinates:</div>
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
          <a href="{{ site.rest_lrg }}/entry/LRG_1?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38" target="_blank">/entry/LRG_1?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38</a>
        </td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="javascript:show_output('coord_38_search','xml')">XML output</button>
        </td>
      </tr>
      <tr>
        <td>JSON</td>
        <td>
          <a href="{{ site.rest_lrg }}/entry/LRG_1?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38&format=json" target="_blank">/entry/LRG_1?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38<b>&format=json</b></a>
        </td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="javascript:show_output('coord_38_search','json')">JSON output</button>
        </td>
      </tr>
    </tbody>   
  </table>

  <div id="coord_38_search">
    <div class="output_example" id="coord_38_search_xml">
      <div class="clearfix">
        <div class="left"><h5>Example XML output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#coord_38_search_xml').hide()"></div>
      </div>
      <pre>
&lt;result>
  &lt;entries>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_1</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">chr_name_grch38</span>">
          &lt;values>
            &lt;value><b>17</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_start_grch38</span>">
          &lt;values>
            &lt;value><b>50182096</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_end_grch38</span>">
          &lt;values>
            &lt;value><b>50206639</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_strand_grch38</span>">
          &lt;values>
            &lt;value><b>-1</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
  &lt;/entries>
&lt;/result>
      </pre>
    </div>
    <div class="output_example" id="coord_38_search_json">
      <div class="clearfix">
        <div class="left"><h5>Example JSON output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#coord_38_search_json').hide()"></div>
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
            "<span class="lrg_blue bold_font">chr_name_grch38</span>": ["<b>17</b>"],
            "<span class="lrg_blue bold_font">chr_start_grch38</span>": ["<b>50182096</b>"],
            "<span class="lrg_blue bold_font">chr_end_grch38</span>": ["<b>50206639</b>"],
            "<span class="lrg_blue bold_font">chr_strand_grch38</span>": ["<b>-1</b>"]
          }
      }
    ]
}
      </pre>
    </div>
  </div>
</div>


<div class="ws_example_title bold_font">Example with several LRGs in 1 query (GRCh38 coordinates):</div>
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
          <a href="{{ site.rest_lrg }}/entry/LRG_1,LRG_2?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38" target="_blank">/entry/LRG_1,LRG_2?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38</a>
        </td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="javascript:show_output('coord_multi_38_search','xml')">XML output</button>
        </td>
      </tr>
      <tr>
        <td>JSON</td>
        <td>
          <a href="{{ site.rest_lrg }}/entry/LRG_1,LRG_2?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38&format=json" target="_blank">/entry/LRG_1,LRG_2?fields=chr_name_grch38,chr_start_grch38,chr_end_grch38,chr_strand_grch38<b>&format=json</b></a>
        </td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="javascript:show_output('coord_multi_38_search','json')">JSON output</button>
        </td>
      </tr>
    </tbody>   
  </table>

  <div id="coord_multi_38_search">
    <div class="output_example" id="coord_multi_38_search_xml">
      <div class="clearfix">
        <div class="left"><h5>Example XML output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#coord_multi_38_search_xml').hide()"></div>
      </div>
      <pre>
&lt;result>
  &lt;entries>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_1</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">chr_name_grch38</span>">
          &lt;values>
            &lt;value><b>17</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_start_grch38</span>">
          &lt;values>
            &lt;value><b>50182096</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_end_grch38</span>">
          &lt;values>
            &lt;value><b>50206639</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_strand_grch38</span>">
          &lt;values>
            &lt;value><b>-1</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
    &lt;entry id="<span class="lrg_purple bold_font">LRG_2</span>" source="<b>lrg</b>">
      &lt;fields>
        &lt;field id="<span class="lrg_blue bold_font">chr_name_grch38</span>">
          &lt;values>
            &lt;value><b>7</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_start_grch38</span>">
          &lt;values>
            &lt;value><b>94389561</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_end_grch38</span>">
          &lt;values>
            &lt;value><b>94433232</b>&lt;/value>
          &lt;/values>
        &lt;/field>
        &lt;field id="<span class="lrg_blue bold_font">chr_strand_grch38</span>">
          &lt;values>
            &lt;value><b>1</b>&lt;/value>
          &lt;/values>
        &lt;/field>
      &lt;/fields>
    &lt;/entry>
  &lt;/entries>
&lt;/result>
      </pre>
    </div>
    <div class="output_example" id="coord_multi_38_search_json">
      <div class="clearfix">
        <div class="left"><h5>Example JSON output</h5></div>
        <div class="right close-button icon-close close-icon-0" style="padding:2px;width:auto" title="Close this panel" onclick="javascript:$('#coord_multi_38_search_json').hide()"></div>
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
            "<span class="lrg_blue bold_font">chr_name_grch38</span>": ["<b>17</b>"],
            "<span class="lrg_blue bold_font">chr_start_grch38</span>": ["<b>50182096</b>"],
            "<span class="lrg_blue bold_font">chr_end_grch38</span>": ["<b>50206639</b>"],
            "<span class="lrg_blue bold_font">chr_strand_grch38</span>": ["<b>-1</b>"]
          }
      },
      {
        "id": "<span class="lrg_purple bold_font">LRG_2</span>",
        "source": "<b>lrg</b>",
        "fields": 
          {
            "<span class="lrg_blue bold_font">chr_name_grch38</span>": ["<b>7</b>"],
            "<span class="lrg_blue bold_font">chr_start_grch38</span>": ["<b>94389561</b>"],
            "<span class="lrg_blue bold_font">chr_end_grch38</span>": ["<b>94433232</b>"],
            "<span class="lrg_blue bold_font">chr_strand_grch38</span>": ["<b>1</b>"]
          }
      }
    ]
}
      </pre>
    </div>
  </div>
</div>
