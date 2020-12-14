$(function(){

    /* fixed header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollpos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle =  $("#navToggle");

    checkScroll(scrollpos, introH);

    $(window).on("scroll resize", function(){
        introH = intro.innerHeight();
        scrollpos=$(this).scrollTop();
        checkScroll(scrollpos, introH);
    });

    function checkScroll(scrollpos, introH) {
         if(scrollpos>introH) {
                header.addClass("fixed");
        } else {
                header.removeClass("fixed");
        }
    }

    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");


        $("html, body").animate({
            scrollTop: elementOffset - 65
        }, 800);
    });


    /* navToggle */


    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
        });

    /* reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots:true
    });

});
