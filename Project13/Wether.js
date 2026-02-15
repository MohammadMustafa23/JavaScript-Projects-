// Must Add Api Key
const ApiKey = `9e6867d94782d600962ded5f958650c3`;
const icons = {
  Clouds: "clouds.png",
  Clear: "clear.png",
  Rain: "rain.png",
  Drizzle: "drizzle.png",
  Mist: "mist.png",
  Snow: "snow.png",
};

const weatherIcon = document.getElementById("weatherIcon");
// Example: data.weather[0].main comes from weather API;
function getImage(weatherMain) {
  if (weatherMain == "Clouds") {
    weatherIcon.src = "clouds.png";
  } else if (weatherMain == "Clear") {
    weatherIcon.src = "clear.png";
  } else if (weatherMain == "Rain") {
    weatherIcon.src = "rain.png";
  } else if (weatherMain == "Drizzle") {
    weatherIcon.src = "drizzle.png";
  } else if (weatherMain == "Mist") {
    weatherIcon.src = "mist.png";
  } else if (weatherMain == "Snow") {
    weatherIcon.src = "snow.png";
  }
}

async function checkwether(valuecity) {
  try {
    const ApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${valuecity}&appid=${ApiKey}&units=metric`;
    const response = await fetch(ApiURL);
    const data = await response.json();
    console.log(data);
    document.querySelector(".temprature").textContent = Math.floor(data.main.temp) + "°C";
    document.querySelector("#Hum").textContent = data.main.humidity + "%";
    document.querySelector("#wind").textContent = data.wind.speed + " Km";
    getImage(data.weather[0].main);
  } catch (err) {
    document.querySelector(".temprature").textContent = "IN-VALID CITY";
    document.querySelector("#Hum").textContent = "null";
    document.querySelector("#wind").textContent = "null";
  }
}

function ScreenShow() {
  const SearchTemprature = document.querySelector(".main_part");
  const ResultTemprature = document.querySelector(".result_part");
  ResultTemprature.style.display = "flex";
  SearchTemprature.style.display = "none";
}

const inputCity = document.querySelector("#input");
const SearchButton = document.querySelector("#btn");
SearchButton.addEventListener("click", (event) => {
  const InputValue = inputCity.value.trim();
  const Cityname = document.querySelector(".city");
  let newInputValue = InputValue.trim();
  Cityname.textContent = newInputValue;
  checkwether(newInputValue);
  ScreenShow();
});
