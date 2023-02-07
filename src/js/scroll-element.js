import $ from "jquery";

$(function () {
	$('a[href="#request"]').on('click', function () {
		$('html').animate(
			{
				scrollTop: $($(this).attr('href')).offset().top
			},
			{
				duration: 350,
				easing: 'linear'
			}
		)
	})

	if ($(window).innerWidth() > 768) {
		$('#btn-top').on('click', function () {
			$('html').animate(
				{
					scrollTop: 0
				},
				{
					duration: 300,
					easing: 'linear'
				}
			)

			setTimeout(() => {
				$('#btn-top').removeClass('btn-top--visible');
			}, 300)
		})

		$(document).on('scroll', () => {
			if ($(window).scrollTop() > 200) {
				$('#btn-top').addClass('btn-top--visible');
			}
		})
	}
})