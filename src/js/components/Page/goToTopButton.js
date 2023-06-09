import { throttle } from '../../functions.js'

const backToTopButton = document.querySelector('#back-to-top-btn')

if (backToTopButton) {
	document.addEventListener('scroll', throttle(scrollFunction, 64))

	function scrollFunction() {
		if (window.pageYOffset > 300) {
			if (!backToTopButton.classList.contains('btnEntrance')) {
				backToTopButton.classList.remove('btnExit')
				backToTopButton.classList.add('btnEntrance')
				backToTopButton.style.display = 'inline-flex'
			}
		} else {
			if (backToTopButton.classList.contains('btnEntrance')) {
				backToTopButton.classList.remove('btnEntrance')
				backToTopButton.classList.add('btnExit')
				setTimeout(function () {
					backToTopButton.style.display = 'none'
				}, 250)
			}
		}
	}

	backToTopButton.addEventListener('click', e => {
		e.preventDefault()
		window.scrollTo(0, 0)
		// smoothScrollBackToTop()
	})

	// Задержка перед скроллом на верх

	// function smoothScrollBackToTop() {
	// 	const targetPosition = 0
	// 	const startPosition = window.pageYOffset
	// 	const distance = targetPosition - startPosition
	// 	const duration = 750
	// 	let start = null

	// 	window.requestAnimationFrame(step)

	// 	function step(timestamp) {
	// 		if (!start) start = timestamp
	// 		const progress = timestamp - start
	// 		window.scrollTo(
	// 			0,
	// 			easeInOutCubic(progress, startPosition, distance, duration),
	// 		)
	// 		if (progress < duration) window.requestAnimationFrame(step)
	// 	}
	// }

	// function easeInOutCubic(t, b, c, d) {
	// 	t /= d / 2
	// 	if (t < 1) return (c / 2) * t * t * t + b
	// 	t -= 2
	// 	return (c / 2) * (t * t * t + 2) + b
	// }
}
