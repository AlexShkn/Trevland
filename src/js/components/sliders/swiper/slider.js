const offersSlider = new Swiper('.offers-slider', {
	pagination: {
		el: '.offers__pagination',
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 5,
	},
	navigation: {
		nextEl: '.offers-slider-next',
		prevEl: '.offers-slider-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1.3,
			spaceBetween: 20,
		},
		476: {
			slidesPerView: 2.3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.3,
			spaceBetween: 65,
		},
		992: {
			slidesPerView: 4.2,
			spaceBetween: 30,
		},
		1150: {
			slidesPerView: 4.7,
			spaceBetween: 40,
		},
		1350: {
			slidesPerView: 4.7,
			spaceBetween: 73,
		},

		1500: {
			slidesPerView: 5.7,
			spaceBetween: 100,
		},
	},
})
