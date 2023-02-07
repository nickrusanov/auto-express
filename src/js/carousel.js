import $ from "jquery";
import "slick-carousel";

$(function () {
	$('.carousel__list').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 650,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: false,
				}
			}
		]
	});
})

