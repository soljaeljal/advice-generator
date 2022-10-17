'use strict';

let url = 'https://api.adviceslip.com/advice';
let adviceNumber = document.querySelector('.advice-number');
let quote = document.querySelector('.quote');
let btn = document.querySelector('.generate-btn');

let newQuote = () => {
	fetch(url)
		.then((resp) => resp.json())
		.then((data) => {
			adviceNumber.innerHTML = `Advice #${data.slip.id}`;
			quote.innerHTML = `"${data.slip.advice}"`;
		});
};

window.addEventListener('load', newQuote);
btn.addEventListener('click', newQuote);
