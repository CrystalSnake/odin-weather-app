const locationHead = document.querySelector('.location');

const weatherContainer = document.querySelector('.weather-container');

function weatherRender(weather) {
  locationHead.textContent = `Weather in ${weather.country}, ${weather.location}`;
  console.log(weather);
  const description = document.createElement('p');
  const temperature = document.createElement('p');
  const feelsLike = document.createElement('p');
  const humidity = document.createElement('p');
  const pressure = document.createElement('p');
  const windDirection = document.createElement('p');
  const windSpeed = document.createElement('p');
  description.textContent = weather.description;
  temperature.textContent = `${weather.temperature}°C`;
  feelsLike.textContent = `Feels like ${weather.feelsLike}°C`;
  humidity.textContent = `Humidity ${weather.humidity}%`;
  pressure.textContent = `Pressure ${weather.pressure}mb`;
  windDirection.textContent = `Wind direction ${weather.windDirection}`;
  windSpeed.textContent = `Wind Speed ${Math.round(
    weather.windSpeed / 3.6
  )}m/s`;

  weatherContainer.textContent = '';
  weatherContainer.appendChild(description);
  weatherContainer.appendChild(temperature);
  weatherContainer.appendChild(feelsLike);
  weatherContainer.appendChild(humidity);
  weatherContainer.appendChild(pressure);
  weatherContainer.appendChild(windDirection);
  weatherContainer.appendChild(windSpeed);
}

export default weatherRender;
