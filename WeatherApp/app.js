const apiKey = "...";
const url = "https://api.weatherstack.com/current?&query=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const response = await fetch(url + city + `&access_key=${apiKey}`);

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temperature) + "°C";
    document.querySelector(".hummidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_speed + "km/h";
    weatherIcon.src = data.current.weather_icons[0];
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".invaled").style.display = "none";
}




searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
})
