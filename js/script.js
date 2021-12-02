/* clients-bases */
(function () {
	$('.switch-btn').on('click', function() {
		$(this).toggleClass('switch-btn_on');
	})
})();

/* numbers__company */
$('.numbers-company__form__box__sub').fadeOut();

$('.numbers-company__form__item__img').on('click', function() {
	$(this).toggleClass('numbers-company__form__item__img_open');
	if ($(this).hasClass('numbers-company__form__item__img_active')) {
		$(this).removeClass('numbers-company__form__item__img_active');
		$(this).parent().find('.numbers-company__form__box__sub').fadeOut();
	} else {
		$(this).addClass('numbers-company__form__item__img_active');
		$(this).parent().find('.numbers-company__form__box__sub').fadeIn();
	}
});
