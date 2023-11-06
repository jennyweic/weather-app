//create new function for user click on search button.
function search(event) {
  event.preventDefault();

  // CITYINPUT
  let cityInput = document.querySelector("#userCityInput");
  console.log(cityInput.value);
  let h1 = document.querySelector("#cityInput");
  // h1.innerHTML = `${cityInput.value}`;
  h1.textContent = `${cityInput.value}`;
  const city = cityInput.value;

  //DATE&DAYUPDATE
  let now = new Date();
  console.log(now);
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let day = days[now.getDay()];

  let dateElement = document.querySelector("#tdate");
  dateElement.innerHTML = `${date}`;

  let dayElement = document.querySelector("#tday");
  dayElement.innerHTML = `${day}`;

  let apiKey = "698445003bc2a9cbfcb050ae4t74oc8b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log("url?", apiUrl);
  axios.get(apiUrl).then(showCityTemperature);
}
let searchButton = document.querySelector("#searchBtn");
searchButton.addEventListener("click", search);

//TEMPUPDATE
// create new function to pull data: temperature and update on webpage
function showCityTemperature(response) {
  console.log(response);

  let currentTemp = response.data.temperature.current;
  console.log("current temp:", currentTemp);
  let tempElement = document.querySelector("#tdegrees");
  tempElement.innerHTML = `${Math.round(currentTemp)}`;

  let currentDescription = response.data.condition.description;
  console.log("current descript:", currentDescription);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${currentDescription}`;

  let currentFeel = response.data.temperature.feels_like;
  console.log("current feel:", currentFeel);
  let feelElement = document.querySelector("#feelsLike");
  feelElement.innerHTML = `${Math.round(currentFeel)}`;

  let currentWindSpeed = response.data.wind.speed;
  console.log("current wind speed:", currentWindSpeed);
  let windSpeedElement = document.querySelector("#windSpeed");
  windSpeedElement.innerHTML = `${Math.round(currentWindSpeed)}`;
}
