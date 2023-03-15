let city = 'Ulyanovsk';
const APIkey = '89b7db360fddc03e875ecd0daeda6f46';

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`,
      { mode: 'cors' }
    );
    response.json().then(function (response) {
      console.log(response);
    });
  } catch (error) {
    console.log(`Oops`);
  }
}

getWeather();
