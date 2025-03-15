const ApiKey = "eb26233fc730169b8d2dc20d8ce721a6";
const weatherIcon = document.querySelector(".weather_icon");
const body = document.querySelector(".body");

function search(){
    let cityName = "New delhi";
    let cityName_tag = document.getElementById('cityname');
    if(cityName_tag.value.length > 0)
        cityName = cityName_tag.value.trim();
    console.log(cityName);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => changeDetails(data))
    .catch((error) => error404(error));
}

function changeDetails(data){
    console.log(data);
    document.querySelector('.temp').textContent = Math.round(data.main.temp) + "°c";
    document.querySelector('.feelslike').textContent = "Feels Like: " + Math.round(data.main.feels_like) + "°c";
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.status').textContent = data.weather[0].main;
    document.querySelector('.humidity').textContent = data.main.humidity + "%";
    document.querySelector('.wind').textContent = data.wind.speed + " km/h";

    changeImage(data.weather[0].main)
}

function changeImage(weather){
    if(weather == "Clouds"){
        weatherIcon.src = "image/clouds.png";
        body.classList.add("cloud");
        body.classList.remove("clear");
        body.classList.remove("drizzle");
        body.classList.remove("mist");
        body.classList.remove("snow");
        body.classList.remove("rain");
        body.classList.remove("haze");
    }
    else if(weather == "Clear"){
        weatherIcon.src = "image/clear.png";
        body.classList.add("clear");
        body.classList.remove("cloud");
        body.classList.remove("drizzle");
        body.classList.remove("mist");
        body.classList.remove("snow");
        body.classList.remove("rain");
        body.classList.remove("haze");

    }
    else if(weather == "Drizzle"){
        weatherIcon.src = "image/drizzle.png";
        body.classList.add("drizzle");
        body.classList.remove("cloud");
        body.classList.remove("clear");
        body.classList.remove("mist");
        body.classList.remove("snow");
        body.classList.remove("rain");
        body.classList.remove("haze");

    }
    else if(weather == "Mist"){
        weatherIcon.src = "image/mist.png";
        body.classList.add("mist");
        body.classList.remove("cloud");
        body.classList.remove("clear");
        body.classList.remove("drizzle");
        body.classList.remove("snow");
        body.classList.remove("rain");
        body.classList.remove("haze");

    }
    else if(weather == "Snow"){
        weatherIcon.src = "image/snow.png";
        body.classList.add("snow");
        body.classList.remove("cloud");
        body.classList.remove("clear");
        body.classList.remove("drizzle");
        body.classList.remove("mist");
        body.classList.remove("rain");
        body.classList.remove("haze");

    }
    else if(weather == "Rain"){
        weatherIcon.src = "image/rain.png";
        body.classList.add("rain");
        body.classList.remove("cloud");
        body.classList.remove("clear");
        body.classList.remove("drizzle");
        body.classList.remove("mist");
        body.classList.remove("snow");
        body.classList.remove("haze");

    }
    else if(weather == "Haze"){
        weatherIcon.src = "image/haze.png";
        body.classList.remove("rain");
        body.classList.remove("cloud");
        body.classList.remove("clear");
        body.classList.remove("drizzle");
        body.classList.remove("mist");
        body.classList.remove("snow");
        body.classList.add("haze");

    }
}

function error404(error){
    weatherIcon.src = "image/404.jpg";
    document.querySelector('.status').textContent = "";
    document.querySelector('.temp').textContent = "";
    document.querySelector('.feelslike').textContent = "";
    document.querySelector('.city').textContent = "City not found";
    document.querySelector('.humidity').textContent = "";
    document.querySelector('.wind').textContent = "";
}

document.getElementById("find").addEventListener("click", () => {
    search();
});

search();