// Links
var lrg_ftp = "http://ftp.ebi.ac.uk/pub/databases/lrgex/";
var ens_url = "http://www.ensembl.org/Homo_sapiens/Location/View?r=###LOC###&contigviewbottom=url:ftp://ftp.ebi.ac.uk/pub/databases/lrgex/.ensembl_internal/###ID###_###ASSEMBLY###.gff=labels";
var ncbi_url = "http://www.ncbi.nlm.nih.gov/mapview/maps.cgi?taxid=9606&CHR=###CHR###&BEG=###START###&END=###END###";
var ucsc_url = "http://genome.ucsc.edu/cgi-bin/hgTracks?clade=mammal&org=Human&position=chr###LOC###";
var hgnc_url = "http://www.genenames.org/cgi-bin/gene_symbol_report?match=";

var lrg_json_file = "/json_index/lrg_index.json";
//var lrg_json_file = "http://ftp.ebi.ac.uk/pub/databases/lrgex/.lrg_index/lrg_index.json";

var external_link_class = "class=\"icon-external-link\"";

var ref_assembly = "GRCh38";
var lrg_regexp = /lrg_\d+/i;
var all_lrgs = "LRG_*";
var lrg_list = [];

var table_id = "#search_results";

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
      for (var j in item.synonym) {
        data_list[item.synonym[j]] = 1;
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
  for (i in result_keys) {
    var lrg_id     = result_keys[i];
    var symbol     = results[lrg_id].symbol;
    var lrg_status = results[lrg_id].status;
    var modif_date = results[lrg_id].last_modification_date;
    var chr        = results[lrg_id].chr_name;
    var start      = results[lrg_id].chr_start;
    var end        = results[lrg_id].chr_end;

    var ens_link  = get_ens_link(lrg_id, chr, start, end, ref_assembly);
    var ncbi_link = get_ncbi_link(chr, start, end);
    var ucsc_link = get_ucsc_link(chr, start, end);

    var lrg_link = lrg_ftp;
    if (lrg_status != "public") {
      lrg_link += lrg_status + "/";
    }

    // HTML code
    var newrow = $('<tr/>');
        newrow.attr('id', lrg_id);
    // LRG ID
    var lrg_id_cell = newCell('<a href="' + lrg_link + lrg_id + '.xml" target="_blank">' + lrg_id + '</a>');
        lrg_id_cell.attr('sorttable_customkey', extract_id(lrg_id));
        lrg_id_cell.addClass('left-col');
    newrow.append(lrg_id_cell);
    // Symbol
    newrow.append(newCell('<a '+external_link_class+' href="' + hgnc_url + symbol + '" target="_blank">'+ symbol + '</a>'));
    // Status
    newrow.append(newCell(lrg_status));
    // Last modification date
    var date_cell = newCell(parse_date(modif_date));
        date_cell.attr('sorttable_customkey',modif_date);
    newrow.append(date_cell);
    // External links
    newrow.append(newCell(ens_link + " - " + ncbi_link + " - " + ucsc_link));

    $(table_id + " > tbody").append(newrow);
  }
}

function newCell(content) {
  return $("<td></td>").html(content);
}

function get_ens_link (lrg_id, chr, start, end, assembly) {

  var new_link = ens_url.replace(/###ID###/, lrg_id);
      new_link = new_link.replace(/###ASSEMBLY###/, assembly);
      new_link = new_link.replace(/###LOC###/, chr+':'+start+'-'+end);

  return "<a "+external_link_class+" href=\"" + new_link + "\" target=\"_blank\">Ensembl</a>";
}

function get_ncbi_link (chr, start, end) {

  var new_link = ncbi_url.replace(/###CHR###/, chr);
      new_link = new_link.replace(/###START###/, start);
      new_link = new_link.replace(/###END###/, end);

  return "<a "+external_link_class+" href=\"" + new_link + "\" target=\"_blank\">NCBI</a>";;
}

function get_ucsc_link (chr, start, end) {

  var new_link = ucsc_url.replace(/###LOC###/, chr+':'+start+'-'+end);

  return "<a "+external_link_class+" href=\"" + new_link + "\" target=\"_blank\">UCSC</a>";;
}


//return an array of objects according to key, value, or key and value matching
function getObjects (obj_parent, obj, key, val, objects) {

  // Search with regex
  var regex;
  // Specific regex for the sequence identifiers, with a version, e.g. NM_000088.3
  if (val.match(/^(NM_|NG_|ENST|ENSG)\d+/)) {
    regex = new RegExp("^"+val+"\.");
  }
  // Specific regex for the character "*"
  else if (!val.match(/^[a-z0-9]+/i)) {
    regex = new RegExp("^\\"+val+"$"); 
  }
  // Default regex
  else {
    regex = new RegExp("^"+val+"$"); 
  }

  // Data search
  if (!objects) {
    objects = {};
  }
  if (val == "*" && key == '') {
    for (var i in obj) {
      objects[obj[i].id] = obj[i];
    }
  }
  else {
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

  var match = date_string.match(/^(\d{4})-(\d{2})-(\d{2})$/);
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

function wait_for_results() {
  $(table_id + " > tbody").empty();
  $(table_id + " > tbody").append('<tr><td colspan="5"><div class="wait"></div><div class="loader"></div></td></tr>');
}
