
let apiEndpoint = ' api.openweathermap.org';
let btn = document.getElementById("submit");
var input = document.getElementById("city");

var apiPath = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=025b6c16a1c73a4429195e0fbc987035';
var units = '&units=metric';

//Calling the api//
let weather = {
    apiKey: '&appid=025b6c16a1c73a4429195e0fbc987035',
    fetchWeather: function (title) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + input
            + units
            + apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.getWeather(data));
    },

    //Getting specific data to display on weather card//
    getWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)

        //Changin title to whichever city hase been typed in search bar//
        document.querySelector(".title").innerText = "Weather in" + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
      },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

btn.addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });

/*
//event listener//
btn.addEventListener('click', getWeather(){
fetch(apiPath + input + apiKey + units)
    .then(response => response.json())
    .then(data => this.displayWeather(data));
},
 function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed)
};


/*
//event listener//
btn.addEventListener('click', getWeather);


//get weather based on city user has typed//
/*
function getWeather(){
    let searchInputTxt = document.getElementById('city').value.trim();
    fetch(api + input + apiKey + units)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if (data. 
    })

}

*/