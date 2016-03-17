// Links
//var rest_url = "https://www.ebi.ac.uk/ebisearch/ws/rest/lrg";
//var rest_url_lrg_id = rest_url + "/entry/";
//var rest_url_search = rest_url + "?query=";
var lrg_ftp = "http://ftp.ebi.ac.uk/pub/databases/lrgex/";
var ens_url = "http://www.ensembl.org/Homo_sapiens/Location/View?r=###LOC###&contigviewbottom=url:ftp://ftp.ebi.ac.uk/pub/databases/lrgex/.ensembl_internal/###ID###.xml.gff=labels";
var ncbi_url = "http://www.ncbi.nlm.nih.gov/mapview/maps.cgi?taxid=9606&CHR=###CHR###&BEG=###START###&END=###END###";
var ucsc_url = "http://genome.ucsc.edu/cgi-bin/hgTracks?clade=mammal&org=Human&position=chr###LOC###";
var hgnc_url = "http://www.genenames.org/cgi-bin/gene_symbol_report?match=";

var lrg_json_file = "/json_index/lrg_index.json"

var lrg_regexp = /lrg_\d+/i;
var all_lrgs = "LRG_*";
var lrg_list = [];
//var max_results = 100;
//var output_format = "json";
//var params = ";fields=name,status,chr_name,chr_start,chr_end,last_modification_date;size="+max_results+"&format="+output_format;

/*var data_test = [
  {"id":"LRG_1","source":"lrg","fields":{"name":["COL1A1"],"status":["public"],"chr_name":["17"],"chr_start":["48259457"],"chr_end":["48284000"],"last_modification_date":["20160208"]}},
  {"id":"LRG_2","source":"lrg","fields":{"name":["COL1A2"],"status":["public"],"chr_name":["7"],"chr_start":["94018873"],"chr_end":["94062544"],"last_modification_date":["20160208"]}},
  {"id":"LRG_9","source":"lrg","fields":{"name":["SDHD"],"status":["pending"],"chr_name":["11"],"chr_start":["111952571"],"chr_end":["111992353"],"last_modification_date":["20160208"]}},
  {"id":"LRG_10","source":"lrg","fields":{"name":["PPIB"],"status":["public"],"chr_name":["15"],"chr_start":["64446014"],"chr_end":["64460354"],"last_modification_date":["20160208"]}},
  {"id":"LRG_100","source":"lrg","fields":{"name":["RASGRP2"],"status":["public"],"chr_name":["11"],"chr_start":["64492383"],"chr_end":["64517928"],"last_modification_date":["20160208"]}}
];*/

var months = {};
    months["01"] = "Jan";
    months["02"] = "Feb";
    months["03"] = "Mar";
    months["04"] = "Apr";
    months["05"] = "May";
    months["06"] = "Jun";
    months["07"] = "Jul";
    months["08"] = "Aug";
    months["09"] = "Sep";
    months["10"] = "Oct";
    months["11"] = "Nov";
    months["08"] = "Dec";


//
// Methods //
//

function get_query () {

  // Comes from the search page
  var query = document.getElementById('search_id').value;

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
  // Check if search term contains LRG IDs
  /*if (lrg_regexp.test(search_term)) {
    lrg_list = [search_term];
  }
  // Check if search term empty or "*"
  else {
    if (search_id == "" || search_id == "*") {
      search_id = all_lrgs;
      search_term = "All";
    }
  }*/
  $("#search_term").html(search_term);

  var result_objects = [];

  // Change AJAX setting
  //$.ajaxSetup({ async: true });

  return $.getJSON( lrg_json_file ).then(function(data) {
    //result_objects = getObjects(data, data, "", search_term);
    return getObjects(data, data, "", search_id);
  });

  // Rollback AJAX setting
  //$.ajaxSetup({ async: true });

  // Retrieve the list of LRG IDs
/*  if (lrg_list.length == 0) {
    var rest_query = rest_url_search + search_term;
    $.ajax({
      method: "GET",
      async: false, // Avoid weird results
      dataType: "json",
      data: {"size" : max_results, "format" : "json"},
      url: rest_query,
      error: function(jqXHR, status, errorThrown) {
      },
      success: function(results) {
        $("#search_results > tbody").html(""); // Empty the results table
        var count_results = results.hitCount;
        if (count_results > max_results) {
          var start = max_results + 1;
          while (start < count_results) {
            page_results = get_with_pagination (start, query);
            $.each(page_results.entries, function(data) {
              lrg_list.push(data.id);
            });
            start += max_results;
          }
        }
        else {
          $.each(results.entries, function(data) {
            lrg_list.push(data.id);
          });
        }
      }
    });
  }
*/

// var result_objects = retrieve_data(lrg_list);
  //display_results(result_objects);
}

// Function for pagination
/*function get_with_pagination (start, query) {
  var rest_query = query + "&start="+start;
  var results_list = [];
  $.ajax({
    method: "GET",
    async: false, // Avoid weird results
    dataType: output_format,
    data: {"size" : max_results, "format" : output_format},
    url: rest_query,
    error: function(jqXHR, status, errorThrown) {
    },
    success: function(results) {
      results_list = results;
    }
  });
  return results_list;
}*/

// Function to retrieve information
/*function retrieve_data (list) {
  var lrg_results = [];
  var list_string = list.toString();
  
  var rest_query = rest_url_lrg_id + list_string; 

  $.ajax({
    method: "GET",
    async: false, // Avoid weird results
    crossDomain: true,
    dataType: output_format,
    data: {"size" : max_results, "format" : output_format},
    url: rest_query,
    error: function(jqXHR, status, errorThrown) { },
    success: function(results) { 
      var count_results = results.hitCount;
      if (count_results > max_results) {
        var start = max_results + 1;
        while (start < count_results) {
          page_results = get_with_pagination (start, rest_query);
          $.each(page_results.entries, function(data) {
            lrg_results.push(data);
          });
          start += max_results;
        }
      }
      else {
        $.each(results.entries, function(data) {
          lrg_results.push(data);
        });
      }
    }
  });

  return lrg_results;
}*/

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

  $("#search_count").html("(" + result_count + " " + result_term + ")");

  $("#search_results > tbody").empty();

  for (i in results) {
    var lrg_id     = results[i].id;
    var symbol     = results[i].symbol;
    var lrg_status = results[i].status;
    var modif_date = results[i].last_modification_date;
    var chr        = results[i].chr_name;
    var start      = results[i].chr_start;
    var end        = results[i].chr_end;

    var ens_link  = get_ens_link(lrg_id, chr, start, end);
    var ncbi_link = get_ncbi_link(chr, start, end);
    var ucsc_link = get_ucsc_link(chr, start, end);

    var lrg_link = lrg_ftp;
    if (lrg_status != "public") {
      lrg_link += lrg_status + "/";
    }

    var newrow = "<tr id=\"" + lrg_id + "\">";
    // LRG ID
    newrow += "<td sorttable_customkey=\"" + extract_id(lrg_id) + "\"><a href=\"" + lrg_link + lrg_id + ".xml" + "\" target=\"_blank\">" + lrg_id + "</a></td>";
    // Symbol
    newrow += "<td><a href=\"" + hgnc_url + symbol + "\" target=\"_blank\">"+ symbol + "</a></td>";
    // Status
    newrow += "<td>"+ lrg_status + "</td>";
    // Last modification date
    newrow += "<td sorttable_customkey=\"" + modif_date + "\">"+ parse_date(modif_date) + "</td>";
    // External links
    newrow += "<td>"+ ens_link + " - " + ncbi_link + " - " + ucsc_link + "</td>";
    
    newrow += "</tr>";

    $("#search_results > tbody").append(newrow);
  }
}

function get_ens_link (lrg_id, chr, start, end) {

  var new_link = ens_url.replace(/###ID###/, lrg_id);
      new_link = new_link.replace(/###LOC###/, chr+':'+start+'-'+end);

  return "<a href=\"" + new_link + "\" target=\"_blank\">[Ensembl]</a>";
}

function get_ncbi_link (chr, start, end) {

  var new_link = ncbi_url.replace(/###CHR###/, chr);
      new_link = new_link.replace(/###START###/, start);
      new_link = new_link.replace(/###END###/, end);

  return "<a href=\"" + new_link + "\" target=\"_blank\">[NCBI]</a>";;
}

function get_ucsc_link (chr, start, end) {

  var new_link = ucsc_url.replace(/###LOC###/, chr+':'+start+'-'+end);

  return "<a href=\"" + new_link + "\" target=\"_blank\">[UCSC]</a>";;
}


//return an array of objects according to key, value, or key and value matching
function getObjects (obj_parent, obj, key, val) {
  var objects = [];

  if (val == "*" && key == '') {
    objects = obj;
  }
  else {
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(getObjects(obj, obj[i], key, val));    
      } 
      //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
      else if (i == key && obj[i] == val || i == key && val == '') { //
        objects.push(obj);
      } 
      //only add if the object is not already in the array
      else if (obj[i] == val && key == ''){
        if (objects.lastIndexOf(obj) == -1){
          // Data fetched from an array
          if (Object.keys(obj)[0] == 0) {
            objects.push(obj_parent);
          }
          // Data fetched from a key/value
          else {
            objects.push(obj);
          }
        }
      }
    }
  }
  return objects;
}

// Function extract ID 
function extract_id (lrg_id) {

  var match = lrg_id.match(/^LRG_(\d+)$/);
  if (match) {
    return match[1];
  }
  else {
    return lrg_id;
  }
}

// Function to parse the date
function parse_date (date) {

  var date_string = date.toString();

  var match = date_string.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (match) {
    return match[3] + " " + months[match[2]] + " " + match[1];
  }
  else {
    return date_string;
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

function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
    }

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
