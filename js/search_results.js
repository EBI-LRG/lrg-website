---
---

// Links
var lrg_ftp  = '{{ site.lrg_ftp_http }}';
var ens_url  = '{{ site.ens_url }}';
var ncbi_url = '{{ site.ncbi_url }}';
var ucsc_url = '{{ site.ucsc_url }}';
var hgnc_url = '{{ site.hgnc_url }}';

var lrg_json_file = '{{ site.lrg_json_file }}';

var ref_assembly = '{{ site.ref_assembly }}';
ens_url = ens_url.replace(/###ASSEMBLY###/, ref_assembly);

var external_link_class = 'icon-ext';

var table_id = "#search_results";


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

  var search_term = search_id;
  if (search_id == "*") {
    search_term = "All LRGs";
  }
  search_term = search_term.replace(/;/g, ' / ');

  $("#search_term").html(search_term);

  var result_objects = {};
  var search_ids_list = search_id.split(';');

  return $.getJSON( lrg_json_file ).then(function(data) {
    $.each(search_ids_list, function (index, search_item) {
      result_objects = getObjects(data, data, "", search_item, result_objects);
    });
    return result_objects;
  });

}

// Function get data in array
function get_data_in_array () {
  var data_array = [];
  return $.getJSON( lrg_json_file ).then(function(data) {
    // Get the different searchable items
    var data_list = {};
    for (var i in data) {
      if (!data.hasOwnProperty(i)) continue;
      var item = data[i];
      data_list[item.id] = 1;
      data_list[item.symbol] = 1;
      data_list[item.status] = 1;
      for (var j in item.synonyms) {
        data_list[item.synonyms[j]] = 1;
      }
      for (var k in item.xref) {
        data_list[item.xref[k]] = 1;
      }
    }
    // Compile the data into an array
    $.each(data_list, function(key, value) {
      data_array.push(key);
    });
    return data_array;
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

  // Sort the results by LRG ID (using the numeric part of the LRG ID)
  var result_keys = Object.keys(results);
  result_keys.sort(function(a,b) {
    var id_a = extract_id(a);
    var id_b = extract_id(b);
    return id_a - id_b;
  });

  var link_separator = '<span>-</span>';

  for (i in result_keys) {
    var lrg_id     = result_keys[i];
    var symbol     = results[lrg_id].symbol;
    var lrg_status = results[lrg_id].status;
    var chr        = results[lrg_id].chr;
    var start      = results[lrg_id].start;
    var end        = results[lrg_id].end;

    var ens_link  = get_ens_link(lrg_id, chr, start, end);
    var ncbi_link = get_ncbi_link(chr, start, end);
    var ucsc_link = get_ucsc_link(chr, start, end);

    var lrg_link = lrg_ftp;
    var curation_link = '';
    if (lrg_status != "public") {
      lrg_link += lrg_status + "/";
      curation_link = get_curation_link(lrg_id); 
    }

    // HTML code
    var newrow = $('<tr/>');
        //newrow.attr('id', lrg_id); // <= not used at the moment
    // LRG ID
    var lrg_link = build_ftp_link(lrg_id, lrg_link + lrg_id + '.xml');
    var lrg_id_cell = newCell(lrg_link);
        lrg_id_cell.attr('sorttable_key', extract_id(lrg_id));
    newrow.append(lrg_id_cell);
    // Symbol
    newrow.append(newCell(get_hgnc_link(symbol)));
    // Status
    newrow.append(newCell('<span>'+lrg_status+curation_link+'</span>').addClass('lrg_'+lrg_status+'_hl'));
    // External links
    newrow.append(newCell(ens_link + link_separator + ncbi_link + link_separator + ucsc_link).addClass('gbrowser'));
    $(table_id + " > tbody").append(newrow);
  }
}


function newCell(content) {
  return $("<td></td>").html(content);
}

/**** Links ****/

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
function get_ens_link (lrg_id, chr, start, end) {
  var ext_link = build_external_link('Ensembl');
      ext_link.attr('onclick',"ensembl_link('"+lrg_id+"','"+chr+"','"+start+"','"+end+"')");
  return ext_link[0].outerHTML;
}
function ensembl_link (lrg_id, chr, start, end) {
  var new_link = ens_url.replace(/###ID###/, lrg_id);
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


/**** Functions to build the links ****/

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
function getObjects (obj_parent, obj, key, val, objects) {

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
    var regex;
    // Specific regex for the sequence identifiers, with a version, e.g. NM_000088.3
    if (val.match(/^(NM_|NR_|NG_|ENST|ENSG)\d+/)) {
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

    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = getObjects(obj, obj[i], key, val, objects);    
      } 
      // if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
      else if ((i == key && (obj[i] == val || regex.test(obj[i]))) || (i == key && val == '')) { //
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
  $(table_id + " > tbody").empty();
  $(table_id + " > tbody").append('<tr><td colspan="5"><div class="wait"></div><div class="loader"></div></td></tr>');
}
