const apiKey ="5d0a63d7e7d2d81f69dc83b4b1bc5db0";

const WeatherDataEle = document.querySelector(".weather-data");
const cityNameEle = document.querySelector("#city-name");
const formEle = document.querySelector("form");

const imgIcon = document.querySelector(".icon");

formEle.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(cityNameEle.value);
    const cityValue = cityNameEle.value;
    getWeatherData(cityValue);
})

async function getWeatherData(cityValue){
 try{
    const responce = await fetch (`https:\\api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
    if(!responce.ok){
        throw new Error("Network Responce is Not Ok:)")
    }
        const data= await responce.json();
        console.log(data);
        const temprature = Math.random(data.main.temp);
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        WeatherDataEle.querySelector(".temp").textContent = `${temprature}`
        WeatherDataEle.querySelector(".desc").textContent = `${description}`
        imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`
 }
 catch(err){
    
 }
}