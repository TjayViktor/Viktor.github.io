$(document).ready(function(){
	$('.carousel__inner').slick({
		infinite: true,
		speed: 1200,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
					arrows: false
				}
			}
		]
	  });

	  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	  });

	  // Modal

	  $('[data-modal=consultation]').on('click', function(){
			$('.overlay, #consultation').fadeIn('slow');
	  });
	  $('.modal__close').on('click', function(){
			$('.overlay, #consultation, #photo, #thanks').fadeOut('slow');
	  });
	  $('.button_mini').on('click', function(){
			$('.overlay, #photo').fadeIn('slow');
	  });

	  
	  function validateForms(form){
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: "Пожалуйста, введите свое имя",
				phone: "Пожалуйста, введите свой телефон",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен адрес почты",
				},
			}
		});
	  };

	  validateForms('#consultation-form');
	  validateForms('#consultation form');

	  $('input[name=phone]').mask("+7 (999) 999-99-99");

	  $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
	  });


	  // smooth scroll and page up

	  $(window).scroll(function(){
			if ($(this).scrollTop() > 1200) {
				$('.pageup').fadeIn();
			} else {
				$('.pageup').fadeOut();
			}
	  });

	  $("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	  });

	  new WOW().init();
  });