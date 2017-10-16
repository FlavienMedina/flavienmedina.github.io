$(function(){
var partImage = new Image();
partImage.src = 'img/ubuntu-bg2.jpg';
partImage.onload = function() {
  if ($(document).scrollTop() === 0) {
  setTimeout(function () {
      $('.part-1').addClass('show_part');
  }, 100);
  setTimeout(function () {
      $('.part-2').addClass('show_part');
  }, 200);
  setTimeout(function () {
      $('.part-3').addClass('show_part');
  }, 300);
  setTimeout(function () {
      $('.part-4').addClass('show_part');
  }, 400);
  setTimeout(function () {
      $('.part-5').addClass('show_part');
  }, 500);
  setTimeout(function () {
      $('.part-6').addClass('show_part');
  }, 600);
  setTimeout(function () {
      $('.part-7').addClass('show_part');
  }, 700);
  setTimeout(function () {
      $('.part-8').addClass('show_part');
  }, 800);
  setTimeout(function () {
      $('.part-9').addClass('show_part');
  }, 900);
  setTimeout(function () {
      $('.part-10').addClass('show_part');
  }, 1000);
  setTimeout(function () {
      $('.part-11').addClass('show_part');
  }, 1100);
  setTimeout(function () {
      $('.part-12').addClass('show_part');
  }, 1200);
  setTimeout(function () {
    $("nav").addClass('visible_nav').removeClass('hide_nav');
  }, 1500);
  setTimeout(function () {
    $(".text-center").addClass('rotate_text-center');
  }, 1700);
  setTimeout(function () {
    $("body").removeClass('overflow_hidden');
    $( "#mid" ).scroll();
  }, 1800);
}
else{
  $('.part-1').addClass('show_part');
  $('.part-2').addClass('show_part');
  $('.part-3').addClass('show_part');
  $('.part-4').addClass('show_part');
  $('.part-5').addClass('show_part');
  $('.part-6').addClass('show_part');
  $('.part-7').addClass('show_part');
  $('.part-8').addClass('show_part');
  $('.part-9').addClass('show_part');
  $('.part-10').addClass('show_part');
  $('.part-11').addClass('show_part');
  $('.part-12').addClass('show_part');
  $("nav").addClass('visible_nav').removeClass('hide_nav');
  $(".text-center").addClass('rotate_text-center');
  $("body").removeClass('overflow_hidden');
}
};
});
