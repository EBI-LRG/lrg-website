
// Links
var lrg_ftp  = '{{ site.js_url.lrg_record }}';
var ens_url  = '{{ site.js_url.ens }}';
var ncbi_url = '{{ site.js_url.ncbi }}';
var ucsc_url = '{{ site.js_url.ucsc }}';
var hgnc_url = '{{ site.js_url.hgnc }}';

var lrg_json_file  = '{{ site.lrg_json_file }}';
var step_json_file = '{{ site.step_json_file }}';
var lrg_search_terms_file = '{{ site.lrg_search_terms_file }}';

var ref_assembly = '{{ site.ref_assembly }}';
ens_url = ens_url.replace(/###ASSEMBLY###/, ref_assembly);

var external_link_class = 'icon-ext';

var table_id = "#search_results";

var step_col_class = 'step_col';
var public_step_col_class = 'public_step';

var lrg_steps_list = [];
var lrg_steps_count = 0;

var json_keys = { 'LRG_'   : 'id',
                  'public' : 'status',
                  'pending': 'status'
                };

var json_skip_keys = { 'coord' : 1 };

var months = {
  '1'  : 'January',
  '2'  : 'February',
  '3'  : 'March',
  '4'  : 'April',
  '5'  : 'May',
  '6'  : 'June',
  '7'  : 'July',
  '8'  : 'August',
  '9'  : 'September',
  '10' : 'October',
  '11' : 'November',
  '12' : 'December'
};


//
// Methods //
//

function get_query () {

  // Comes from the search page
  var query = $('#search_id').val();

  // Comes from an other page
  if (!query) {
    query = getParameterByName("query");
  }
  go_to_result_page(query);
}

function go_to_result_page (query) {

  if (query.length > 0) {
    var url = window.location.href;
    var regex = new RegExp("\/search\/");
    // Search page
    if (regex.test(url)) {
      changeUrlParam('query', query);

      wait_for_results();

      // Asynch AJAX call + display results
      get_search_results(query).then(function(result_objects){
        lrg_steps_list = [];
        lrg_steps_count = 0;

        display_results(result_objects);
      });
    }
    // Other page
    else {
      location.href = '/search/?query='+query;
    }
  }
}

function get_search_results (search_id) {

  if (!search_id) {
    return "";
  }

  var search_ids_list = search_id.split(';');

  // Search LRG ID with only the number (e.g. '10' instead of 'LRG_10')
  $.each(search_ids_list, function (index, search_item) {
    if (search_item.match(/^\d+$/)) {
      search_ids_list[index] = 'LRG_'+search_item;
    }
  });

  var search_term = '';
  // Search all LRGs
  if (search_id == "*") {
    search_term = "All LRGs";
  }
  else {
    search_term = search_ids_list.join('<span class="lrg_dark"> | </span>');
  }

  var result_objects = {};

  $("#search_term").html(search_term);

  return $.getJSON( lrg_json_file ).then(function(data) {
    $.each(search_ids_list, function (index, search_item) {
      var key = '';
      for (var jkey in json_keys) {
        if (json_keys.hasOwnProperty(jkey)) {
          var re = "^"+jkey;
          if (search_item.match(re)) {
            key = json_keys[jkey];
            break;
          }
        }
      }
      result_objects = getObjects({}, data, key, search_item, result_objects);
    });
    return result_objects;
  });

}


// Function to display results
function display_results (results) {

  var result_count = Object.keys(results).length;
  var result_term = "result";
  if (!result_count) {
    result_count = 0;
  }
  if (result_count > 1) {
    result_term += "s";
  }

  $("#search_count").html(result_count + " " + result_term);
  $(table_id + " > tbody").empty();
  $("#search_help_container").removeClass();

  // Sort the results by LRG ID (using the numeric part of the LRG ID)
  var result_keys = Object.keys(results);
  result_keys.sort(function(a,b) {
    var id_a = extract_id(a);
    var id_b = extract_id(b);
    return id_a - id_b;
  });

  var link_separator = '<span>-</span>';
  
  var has_lrg_pending = 0;

  var lrg_list = [];

  for (i in result_keys) {
    var lrg_id     = result_keys[i];
    var symbol     = results[lrg_id].symbol;
    var lrg_status = results[lrg_id].status;
    var chr        = results[lrg_id].coord[0];
    var start      = results[lrg_id].coord[1];
    var end        = results[lrg_id].coord[2];
    var id         = extract_id(lrg_id);

    var ens_link  = get_ens_link(id, chr, start, end);
    var ncbi_link = get_ncbi_link(chr, start, end);
    var ucsc_link = get_ucsc_link(chr, start, end);


    var lrg_link = '';
    var curation_id = lrg_id.toLowerCase();
    var curation_desc_cell = newCell().attr('id', curation_id+'_step');
        curation_desc_cell.addClass(step_col_class);

    var curation_step_cell = newCell().attr('id', curation_id+"_id");
        curation_step_cell.addClass(step_col_class);

    var curation_date_cell = newCell().attr('id', curation_id+"_date");
        curation_date_cell.addClass(step_col_class);


    if (lrg_status != "public") {
      lrg_link = get_lrg_link(lrg_id, id, lrg_status);
      lrg_list.push(id);

      if (has_lrg_pending == 0) {
        has_lrg_pending = 1;
        $('#step_info_container').html('<div class="section-header icon-unassigned-job">Curation status steps</div><div class="text-center"><img src="/images/curation_steps.png"/></div>')
        $('#step_info_container').show(400);
      }
    }
    else {
      lrg_link = get_lrg_link(lrg_id, id);
      curation_desc_cell.addClass(public_step_col_class);
      curation_date_cell.html('-');
    }

    // HTML code
    var newrow = $('<tr/>');
    // LRG ID
    var lrg_id_cell = newCell(lrg_link);
        lrg_id_cell.attr('sorttable_key', id);
    newrow.append(lrg_id_cell);
    // Symbol
    newrow.append(newCell(get_hgnc_link(symbol)));
    // LRG Status
    newrow.append(newCell("<span>"+lrg_status+"</span>").addClass(lrg_status+'_hl'));
    // Curation Status step
    newrow.append(curation_desc_cell.addClass(step_col_class));
    // Curation Status date
    newrow.append(curation_date_cell.addClass(step_col_class));
   
    // External links
    newrow.append(newCell(ens_link + link_separator + ncbi_link + link_separator + ucsc_link).addClass('gbrowser'));
    $(table_id + " > tbody").append(newrow);
  }

  // Post process to show or not the "Curation status" column (not needed if only public LRG returned in the results)
  if (has_lrg_pending == 1) {

    // Make space to display the step diagram
    $("#search_help_container").addClass("col-xs-6 col-sm-6 col-md-6 col-lg-6 padding-left-0 padding-right-0");

    // Get the LRG steps
    get_lrg_step_data(lrg_list);

    // Show the LRG steps
    $('.'+step_col_class).show();
  }
  else {
    $('#step_info_container').hide();
    $('#step_info_container').html('');

    $('.'+step_col_class).hide();
  }
}


function newCell(content) {
  return $("<td></td>").html(content);
}

/***** Links *****/

/* LRG link */
function get_lrg_link (lrg_id, id, status) {
  var lrg_link = build_link_base(lrg_id);
  var js_param = (status) ? "'"+id+"','"+status+"'" : "'"+id+"'";
      lrg_link.attr('onclick',"lrg_link("+js_param+")");
  return lrg_link[0].outerHTML;
}
function lrg_link (id, status) {
  var lrg_url  = lrg_ftp;
      lrg_url += (status) ? status+'/' : '';
  window.open(lrg_url + 'LRG_' + id + '.xml','_blank');
}


/* HGNC link */
function get_hgnc_link (symbol) {
  var ext_link = build_external_link(symbol);
      ext_link.attr('onclick',"hgnc_link('"+symbol+"')");
  return ext_link[0].outerHTML;
}
function hgnc_link (symbol) {
  window.open(hgnc_url+symbol,'_blank');
}


/* Ensembl link */
function get_ens_link (id, chr, start, end) {
  var ext_link = build_external_link('Ensembl');
      ext_link.attr('onclick',"ens_link('"+id+"','"+chr+"','"+start+"','"+end+"')");
  return ext_link[0].outerHTML;
}
function ens_link (id, chr, start, end) {
  var new_link = ens_url.replace(/###ID###/, "LRG_"+id);
      new_link = new_link.replace(/###LOC###/, chr+':'+start+'-'+end);
  window.open(new_link,'_blank');
}


/* NCBI link */
function get_ncbi_link (chr, start, end) {
  var ext_link = build_external_link('NCBI');
      ext_link.attr('onclick',"ncbi_link('"+chr+"','"+start+"','"+end+"')");
  return ext_link[0].outerHTML;
}
function ncbi_link (chr, start, end) {
  var new_link = ncbi_url.replace(/###CHR###/, chr);
      new_link = new_link.replace(/###START###/, start);
      new_link = new_link.replace(/###END###/, end);
  window.open(new_link,'_blank');
}


/* UCSC link */
function get_ucsc_link (chr, start, end) {
  var ext_link = build_external_link('UCSC');
      ext_link.attr('onclick',"ucsc_link('"+chr+"','"+start+"','"+end+"')");
  return ext_link[0].outerHTML;
}
function ucsc_link (chr, start, end) {
  var new_link = ucsc_url.replace(/###LOC###/, chr+':'+start+'-'+end);
  window.open(new_link,'_blank');
}


/* Curation link */
function get_curation_link (lrg_id) {
  var curation_link = build_link_base('see progress', '/curation-status/#'+lrg_id);
      curation_link.addClass('icon-next smaller-icon close-icon-2');
  return curation_link[0].outerHTML;
}


/***** Functions to build the links *****/

function build_link_base (label,url) {
  var ext_link = $('<a></a>');
      ext_link.html(label);
  if (url) {
    ext_link.attr('href', url);
  }
  return ext_link;
}

function build_ftp_link (label,url) {
  var ftp_link = build_link_base(label,url);
  return ftp_link;
}

// Function to build simple external link
function build_external_link (label,url,return_html) {
  var ext_link = build_link_base(label,url);
      ext_link.addClass(external_link_class);
  if (return_html) {
    ext_link.attr('target','_blank');
    return ext_link[0].outerHTML;
  }
  else {
    return ext_link;
  }
}


// Return an array of objects according to key, value, or key and value matching
function getObjects (obj_parent, obj, key, val, objects, regex) {

  // Initialise hash
  if (!objects) {
    objects = {};
  }

  // Data search //

  // Get all the data
  if (val == "*" && key == '') {
    for (var i in obj) {
      objects[obj[i].id] = obj[i];
    }
  }
  // Get a search result
  else {
    // Search with regex
    if (!regex) {
      // Specific regex for the sequence identifiers, with a version, e.g. NM_000088.3
      if (val.match(/^(NM_|NR_|NG_|ENST|ENSG)\d+$/)) {
        regex = new RegExp("^"+val+"\.", "i");
      }
      // Wild card character associated with other characters
      else if (val.match(/\*/)) {
        var tmp_val = val.replace(/\*/g,".*");
        regex = new RegExp("^"+tmp_val+"$", "i");
      }
      // Default regex
      else {
        regex = new RegExp("^"+val+"$", "i");
      }
    }

    for (var i in obj) {
      // Skip search on non searchable fields
      if (!obj.hasOwnProperty(i) || json_skip_keys[i]) continue;

      if (typeof obj[i] == 'object') {
        objects = getObjects(obj, obj[i], key, val, objects);    
      } 
      // if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
      else if ((i == key && (obj[i] == val || regex.test(obj[i]))) || (i == key && val == '')) {
        console.log("FOUND");
        objects[obj.id] = obj;
      } 
      // only add if the object is not already in the array
      else if ((obj[i] == val || regex.test(obj[i])) && key == ''){
        // Data fetched from an array
        if (Object.keys(obj)[0] == 0) {
          objects[obj_parent.id] = obj_parent;
        }
        // Data fetched from a key/value
        else {
          objects[obj.id] = obj;
        }
      }
    }
  }
  return objects;
}

// Function extract numerical ID from a LRG ID (LRG_XXX)
function extract_id (lrg_id) {

  var match = lrg_id.match(/^LRG_(\d+)$/);
  if (match) {
    return match[1];
  }
  else {
    return lrg_id;
  }
}



/***** URL and URL parameters manipulation *****/

// Function to retrieve the searched term
function getParameterByName (name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Pick up the URL parameters in order to get the search terms
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

// Change the URL to add the search terms as parameters
function changeUrlParam (param, value) {
  var currentURL = window.location.href+'&';
  var change = new RegExp('('+param+')=(.*)&', 'g');
  var newURL = currentURL.replace(change, '$1='+value+'&');

  if (getURLParameter(param) !== null){
    try {
      window.history.replaceState('', '', newURL.slice(0, - 1) );
    } catch (e) {
      console.log(e);
    }
  } else {
    var currURL = window.location.href;
    if (currURL.indexOf("?") !== -1){
      window.history.replaceState('', '', currentURL.slice(0, - 1) + '&' + param + '=' + value);
    } else {
      window.history.replaceState('', '', currentURL.slice(0, - 1) + '?' + param + '=' + value);
    }
  }
}

// Rolling image displayed while the result is 
function wait_for_results() {
  var cols = $(table_id).find("thead > tr:first th").length;
  $(table_id + " > tbody").empty();
  $(table_id + " > tbody").append('<tr><td colspan="'+cols+'"><div class="wait"></div><div class="loader"></div></td></tr>');
}



/***** Retrieve information about LRG curation steps (pending records) *****/

// Function to get the LRG steps
function get_lrg_steps (results) {
  $.getJSON( step_json_file, function(data) {
    var steps_list = [];
    $.each(data.steps, function (index, value) {
      var i = index + 1;
      lrg_steps_list[i] = value;
      lrg_steps_count ++;
    });
    display_results(results);
  });
}

// Function to get the LRG step curation
function get_lrg_step_data (lrg_list) {

  $.getJSON( step_json_file, function(data) {

    // List the different steps
    var steps_list = [];
    $.each(data.steps, function (index, value) {
      var i = index + 1;
      lrg_steps_list[i] = value;
      lrg_steps_count ++;
    });
    $('.'+public_step_col_class).attr('sorttable_key', lrg_steps_count);
    $('.'+public_step_col_class).html("<span class=\"label public_bg\">" + lrg_steps_list[lrg_steps_count] + "</span><span class=\"lrg_blue\">----</span>"+render_lrg_step_id(lrg_steps_count,'public'));

    // Display the corresponding curation step for each pending LRG
    $.each(lrg_list, function (index, lrg_id) {

      lrg_step_data = data.lrg[lrg_id];

      var step_id   = lrg_step_data[0];
      var step_desc = lrg_steps_list[step_id];
      var step_date =  format_date(lrg_step_data[1]);
      var step_desc_content = "<span class=\"label pending_bg_dark_font\">" + step_desc + "</span>";
      var step_num_content  = render_lrg_step_id(step_id,'pending');
      var step_date_content = "<span class=\"label lrg_step_date icon-calendar close-icon-5\">" + step_date + "</span>";

      $('#lrg_'+lrg_id+"_step").attr('sorttable_key', step_id);
      $('#lrg_'+lrg_id+"_step").html(step_desc_content+"<span class=\"pending\">----</span>"+step_num_content);

      $('#lrg_'+lrg_id+"_date").html(step_date_content);
    });
  });
}

// Function to display LRG step ID
function render_lrg_step_id (step_id,status) {
  var step_class= "badge badge_circle "+status+"_bg";
  if (status == 'pending') {
     step_class += "_dark_font";
  }
  var title = "Step "+step_id+" out of "+lrg_steps_count;
  return "<span class=\""+step_class+"\" title=\""+title+"\">" + step_id + "</span>";
}

// Get the correct date format
function format_date(raw_date) {
  var date = raw_date.split('/');
  return date[0] + ' ' + months[date[1]] + ' ' + date[2];
}



/***** Autocompletion *****/

// Function get data in array
function get_data_in_array () {

  return $.ajax({
    url: lrg_search_terms_file,
    dataType: "text"
  })
  .error(function (xhRequest, ErrorText, thrownError) {
    console.log('xhRequest: ' + xhRequest + "\n");
    console.log('ErrorText: ' + ErrorText + "\n");
    console.log('thrownError: ' + thrownError + "\n");
  })
  .then(function(data) {
    var data_array = data.split('\n');
    console.log("DATA ARRAY LENGTH: "+data_array.length);
    return data_array;
  });
}
