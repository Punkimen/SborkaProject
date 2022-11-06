const products = [
	{
		id: 1,
		name: 'jacket',
		img: './assets/images/jacket.png',
		descr: 'Amet minim mollit non deserunt ullamco est sit',
		price: 525,
		totalPrice: 525,
		count: 1,
	},
	{
		id: 2,
		name: 'cross',
		img: './assets/images/cross.png',
		descr: 'Amet minim mollit non',
		price: 525,
		totalPrice: 525,
		count: 1,
	},
];
let devProd = [...products];
const basketCatalog = document.querySelector('.basket__catalog');
const cartCount = document.querySelector('#cart-count');
const setCount = () => {
	let count = 0;
	devProd.forEach(el => (count += el.count));
	cartCount.innerText = count;
};
const renderProducts = arr => {
	basketCatalog.innerHTML = ``;
	if (arr.length > 0) {
		arr.forEach(({ name, img, descr, totalPrice, id, count }) => {
			const card = document.createElement('div');
			card.textContent = 'Side Effect';
			card.className = 'basket-card';
			card.setAttribute('data-id', id);
			card.innerHTML = `
		<button class="btn-reset basket-card__delete">
				<svg width="19" height="18" viewBox="0 0 19 18">
<use xlink:href="#icon-close"></use>
</svg>

		</button>
		<div class="basket-card__photo">
			<img src="${img}" alt="${name}">
		</div>
		<div class="basket-card__content">
			<div class="basket-card__text">${descr}
</div>
			<div class="basket-card__footer">
				<div class="basket-card__handle">
					<button class="basket-card__btn basket-card__btn_minus btn-reset">
							<svg width="21" height="20" viewBox="0 0 21 20">
<use xlink:href="#icon-minus"></use>
</svg>

					</button>
					<div class="basket-card__count">${count}</div>
					<button class="basket-card__btn basket-card__btn_plus btn-reset">
							<svg width="21" height="20" viewBox="0 0 21 20">
<use xlink:href="#icon-plus"></use>
</svg>

					</button>
				</div>
				<div class="basket-card__price">$ ${totalPrice}</div>
			</div>
		</div>
		`;
			basketCatalog.prepend(card);
		});
	} else {
		basketCatalog.innerHTML = 'Корзина пуста';
	}
	setCount();
};
renderProducts(devProd);
const deleteProduct = id => {
	const filteredArr = devProd.filter(product => product.id != id);
	devProd = filteredArr;
	renderProducts(devProd);
};
const incrimentPrice = id => {
	const filteredArr = devProd.filter(product => product.id == id)[0];
	filteredArr.totalPrice += filteredArr.price;
	filteredArr.count += 1;
	renderProducts(devProd);
};
const decrimentPrice = id => {
	const filteredArr = devProd.filter(product => product.id == id)[0];
	if (filteredArr.count > 1) {
		filteredArr.totalPrice -= filteredArr.price;
		filteredArr.count -= 1;
	} else {
		deleteProduct(id);
	}
	renderProducts(devProd);
};
basketCatalog.addEventListener('click', e => {
	e.preventDefault();
	if (e.target.closest('.basket-card__delete')) {
		deleteProduct(e.target.closest('.basket-card').getAttribute('data-id'));
	} else if (e.target.closest('.basket-card__btn_plus')) {
		incrimentPrice(e.target.closest('.basket-card').getAttribute('data-id'));
	} else if (e.target.closest('.basket-card__btn_minus')) {
		decrimentPrice(e.target.closest('.basket-card').getAttribute('data-id'));
	} else {
		return false;
	}
	return false;
});
