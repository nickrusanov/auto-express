const appear = (entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				entry.target.classList.remove('appear');
			}, 150);

			observer.unobserve(entry.target);
		}
	})
}

const tabs = document.querySelectorAll('.services__tabs-item');
const observer = new IntersectionObserver(appear,
	{
		root: document.querySelector('#scrollArea'),
		rootMargin: '0px',
		threshold: 0.25
	}
)

tabs.forEach((tab) => {
	observer.observe(tab);
})
