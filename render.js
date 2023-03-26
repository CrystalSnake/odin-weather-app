const locationHead = document.querySelector('.location');

const weatherContainer = document.querySelector('.weather-container');

function weatherRender(data) {
  weatherContainer.textContent = '';
  locationHead.textContent = `Weather in ${data.location}, ${data.country}`;
  const status = document.createElement('div');
  status.classList.add('status');
  const icon = document.createElement('img');
  icon.classList.add('icon');
  icon.src = data.icon;
  const description = document.createElement('p');
  description.classList.add('data-text');
  description.textContent = data.description;
  const temperature = document.createElement('p');
  temperature.classList.add('temperature');
  temperature.textContent = `${data.temperature}°C`;
  const feelsLike = document.createElement('p');
  feelsLike.classList.add('feels-like');
  feelsLike.textContent = `Feels like ${data.feelsLike}°C`;
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
  humidity.textContent = `Humidity: ${data.humidity}%`;
  pressure.textContent = `Pressure: ${data.pressure}mb`;
  windDirection.textContent = `Wind direction - ${data.windDirection}`;
  windSpeed.textContent = `Wind Speed: ${Math.round(data.windSpeed / 3.6)}m/s`;
  detail.appendChild(humidity);
  detail.appendChild(pressure);
  detail.appendChild(windDirection);
  detail.appendChild(windSpeed);

  weatherContainer.appendChild(status);
  weatherContainer.appendChild(detail);
}

export default weatherRender;
