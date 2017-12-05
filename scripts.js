/* navigation scroll  */
$(document).ready(function () {
    var mainbottom = $('.greeting').offset().top + $('.greeting').height();

    // on scroll, 
    $(window).on('scroll', function () {

        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());

        if (stop > mainbottom) {
            $('.navigate').addClass('past-main');
        } else {
            $('.navigate').removeClass('past-main');
        }

    });
});

/* drawer */
$(document).ready(function () {
    $('.drawer').drawer();
});

/* fancybox */
$("[data-fancybox]").fancybox({
    image: {
        protect: true
    }
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});
