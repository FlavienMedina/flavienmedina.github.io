$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            console.log(target.offset().top);
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - (40 + $('nav').height())
            }, 1000);
        }
    });
});
console.log('base' + window.innerWidth);

if (window.innerWidth > 768) {
  $(window).scroll(function() {
      if ($(document).scrollTop() > 250) {
          $('nav').addClass('nav_scroll');
      } else {
          $('nav').removeClass('nav_scroll');
      }
  });
<<<<<<< HEAD:portfolio.old/js/nav_scroll.js
});
$(window).resize(function(){
	if(window.innerWidth > 768) {
$(window).scroll(function() {
  if ($(document).scrollTop() > 250) {
    $('nav').addClass('nav_scroll');
  } else {
    $('nav').removeClass('nav_scroll');
  }
}
});
});
=======
}
  else {
    $(window).resize(function() {
        if (window.innerWidth < 768) {
          $(window).scroll(function() {
              if ($(document).scrollTop() > 250) {
                  $('nav').removeClass('nav_scroll');
              }
          });
        }
        else {
            $(window).scroll(function() {
                if ($(document).scrollTop() > 250) {
                    $('nav').addClass('nav_scroll');
                } else {
                    $('nav').removeClass('nav_scroll');
                }
            });
        }
    });
}
>>>>>>> f2f61f55bea61a6e0e062d5f5b92ef8d9409e8a5:js/nav_scroll.js
