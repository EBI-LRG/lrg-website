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