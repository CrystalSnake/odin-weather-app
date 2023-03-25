const APIkey = '2733e033e6504841bf7150509232503';
import weatherRender from './render.js';

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${city}`,
      { mode: 'cors' }
    );
    response
      .json()
      .then(function (response) {
        console.log(response);
        const weather = {};
        weather.location = response.location.name;
        weather.country = response.location.country;
        weather.description = response.current.condition.text;
        weather.icon = response.current.condition.icon;
        weather.temperature = response.current.temp_c;
        weather.feelsLike = response.current.feelslike_c;
        weather.humidity = response.current.humidity;
        weather.pressure = response.current.pressure_mb;
        weather.windSpeed = response.current.wind_kph;
        weather.windDirection = response.current.wind_dir;

        return weather;
      })
      .then(function (response) {
        weatherRender(response);
      });
  } catch (error) {
    console.log(`Oops`);
  }
}

export default getWeather;
