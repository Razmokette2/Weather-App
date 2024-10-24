const axios = require('axios');

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '3f4a6cdcdfb1690d82a2232c746c6286'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        const weatherInfo = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
        document.getElementById('weatherInfo').innerHTML = weatherInfo;
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `<p>City not found. Try again!</p>`;
    }
}
