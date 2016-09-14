// Main JS library for the LRG website

function show_hide(id) {
  var div_id = "#"+id;
  var button_id = "#"+id+"_button";
  
  if($(button_id).hasClass("icon-collapse-closed")) {
    $(button_id).removeClass("icon-collapse-closed").addClass("icon-collapse-open");
    $(div_id).show(150);
  }
  else {
    $(button_id).removeClass("icon-collapse-open").addClass("icon-collapse-closed");
    $(div_id).hide(150);
  }
}

function show_hide_all(item_class, content_class, button_id) {
  var item = "." + item_class;
  var content = "." + content_class;
  var button_id = "#"+button_id;

  if ($(button_id).hasClass("is-collapsed")) {
    $(item).each(function( index, entry ) {
      $(entry).removeClass("icon-collapse-closed").addClass("icon-collapse-open");
    });
    $(content).each(function( index, entry ) {
      $(entry).show(150);
    });
    $(button_id).removeClass("is-collapsed").addClass("is-expanded");
    $(button_id).html("Collapse all FAQs");
  }
  else {
    $(item).each(function( index, entry ) {
      $(entry).removeClass("icon-collapse-open").addClass("icon-collapse-closed");
    });
    $(content).each(function( index, entry ) {
      $(entry).hide(150);
    });
    $(button_id).removeClass("is-expanded").addClass("is-collapsed");
    $(button_id).html("Expand all FAQs");
  }
}