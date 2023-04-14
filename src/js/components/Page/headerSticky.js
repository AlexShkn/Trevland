document.addEventListener('DOMContentLoaded', () => {
	const onScrollHeader = () => {
		const header = document.querySelector('.header')

		let prevScroll = window.pageYOffset
		let currentScroll

		window.addEventListener('scroll', () => {
			currentScroll = window.pageYOffset

			const headerHidden = () => header.classList.contains('header_hidden')

			if (currentScroll > prevScroll && !headerHidden()) {
				header.classList.add('header_hidden')
			}
			if (currentScroll < prevScroll && headerHidden()) {
				header.classList.remove('header_hidden')
				header.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
				header.style.padding = 10 + 'px' + ' ' + 0
				header.style.top = 0
			}
			if (currentScroll < 30) {
				header.style.backgroundColor = 'transparent'
				header.style.top = 35 + 'px'
				header.style.padding = 0
			}

			prevScroll = currentScroll
		})
	}

	onScrollHeader()
})

// let lastScroll = 0
// const defaultOffset = 200
// const header = document.querySelector('.header')

// const scrollPosition = () =>
// 	window.pageYOffset || document.documentElement.scrollTop
// const containHide = () => header.classList.contains('header_hidden')

// window.addEventListener('scroll', () => {
// 	if (
// 		scrollPosition() > lastScroll &&
// 		!containHide() &&
// 		scrollPosition() > defaultOffset
// 	) {
// 		//scroll down
// 		header.classList.add('header_hidden')
// 	} else if (scrollPosition() < lastScroll && containHide()) {
// 		//scroll up
// 		header.classList.remove('header_hidden')
// 	}

// 	lastScroll = scrollPosition()
// })
