//Header_menu
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black', 2000);
    } else {
        $('nav').removeClass('black', 2000);
    }
});

// slick slider - section Reviews
$(function () {
    $('.multiple-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: "0",
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        nextArrow: '<div class="next-pic"><img src="./images/parts/arrow_right.png" alt="Next Picture"></div>',
        prevArrow: '<div class="prev-pic"><img src="./images/parts/arrow_left.png" alt="Previous Picture"></div>',
        responsive: [{
                breakpoint: 849,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 499,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 339,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '10px',
                }
            }
        ]
    });
});