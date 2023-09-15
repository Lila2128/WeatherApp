
    // Select Elements: For Current Data:
const cityElement = document.querySelector(".city");
const countryElement = document.querySelector(".country");
var dateElement = new Date();
const iconElement = document.querySelector(".icon");
const tempElement = document.querySelector(".temp");
const minElement = document.querySelector(".min");
const maxElement = document.querySelector(".max");
const descElement = document.querySelector(".description");
const notificationElement = document.querySelector(".notification");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

// Select Elements for Day 1:
var dateElement1 = dateElement;
const iconElement1 = document.querySelector(".icon1");
const minElement1 = document.querySelector(".min1");
const maxElement1 = document.querySelector(".max1");
const descElement1 = document.querySelector(".description1");
const humidityElement1 = document.querySelector(".humidity1");
const windElement1 = document.querySelector(".wind1");

// For Day 2:
var dateElement2 = dateElement;
const iconElement2 = document.querySelector(".icon2");
const minElement2 = document.querySelector(".min2");
const maxElement2 = document.querySelector(".max2");
const descElement2 = document.querySelector(".description2");
const humidityElement2 = document.querySelector(".humidity2");
const windElement2 = document.querySelector(".wind2");

// For Day 3:
var dateElement3 = dateElement;
const iconElement3 = document.querySelector(".icon3");
const minElement3 = document.querySelector(".min3");
const maxElement3 = document.querySelector(".max3");
const descElement3 = document.querySelector(".description3");
const humidityElement3 = document.querySelector(".humidity3");
const windElement3 = document.querySelector(".wind3");

// For Day 4:
var dateElement4 = dateElement;
const iconElement4 = document.querySelector(".icon4");
const minElement4 = document.querySelector(".min4");
const maxElement4 = document.querySelector(".max4");
const descElement4 = document.querySelector(".description4");
const humidityElement4 = document.querySelector(".humidity4");
const windElement4 = document.querySelector(".wind4");

// For Day 5:
var dateElement5 = dateElement;
const iconElement5 = document.querySelector(".icon5");
const minElement5 = document.querySelector(".min5");
const maxElement5 = document.querySelector(".max5");
const descElement5 = document.querySelector(".description5");
const humidityElement5 = document.querySelector(".humidity5");
const windElement5 = document.querySelector(".wind5");

// For Day 6:
var dateElement6 = dateElement;
const iconElement6 = document.querySelector(".icon6");
const minElement6 = document.querySelector(".min6");
const maxElement6 = document.querySelector(".max6");
const descElement6 = document.querySelector(".description6");
const humidityElement6 = document.querySelector(".humidity6");
const windElement6 = document.querySelector(".wind6");

// App Data:
const weather = {};
const apikey = "d76a2bfc337036c8c5963ff783adb47d";

// Check if Browser supports geolocation:
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
    var cords = 1;
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support Geolocation</p>";
}

// Set User's Position
function setPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    getWeather(latitude, longitude); // Sets the latitude and longitude for the function to fetch data

}

// Show error When there is an issue with geolocation service
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// Function to Fetch data from the Weather API: 
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`;

    // console.log(api); To check the api in console.
    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            // For current
            weather.temperature = data.list[0].main.temp;
            weather.min = data.list[0].main.temp_min;
            weather.max = data.list[0].main.temp_max;
            weather.description = data.list[0].weather[0].description;
            weather.iconId = data.list[0].weather[0].icon;
            weather.city = data.city.name;
            weather.country = data.city.country;
            weather.humidity = data.list[0].main.humidity;
            weather.wind = data.list[0].wind.speed;

            // for Day 1;
            weather.min1 = data.list[5].main.temp_min;
            weather.max1 = data.list[5].main.temp_max;
            weather.description1 = data.list[5].weather[0].description;
            weather.iconId1 = data.list[5].weather[0].icon;
            weather.humidity1 = data.list[5].main.humidity;
            weather.wind1 = data.list[5].wind.speed;
            // for Day 2;
            weather.min2 = data.list[12].main.temp_min;
            weather.max2 = data.list[12].main.temp_max;
            weather.description2 = data.list[12].weather[0].description;
            weather.iconId2 = data.list[12].weather[0].icon;
            weather.humidity2 = data.list[12].main.humidity;
            weather.wind2 = data.list[12].wind.speed;
            // for Day 3;
            weather.min3 = data.list[16].main.temp_min;
            weather.max3 = data.list[16].main.temp_max;
            weather.description3 = data.list[16].weather[0].description;
            weather.iconId3 = data.list[16].weather[0].icon;
            weather.humidity3 = data.list[16].main.humidity;
            weather.wind3 = data.list[16].wind.speed;
            // for Day 4;
            weather.min4 = data.list[23].main.temp_min;
            weather.max4 = data.list[23].main.temp_max;
            weather.description4 = data.list[23].weather[0].description;
            weather.iconId4 = data.list[23].weather[0].icon;
            weather.humidity4 = data.list[23].main.humidity;
            weather.wind4 = data.list[23].wind.speed;
            // for Day 5;
            weather.min5 = data.list[29].main.temp_min;
            weather.max5 = data.list[29].main.temp_max;
            weather.description5 = data.list[29].weather[0].description;
            weather.iconId5 = data.list[29].weather[0].icon;
            weather.humidity5 = data.list[29].main.humidity;
            weather.wind5 = data.list[29].wind.speed;
            // for Day 6;
            weather.min6 = data.list[35].main.temp_min;
            weather.max6 = data.list[35].main.temp_max;
            weather.description6 = data.list[35].weather[0].description;
            weather.iconId6 = data.list[35].weather[0].icon;
            weather.humidity6 = data.list[35].main.humidity;
            weather.wind6 = data.list[35].wind.speed;
        })
        .then(function () {
            displayWeather();
        });

}

// Fetch Weather Function to fetch data from the search button.
function fetchWeather(city) {
    var api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`;

    fetch(api)

        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            // For current
            weather.temperature = data.list[0].main.temp;
            weather.min = data.list[0].main.temp_min;
            weather.max = data.list[0].main.temp_max;
            weather.description = data.list[0].weather[0].description;
            weather.iconId = data.list[0].weather[0].icon;
            weather.city = data.city.name;
            weather.country = data.city.country;
            weather.humidity = data.list[0].main.humidity;
            weather.wind = data.list[0].wind.speed;

            // for Day 1;
            weather.min1 = data.list[5].main.temp_min;
            weather.max1 = data.list[5].main.temp_max;
            weather.description1 = data.list[5].weather[0].description;
            weather.iconId1 = data.list[5].weather[0].icon;
            weather.humidity1 = data.list[5].main.humidity;
            weather.wind1 = data.list[5].wind.speed;
            // for Day 2;
            weather.min2 = data.list[12].main.temp_min;
            weather.max2 = data.list[12].main.temp_max;
            weather.description2 = data.list[12].weather[0].description;
            weather.iconId2 = data.list[12].weather[0].icon;
            weather.humidity2 = data.list[12].main.humidity;
            weather.wind2 = data.list[12].wind.speed;
            // for Day 3;
            weather.min3 = data.list[16].main.temp_min;
            weather.max3 = data.list[16].main.temp_max;
            weather.description3 = data.list[16].weather[0].description;
            weather.iconId3 = data.list[16].weather[0].icon;
            weather.humidity3 = data.list[16].main.humidity;
            weather.wind3 = data.list[16].wind.speed;
            // for Day 4;
            weather.min4 = data.list[23].main.temp_min;
            weather.max4 = data.list[23].main.temp_max;
            weather.description4 = data.list[23].weather[0].description;
            weather.iconId4 = data.list[23].weather[0].icon;
            weather.humidity4 = data.list[23].main.humidity;
            weather.wind4 = data.list[23].wind.speed;
            // for Day 5;
            weather.min5 = data.list[29].main.temp_min;
            weather.max5 = data.list[29].main.temp_max;
            weather.description5 = data.list[29].weather[0].description;
            weather.iconId5 = data.list[29].weather[0].icon;
            weather.humidity5 = data.list[29].main.humidity;
            weather.wind5 = data.list[29].wind.speed;
            // for Day 6;
            weather.min6 = data.list[35].main.temp_min;
            weather.max6 = data.list[35].main.temp_max;
            weather.description6 = data.list[35].weather[0].description;
            weather.iconId6 = data.list[35].weather[0].icon;
            weather.humidity6 = data.list[35].main.humidity;
            weather.wind6 = data.list[35].wind.speed;
        })
        .then(function () {
            displayWeather();
        })
}

//  To fetch the value from the search button to search:
function search() {
    fetchWeather(document.querySelector(".search_bar").value);
};

// Display Weather to Ui:

function displayWeather(data) {
    // for current
    document.getElementById('test').innerHTML = dateElement.toDateString();
    iconElement.src = `http://openweathermap.org/img/wn/${weather.iconId}@2x.png`;
    tempElement.innerHTML = `${weather.temperature} °C`;
    minElement.innerHTML = `${weather.min} °C (min) `;
    maxElement.innerHTML = ` / ${weather.max} °C (max)`;
    descElement.innerHTML = weather.description;
    cityElement.innerHTML = `${weather.city}`;
    countryElement.innerHTML = `, ${weather.country}`;
    humidityElement.innerHTML = `Humidity: ${weather.humidity} %`;
    windElement.innerHTML = `Wind Speed: ${weather.wind} Km/h`;
    
    // For day 1
    dateElement1.setDate(dateElement.getDate() + 1);
    document.getElementById("date1").innerHTML = dateElement1.toDateString();
    iconElement1.src = `http://openweathermap.org/img/wn/${weather.iconId1}@2x.png`;
    minElement1.innerHTML = `${weather.min1} °C (min)`;
    maxElement1.innerHTML = ` / ${weather.max1} °C (max)`;
    descElement1.innerHTML = weather.description1;
    humidityElement1.innerHTML = `Humidity: ${weather.humidity1} %`;
    windElement1.innerHTML = `Wind Speed: ${weather.wind1} Km/h`;

    // For day 2
    dateElement2.setDate(dateElement.getDate() + 1);
    document.getElementById("date2").innerHTML = dateElement2.toDateString();
    iconElement2.src = `http://openweathermap.org/img/wn/${weather.iconId2}@2x.png`;
    minElement2.innerHTML = `${weather.min2} °C (min)`;
    maxElement2.innerHTML = ` / ${weather.max2} °C (max)`;
    descElement2.innerHTML = weather.description2;
    humidityElement2.innerHTML = `Humidity: ${weather.humidity2} %`;
    windElement2.innerHTML = `Wind Speed: ${weather.wind2} Km/h`;

    // For day 3
    dateElement3.setDate(dateElement.getDate() + 1);
    document.getElementById("date3").innerHTML = dateElement3.toDateString();
    iconElement3.src = `http://openweathermap.org/img/wn/${weather.iconId3}@2x.png`;
    minElement3.innerHTML = `${weather.min3} °C (min)`;
    maxElement3.innerHTML = ` / ${weather.max3} °C (max)`;
    descElement3.innerHTML = weather.description3;
    humidityElement3.innerHTML = `Humidity: ${weather.humidity3} %`;
    windElement3.innerHTML = `Wind Speed: ${weather.wind3} Km/h`;

    // For day 4
    dateElement4.setDate(dateElement.getDate() + 1);
    document.getElementById("date4").innerHTML = dateElement4.toDateString();
    iconElement4.src = `http://openweathermap.org/img/wn/${weather.iconId4}@2x.png`;
    minElement4.innerHTML = `${weather.min4} °C (min)`;
    maxElement4.innerHTML = ` / ${weather.max4} °C (max)`;
    descElement4.innerHTML = weather.description4;
    humidityElement4.innerHTML = `Humidity: ${weather.humidity4} %`;
    windElement4.innerHTML = `Wind Speed: ${weather.wind4} Km/h`;

    // For day 5
    dateElement5.setDate(dateElement.getDate() + 1);
    document.getElementById("date5").innerHTML = dateElement5.toDateString();
    iconElement5.src = `http://openweathermap.org/img/wn/${weather.iconId5}@2x.png`;
    minElement5.innerHTML = `${weather.min5} °C (min)`;
    maxElement5.innerHTML = ` / ${weather.max5} °C (max)`;
    descElement5.innerHTML = weather.description5;
    humidityElement5.innerHTML = `Humidity: ${weather.humidity5} %`;
    windElement5.innerHTML = `Wind Speed: ${weather.wind5} Km/h`;

    // For day 6
    dateElement6.setDate(dateElement.getDate() + 1);
    document.getElementById("date6").innerHTML = dateElement6.toDateString();
    iconElement6.src = `http://openweathermap.org/img/wn/${weather.iconId6}@2x.png`;
    minElement6.innerHTML = `${weather.min6} °C (min)`;
    maxElement6.innerHTML = ` / ${weather.max6} °C (max)`;
    descElement6.innerHTML = weather.description6;
    humidityElement6.innerHTML = `Humidity: ${weather.humidity6} %`;
    windElement6.innerHTML = `Wind Speed: ${weather.wind6} Km/h`;

    var dateElement7 = dateElement.setDate(dateElement.getDate() - 6);
    document.getElementById("test").innerHTML = dateElement.toDateString();

}

//  To make search button and enter key reponsive.
document.querySelector(".search button").addEventListener("click", function () {
    search();
});

document.querySelector(".search_bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        search();
    }
});
