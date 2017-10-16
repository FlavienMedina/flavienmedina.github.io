$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - (40 + $('nav').height())
            }, 1000);
        }
    });
});
if (window.innerWidth > 768) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 250) {
            $('nav').addClass('nav_scroll');
        } else {
            $('nav').removeClass('nav_scroll');
        }
    });
} else {
    $(window).resize(function() {
        if (window.innerWidth < 768) {
            $(window).scroll(function() {
                if ($(document).scrollTop() > 250) {
                    $('nav').removeClass('nav_scroll');
                }
            });
        } else {
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
if (window.innerWidth < 768) {
    $("#footer>div").append($("#copyright"));
}
$(window).resize(function() {
    if (window.innerWidth < 768) {
        $("#footer>div").append($("#copyright"));
    }
    else if (window.innerWidth > 768) {
        $(".icons").before($("#copyright"));
    }
});
