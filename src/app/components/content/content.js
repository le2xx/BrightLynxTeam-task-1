const content = () => {
	const form = document.getElementById('form');
	const inputs = form.getElementsByTagName('input');
	const buttons = form.getElementsByTagName('button');

	const sumInVal = () => {
		const result = Array.prototype.slice.call(inputs)
			.reduce((acc, el) => acc + Number(el.value), 0);

		alert('Результат: ' + Math.round(result * 100) / 100 );
	};

	Array.prototype.forEach.call(buttons, (node) => {
		node.addEventListener('click', sumInVal);
	});
};
export { content };
