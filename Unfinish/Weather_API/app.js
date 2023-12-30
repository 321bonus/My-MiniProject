const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = 'e0024578618a4e93dc685e09b9957e7d';
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'img/clear.png';
                    break;
                case 'Rain':
                    image.src = 'img/rain.png';
                    break;
                case 'Snow':
                    image.src = 'img/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'img/clouds.png'; // Update with the correct image path
                    break;
                case 'Mist':
                    image.src = 'img/mist.png';
                    break;
                default:
                    image.src = 'img/default.png'; // Specify a default image path or handle differently
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

