$(document).ready(function() {
  $("#height").val($(".well").height());
  $("#width").val($(".well").width());

  $("#submit").click(function(e) {
    if(!$("#linkedForm").valid()){
      e.preventDefault();
    } 
  }); 
});
