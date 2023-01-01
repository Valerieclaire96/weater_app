import fetch from 'node-fetch';


let weather = {
  APIkey: "a70d5663932d07011704615665d2dee8",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.APIkey
    )
      .then((response) => { 
        if (!response.ok){
            alert("No Weather Information Found.");
            throw new Error("No Weather Found.");
        }
        return response.json()
    })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (date) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innterText =
      "Humidity " + humidity + "%";
    document.querySelector(".wind").innterText =
      "Wind Speed " + speed + MPH;
    document.querySelector(".weather").lastList.remove("loading");
    document.body.style.backgroundIamge = "url('https://source.unsplast.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document
  .querySelector(".search button")
  .addEventListener("click", function () {
    weather.search();
  });

weather.fetchWeather("Atlanta")