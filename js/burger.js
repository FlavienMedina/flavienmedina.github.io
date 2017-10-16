$(document).ready(function() {
  $("#nav").addClass("js");
  $("#nav").addClass("js").before('<div id="menu">☰</div>');
  $("#menu").click(function(){
  	$("#nav").toggleClass('hide_menu');
  });
});
