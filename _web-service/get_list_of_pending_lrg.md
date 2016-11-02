---
title: "Get the list of pending LRG"
tag: ws_lrg_search
order: 4
---

<div class="clearfix margin-top-10">
  <div class="left bold_font margin-right-10" style="width:75px">Query:</div> 
  <div class="left">{{ site.rest_lrg }}<b>?query=status:<span class="lrg_blue">pending</span></b></div>
</div>
<div class="clearfix margin-top-10">
  <div class="left bold_font margin-right-10" style="width:75px">Example:</div> 
  <div class="left">
    <table class="table table-lrg">
      <thead>
        <tr>
          <th>Output format</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XML <span class="smaller-font">(default)</span></td>
          <td>
            <a href="{{ site.rest_lrg }}?query=status:pending&size=100" target="_blank">{{ site.rest_lrg }}?query=status:pending<b>&size=100</b></a>
          </td>
        </tr>
        <tr>
          <td>JSON</td>
          <td>
            <a href="{{ site.rest_lrg }}?query=status:pending&size=100&format=json" target="_blank">{{ site.rest_lrg }}?query=status:pending<b>&size=100&format=json</b></a>
          </td>
        </tr>
      </tbody>   
    </table>
  </div>
</div>

<p>
  Same as the section above "Get list of public LRGs", replacing the status <b>"public"</b> by <b>"pending"</b>.</span>
</p>