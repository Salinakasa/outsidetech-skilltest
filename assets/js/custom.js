$(document).ready(function() {
    // Hamburger to cross animation
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
    });

    // Beneficiaries homepage slick slider
    $('.beneficiaries__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Gallery homepage slick slider
    $('.gallery__slider').slick({
        dots: false,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false
            }
        },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true
            }
        }
        ]
    });
});