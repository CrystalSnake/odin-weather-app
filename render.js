const locationHead = document.querySelector('.location');

const weatherContainer = document.querySelector('.weather-container');

function weatherRender(weather) {
  weatherContainer.textContent = '';
  locationHead.textContent = `Weather in ${weather.location}, ${weather.country}`;
  const status = document.createElement('div');
  status.classList.add('status');
  const icon = document.createElement('img');
  icon.classList.add('icon');
  icon.src = weather.icon;
  const description = document.createElement('p');
  description.classList.add('weather-text');
  description.textContent = weather.description;
  const temperature = document.createElement('p');
  temperature.classList.add('temperature');
  temperature.textContent = `${weather.temperature}°C`;
  const feelsLike = document.createElement('p');
  feelsLike.classList.add('feels-like');
  feelsLike.textContent = `Feels like ${weather.feelsLike}°C`;
  status.appendChild(description);
  status.appendChild(icon);
  status.appendChild(temperature);
  status.appendChild(feelsLike);

  const detail = document.createElement('div');
  detail.classList.add('detail');
  const humidity = document.createElement('p');
  const pressure = document.createElement('p');
  const windDirection = document.createElement('p');
  const windSpeed = document.createElement('p');
  humidity.textContent = `Humidity: ${weather.humidity}%`;
  pressure.textContent = `Pressure: ${weather.pressure}mb`;
  windDirection.textContent = `Wind direction - ${weather.windDirection}`;
  windSpeed.textContent = `Wind Speed: ${Math.round(
    weather.windSpeed / 3.6
  )}m/s`;
  detail.appendChild(humidity);
  detail.appendChild(pressure);
  detail.appendChild(windDirection);
  detail.appendChild(windSpeed);

  weatherContainer.appendChild(status);
  weatherContainer.appendChild(detail);
}

export default weatherRender;
