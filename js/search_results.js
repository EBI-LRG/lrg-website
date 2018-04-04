
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
var table_tbody;
var lrg_row_id_prefix = '';

var step_col_class = 'step_col';
var public_step_col_class  = 'public_step';
var pending_step_col_class = 'pending_step';

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

      $("#search_count").hide();
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
  if (!table_tbody) {
    table_tbody = $(table_id + " > tbody");
  }

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
  $("#search_count").show();
  table_tbody.empty();
  $("#search_help_container").removeClass();

  var step_info = $('#step_info_container');

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

  var rows_list = [];

  // Loop over results
  for (var i=0; i < result_keys.length; i++) {
    var lrg_id = result_keys[i];
    var entry  = results[lrg_id];
    var symbol = entry.symbol;
    var status = entry.status;
    var chr    = entry.coord[0];
    var start  = entry.coord[1];
    var end    = entry.coord[2];
    var id     = extract_id(lrg_id);

    var ens_link  = generate_external_link('Ensembl','ens',1);
    var ncbi_link = generate_external_link('NCBI','ncbi',1);
    var ucsc_link = generate_external_link('UCSC','ucsc',1);

    var lrg_link    = get_lrg_link(lrg_id, id);
    var curation_id = lrg_id.toLowerCase();
    
    // Step class
    var step_classes =  step_col_class + ' ';
        step_classes += (status == 'public') ? public_step_col_class : pending_step_col_class;

    var curation_desc_cell = newCell().attr('id', curation_id+'_step');
        curation_desc_cell.addClass(step_classes);

    var curation_date_cell = newCell('-').attr('id', curation_id+"_date");
        curation_date_cell.addClass(step_col_class);

    if (status == 'public') {
      curation_desc_cell.attr('sorttable_key', lrg_steps_count);
    }
    else {
      lrg_list.push(id);

      if (has_lrg_pending == 0) {
        has_lrg_pending = 1;
        step_info.show(400);
      }
    }

    // HTML code
    var newrow = $('<tr/>');
        newrow.attr('id', lrg_row_id_prefix+id);
        newrow.attr('data-chr', chr);
        newrow.attr('data-start', start);
        newrow.attr('data-end', end);
        newrow.attr('data-symbol', symbol);
        newrow.attr('data-status', status);

    // LRG ID
    var lrg_id_cell = newCell(lrg_link);
        lrg_id_cell.attr('sorttable_key', id);
    
    newrow.append(lrg_id_cell);
    // Symbol
    newrow.append(newCell(generate_external_link(symbol,'hgnc_link')));
    // LRG Status
    newrow.append(newCell("<span>"+status+"</span>").addClass(status+'_hl'));
    // Curation Status step
    newrow.append(curation_desc_cell);
    // Curation Status date
    newrow.append(curation_date_cell);

    // External links
    newrow.append(newCell(ens_link + link_separator + ncbi_link + link_separator + ucsc_link).addClass('gbrowser'));

    rows_list.push(newrow);
    //table_tbody.append(newrow);
  }
  table_tbody.append(rows_list);

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
    step_info.hide();
    step_info.html('');

    $('.'+step_col_class).hide();
  }
}


function newCell(content) {
  return $("<td></td>").html(content);
}



/***** Links *****/

/* LRG link */
function get_lrg_link (lrg_id, id) {
  var lrg_link = build_link_base(lrg_id);
      lrg_link.addClass('lrg_link');
  return lrg_link[0].outerHTML;
}
$(document).on('click', '.lrg_link', function () {
  var id = $(this).closest('tr').attr('id');
  var status = $('#'+lrg_row_id_prefix+id).data('status');
  var lrg_url  = lrg_ftp;
  if (status != 'public') {
    lrg_url += status+'/';
  }
  window.open(lrg_url + 'LRG_' + id + '.xml','_blank');
});

/* HGNC link */
$(document).on('click', '.hgnc_link', function () {
  var id = $(this).closest('tr').attr('id');
  var symbol =  $('#'+lrg_row_id_prefix+id).data('symbol');
  window.open(hgnc_url+symbol,'_blank');
});

/* Ensembl | NCBI | UCSC links */
$(document).on('click', '.egb_link', function () {
  var id = $(this).closest('tr').attr('id');
  
  var el = $('#'+lrg_row_id_prefix+id);
  var chr   = el.data('chr');
  var start = el.data('start');
  var end   = el.data('end');

  var new_link = '';
  // Ensembl
  if ($(this).hasClass('ens')) {
    new_link = ens_url.replace(/###ID###/, "LRG_"+id);
    new_link = new_link.replace(/###LOC###/, chr+':'+start+'-'+end);
  }
  // NCBI
  else if ($(this).hasClass('ncbi')) {
    new_link = ncbi_url.replace(/###CHR###/, chr);
    new_link = new_link.replace(/###START###/, start);
    new_link = new_link.replace(/###END###/, end);
  }
  // UCSC
  else if ($(this).hasClass('ucsc')) {
    new_link = ucsc_url.replace(/###LOC###/, chr+':'+start+'-'+end);
  }
  window.open(new_link,'_blank');
});


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
function generate_external_link (label,id_class,ext_class) {
  var classes = external_link_class+" "+id_class;
  if (ext_class) {
    classes += ' egb_link';
  }
  var ext_link = build_link_base(label);
      ext_link.addClass(classes);
  return ext_link[0].outerHTML;
}



// Return an array of objects according to key, value, or key and value matching
function getObjects (obj_parent, obj, key, val, objects, regex) {

  // Initialise hash
  if (!objects) {
    objects = {};
  }

  // Data search //

  // Get all the data
  if (val == "*") {
    for (var i=0; i<obj.length; i++) {
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
        break;
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
        break;
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
  table_tbody = $(table_id + " > tbody");
  table_tbody.empty();
  table_tbody.append('<tr><td colspan="'+cols+'"><div class="wait"></div><div class="loader"></div></td></tr>');
}



/***** Retrieve information about LRG curation steps (pending records) *****/

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
    
    // Add step data for public records
    $('.'+public_step_col_class).html("<span class=\"label\">" + lrg_steps_list[lrg_steps_count] + "</span>"+render_lrg_step_id(lrg_steps_count,'public'));

    // Display the corresponding curation step for each pending LRG
    for (var i=0; i<lrg_list.length; i++) {

      var lrg_id = lrg_list[i];
      lrg_step_data = data.lrg[lrg_id];

      var step_id   = lrg_step_data[0];
      var step_desc = lrg_steps_list[step_id];
      var step_date = format_date(lrg_step_data[1]);
      var step_desc_content = "<span class=\"label\">" + step_desc + "</span>";
      var step_num_content  = render_lrg_step_id(step_id,'pending');
      var step_date_content = "<span class=\"label lrg_step_date icon-calendar close-icon-5\">" + step_date + "</span>";

      var step_el = $('#lrg_'+lrg_id+"_step");
      step_el.attr('sorttable_key', step_id);
      step_el.html(step_desc_content+step_num_content);

      $('#lrg_'+lrg_id+"_date").html(step_date_content);
    }
  });
}

// Function to display LRG step ID
function render_lrg_step_id (step_id,status) {
  var step_class = "badge badge_circle";
  var title = "Step "+step_id+" out of "+lrg_steps_count;
  return "<span></span><span class=\"badge badge_circle\" title=\""+title+"\">" + step_id + "</span>";
}

// Get the correct date format
function format_date(raw_date) {
  var date = raw_date.split('/');
  return date[0] + ' ' + months[date[1]] + ' 20' + date[2];
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
