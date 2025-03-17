const ApiKey = "eb26233fc730169b8d2dc20d8ce721a6";
const weatherIcon = document.querySelector(".weather_icon");
const body = document.querySelector(".body");

//For Searching
function search(){
    let cityName = "New delhi";
    let cityName_tag = document.getElementById('cityname');
    if(cityName_tag.value.length > 0)
        cityName = cityName_tag.value.trim();
    console.log(cityName);

    fetchData(cityName)
}

//To fetch data from API
function fetchData(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => changeDetails(data))
    .catch((error) => error404(error));
}

//For Changing the weather details
function changeDetails(data){
    console.log(data);
    document.querySelector('.temp').textContent = Math.round(data.main.temp) + "°c";
    document.querySelector('.feelslike').textContent = "Feels Like: " + Math.round(data.main.feels_like) + "°c";
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.status').textContent = data.weather[0].main;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "<span> km/h</span>";

    changeImage(data.weather[0].main)
}

//To change icons for UX
function changeImage(weather){
    body.classList.remove("cloud");
    body.classList.remove("clear");
    body.classList.remove("drizzle");
    body.classList.remove("mist");
    body.classList.remove("snow");
    body.classList.remove("rain");
    body.classList.remove("haze");
    body.classList.remove("smoke");
    body.classList.remove("all");

    if(weather == "Clouds"){
        weatherIcon.src = "image/clouds.png";
        body.classList.add("cloud");
    }
    else if(weather == "Clear"){
        weatherIcon.src = "image/clear.png";
        body.classList.add("clear");
    }
    else if(weather == "Drizzle"){
        weatherIcon.src = "image/drizzle.png";
        body.classList.add("drizzle");
    }
    else if(weather == "Mist"){
        weatherIcon.src = "image/mist.png";
        body.classList.add("mist");
    }
    else if(weather == "Snow"){
        weatherIcon.src = "image/snow.png";
        body.classList.add("snow");
    }
    else if(weather == "Rain"){
        weatherIcon.src = "image/rain.png";
        body.classList.add("rain");
    }
    else if(weather == "Haze"){
        weatherIcon.src = "image/haze.png";
        body.classList.add("haze");
    }
    else if(weather == "Smoke"){
        weatherIcon.src = "image/smoke.png";
        body.classList.add("smoke");
    }
    else{
        weatherIcon.src = "image/all.png";
        body.classList.all("all");
    }
}

//For search Error
function error404(error){
    weatherIcon.src = "image/404.webp";
    document.querySelector('.status').textContent = "";
    document.querySelector('.temp').textContent = "";
    document.querySelector('.feelslike').textContent = "";
    document.querySelector('.city').textContent = "City not found";
    document.querySelector('.humidity').textContent = "";
    document.querySelector('.wind').textContent = "";
}

//For Dynamic Updates 
setInterval(() => search(), 500);