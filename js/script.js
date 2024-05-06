'use strict';

// получаем элементы
const yearElem = document.querySelector('#year');
const daysElem = document.querySelector('#days');
const hoursElem = document.querySelector('#hours');
const minutesElem = document.querySelector('#minutes');
const secondsElem = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// получаем текущий год
const currentYear = new Date().getFullYear();
// получаем следующий год
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// устанавливаем год следующего года
yearElem.textContent = currentYear + 1;

function updateCounter() {
	// получаем текущую дату
	const currentTime = new Date();
	// получаем разницу между текущим и следующим годом
	const different = nextYear - currentTime;

	// переводим в дни
	const days = Math.floor(different / 1000 / 60 / 60 / 24);
	// переводим в часы
	const hours = Math.floor(different / 1000 / 60 / 60) % 24;
	// переводим в минуты
	const minutes = Math.floor(different / 1000 / 60) % 60;
	// переводим в секунды
	const seconds = Math.floor(different / 1000) % 60;

	// устанавливаем значения
	daysElem.textContent = days <= 9 ? '0' + days : days;
	hoursElem.textContent = hours <= 9 ? '0' + hours : hours;
	minutesElem.textContent = minutes <= 9 ? '0' + minutes : minutes;
	secondsElem.textContent = seconds <= 9 ? '0' + seconds : seconds;
}
updateCounter();

// устанавливаем интервал обновления
setInterval(updateCounter, 1000);

// скрываем прелоадер
setTimeout(() => {
	preloader.remove();
	countdown.style.display = 'flex';
}, 1000);