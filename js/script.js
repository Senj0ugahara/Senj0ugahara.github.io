/* clients-bases */
(function () {
	$('.switch-btn').on('click', function() {
		$(this).toggleClass('switch-btn_on');
	})
})();

/* numbers__company */
$('.numbers-company__btn').on('click', function() {
	$('.numbers-company__btn').removeClass('numbers-company__btn_active');
	$(this).toggleClass('numbers-company__btn_active');
		if($('.numbers-company__btn-std').hasClass('numbers-company__btn_active')) {
			$('.numbers-company__form__stdr').show(200)
	}  else {
		$('.numbers-company__form__stdr').hide(200)
	}
});

$('.numbers-company__form__box__sub').fadeOut();

$('.numbers-company__form__item__img').on('click', function() {
	if ($(this).hasClass('numbers-company__form__item__img_open')) {
		$(this).removeClass('numbers-company__form__item__img_open', 1000);
		$(this).parent().find('.numbers-company__form__box__sub').fadeOut(200);
	} else {
		$(this).addClass('numbers-company__form__item__img_open', 1000);
		$(this).parent().find('.numbers-company__form__box__sub').fadeIn(200);
	}
});

$('.numbers-company__switch-btn').on('click', function() {
	$(this).toggleClass('numbers-company__switch-btn_on');
});