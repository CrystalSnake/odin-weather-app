import getWeather from './fetch.js';
let city = 'Ulyanovsk';
const search = document.querySelector('#search');
const searchButton = document.querySelector('#search-btn');

getWeather(city);

searchButton.addEventListener('click', () => {
  city = search.value;
  getWeather(city);
});
