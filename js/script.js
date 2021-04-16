$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        centerMode: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  });