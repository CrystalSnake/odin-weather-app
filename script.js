import getWeather from './fetch.js';
let city;
const search = document.querySelector('#search');
const searchButton = document.querySelector('#search-btn');

searchButton.addEventListener('click', () => {
  city = search.value;
  getWeather(city);
});
