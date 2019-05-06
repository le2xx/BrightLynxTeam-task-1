const content = () => {
	const form = document.querySelector('.content');
	const inputs = form.querySelectorAll('.content__input');
	const button = form.querySelector('.content__button');

	const sumInVal = () => {
		const result = Array.prototype.slice.call(inputs)
			.reduce((acc, el) => acc + Number(el.value), 0);

		alert('Результат: ' + Math.round(result * 100) / 100 );
	};

	button.addEventListener('click', sumInVal);

};
export { content };
