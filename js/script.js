$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            }
        }

    });
});

/* progress bar*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
    });

});

/* services-tabs */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
/*portfolio*/
$(window).on('load', function () {
    $("#isotope-container").isotope({});

    $("#isotope-filters").on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: filterValue
        });
        $("#isotope-filters").find('active').removeClass('active');
        $(this).addClass('active');
    });

});
/* magnific popup*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*testimonials*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});

/*stats */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*clients*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }


        }

    });
});
/*navigation bar*/
$(function () {
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");
            $("#back-to-top").fadeOut();
        }
    }
});
/*smooth-scrolling*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64

        }, 1250, "easeInOutExpo");
    });
});
/*mobile menu*/
$(function () {
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });
    $("#mobile-nav-close-btn,#mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});
/*animations*/
$(function () {
    new WOW().init();
});
$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});
