/* clients-bases */
(function () {
	$('.switch-btn').on('click', function() {
		$(this).toggleClass('switch-btn_on');
	})
})();

/* numbers__company */
(function () {
	$('.numbers-company__form__item__img').on('click', function() {
		$(this).toggleClass('numbers-company__form__item__img_open');
    $('.numbers-company__form__box__sub').ed(1).toggleClass('numbers-company__form__box__sub_open') ;
	})
})();