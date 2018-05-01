---
title: "How many LRG records have been created?"
faq_group: lrg_definition
faq_order: 10
faq_tags:
  - lrg_definition
  - records
---

<script>
  $( document ).ready(function() {

  	// All
  	var lrg_json_file  = '{{ site.lrg_json_file }}';
  	var result_objects = {};
  	var public_result_objects = {};
  	$.getJSON( lrg_json_file ).then(function(data) {
  	  result_objects = getObjects({}, data, '', '*', result_objects);
  	  var result_count = Object.keys(result_objects).length;
  	  if (result_count && result_count!= 0) {
  	  	$('#lrg_count').html(result_count);
  	  }
  	  else {
  	  	$('#lrg_count').html('{{ site.lrg-created }}');
  	  }

	    // Public
  	  public_result_objects = getObjects({}, data, '', 'public', public_result_objects);
  	  var public_result_count = Object.keys(public_result_objects).length;
  	  if (public_result_count && public_result_count!= 0) {
  	    $('#lrg_public_count').html(public_result_count);
  	  }
  	  else {
  	  	$('#lrg_public_count').html('{{ site.lrg-public }}');
  	  }
  	});
  });
</script>

Over **<span id="lrg_count"></span> LRGs** have been created, of which **<span id="lrg_public_count"></span>** are **public**.
The aim is to create an LRG for every locus with clinical implications. To request an LRG please look at the [LRG request](/lrg-request) page.
