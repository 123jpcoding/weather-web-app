
let apiEndpoint = ' api.openweathermap.org';
let btn = document.getElementById("submit");
let input = document.getElementById("city");

var api = 'https://api.openweathermap.org/data/2.5/weather?';
var lat = 'lat={lat}&lon={lon}';
var apiKey = '025b6c16a1c73a4429195e0fbc987035';
var units = '&units=metric';
var city = 'London';


//event listener//
btn.addEventListener('click', getWeather);

//get weather for city user has typed//
function getWeather(){
    let searchInputTxt = document.getElementById('city').ariaValueMax.trim();
    
}

