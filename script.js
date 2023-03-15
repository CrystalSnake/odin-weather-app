let city = 'Ulyanovsk';
const APIkey = '89b7db360fddc03e875ecd0daeda6f46';

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`,
      { mode: 'cors' }
    );
    response
      .json()
      .then(function (response) {
        //console.log(response);
        const weather = {};
        weather.description = response.weather[0].description;
        weather.temperature = response.main.temp;
        weather.feelsLike = response.main.feels_like;
        weather.humidity = response.main.humidity;
        weather.pressure = response.main.pressure;
        weather.windSpeed = response.wind.speed;
        weather.windDirection = response.wind.deg;
        return weather;
      })
      .then(function (response) {
        console.log(response);
      });
  } catch (error) {
    console.log(`Oops`);
  }
}

getWeather();
