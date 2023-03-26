const APIkey = '2733e033e6504841bf7150509232503';
import weatherRender from './render.js';

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${city}`,
      { mode: 'cors' }
    );
    if (!response.ok) throw new Error(`City ${city} not found`);
    response
      .json()
      .then(function (response) {
        const data = {};
        data.location = response.location.name;
        data.country = response.location.country;
        data.description = response.current.condition.text;
        data.icon = response.current.condition.icon;
        data.temperature = response.current.temp_c;
        data.feelsLike = response.current.feelslike_c;
        data.humidity = response.current.humidity;
        data.pressure = response.current.pressure_mb;
        data.windSpeed = response.current.wind_kph;
        data.windDirection = response.current.wind_dir;
        return data;
      })
      .then(function (response) {
        weatherRender(response);
      });
  } catch (error) {
    alert(`Oops ${error}`);
  }
}

export default getWeather;
