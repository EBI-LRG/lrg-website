// Main JS library for the LRG website

function show_hide(id, label) {
  var div_id = "#"+id;
  var button_id = "#"+id+"_button";
  
  if($(button_id).hasClass("icon-collapse-closed")) {
    $(button_id).removeClass("icon-collapse-closed").addClass("icon-collapse-open");
    $(div_id).show(150);
    if (label) {
      $(button_id).html('Hide '+label);
    }
  }
  else {
    $(button_id).removeClass("icon-collapse-open").addClass("icon-collapse-closed");
    $(div_id).hide(150);
    if (label) {
      $(button_id).html('Show '+label);
    }
  }
}

function show_hide_info(id) {
  var info_id = "#"+id;
  var button_id = "#"+id+"_button";
  
  if($(button_id).hasClass("icon-plus")) {
    $(button_id).removeClass("icon-plus").addClass("icon-minus");
    $(info_id).show(150);
  }
  else {
    $(button_id).removeClass("icon-minus").addClass("icon-plus");
    $(info_id).hide(150);
  }
}


function show_hide_all(item_class, content_class, button_id, button_text) {
  var item = "." + item_class;
  var content = "." + content_class;
  var button_id = "#"+button_id;

  if (!button_text) {
    button_text = "FAQs"
  }

  if ($(button_id).hasClass("is-collapsed")) {
    $(item).each(function( index, entry ) {
      $(entry).removeClass("icon-collapse-closed").addClass("icon-collapse-open");
    });
    $(content).each(function( index, entry ) {
      $(entry).show(150);
    });
    $(button_id).removeClass("is-collapsed").addClass("is-expanded");
    $(button_id).html("Collapse all " + button_text);
  }
  else {
    $(item).each(function( index, entry ) {
      $(entry).removeClass("icon-collapse-open").addClass("icon-collapse-closed");
    });
    $(content).each(function( index, entry ) {
      $(entry).hide(150);
    });
    $(button_id).removeClass("is-expanded").addClass("is-collapsed");
    $(button_id).html("Expand all " + button_text);
  }
}

function showhiderow(class_name,step_id) {
  $("."+class_name).each(function( index, row ) {    
    if (step_id=='all' || $(row).hasClass(class_name+'_'+step_id)) {
      $(row).show();
    }
    else {
      $(row).hide();
    }
  });
}

function offsetAnchor() {
  if(location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}