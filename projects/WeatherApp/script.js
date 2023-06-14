const apiKey = "f1199acb8eb64e94967b08ca3fe7018d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherImage = document.querySelector(".weather-image");


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";


        if (data.weather[0].main == "Clouds") {
            weatherImage.scr = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherImage.src = "images/clear.png";

        } else if (data.weather[0].main == "Rain") {
            weatherImage.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherImage.src = "images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherImage.src = "images/snow.png";
        }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
checkWeather();