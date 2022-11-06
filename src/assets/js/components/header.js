const toggleClass = (el, cl) => {
	el.classList.toggle(cl);
};
const removeClass = (el, cl) => {
	el.classList.remove(cl);
};
const headerHandel = document.querySelector('.header__handle');

headerHandel.addEventListener('click', e => {
	const headerMenu = document.querySelector('.mobile-menu');
	const asideElem = document.querySelector('.aside');
	const burger = document.querySelector('.burger-icon');
	e.preventDefault();
	if (e.target.closest('.burger-icon')) {
		toggleClass(headerMenu, 'show');
		toggleClass(burger, 'active');
		removeClass(asideElem, 'show');
	} else if (e.target.closest('#basket')) {
		toggleClass(asideElem, 'show');
		removeClass(headerMenu, 'show');
		removeClass(burger, 'active');
	}
});
