const locationHead = document.querySelector('.location');

import getWeather from './fetch.js';
let city = 'Ulyanovsk';
const search = document.querySelector('#search');
const searchButton = document.querySelector('#search-btn');
const weather = document.querySelector('.weather-container');

function weatherRender() {
  getWeather(city);
  locationHead.textContent = `Weather in ${city}`;
}

searchButton.addEventListener('click', () => {
  city = search.value;
  weatherRender();
});

export default weatherRender;
