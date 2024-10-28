document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "5d0a63d7e7d2d81f69dc83b4b1bc5db0";

    const WeatherDataEle = document.querySelector(".weather-data");
    const cityNameEle = document.querySelector("#city-name");
    const formEle = document.querySelector("form");

    const imgIcon = document.querySelector(".icon");

    formEle.addEventListener("submit", (e) => {
        e.preventDefault();
        const cityValue = cityNameEle.value;
        getWeatherData(cityValue);
    });

    async function getWeatherData(cityValue) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error("Network response is not OK");
            }
            const data = await response.json();
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            // details using array
            const details = [
                `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
                `Humidity: ${data.main.humidity}%`,
                `Wind Speed: ${data.wind.speed} m/s`
            ];

            WeatherDataEle.querySelector(".temp").textContent = `${temperature}°C`;
            WeatherDataEle.querySelector(".desc").textContent = `${description}`;
            imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;

            // Weather data Element
            WeatherDataEle.querySelector(".details").innerHTML = details.map((detail) => {
                return `<div>${detail}</div>`;
            }).join('');

        } catch (err) {
            console.log("Error fetching weather data: ", err);
        }
    }
});
