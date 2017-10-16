$(document).ready(function() {
  $("#nav").before('<div id="menu">☰</div>');
  $("#menu").click(function(){
  	$("#nav").toggleClass('hide_menu');
  });
});
