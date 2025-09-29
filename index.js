function showTemperature(response){
    //console.log(response);
    //console.log(response.data.temperature.current);

    let temperature = document.querySelector("#currentTemperatureValue");
    temperature.innerHTML = Math.round(response.data.temperature.current);
  }
  function showCondition(response){
    let condition = document.querySelector("#condition");
    condition.innerHTML = response.data.condition.description;
    //console.log(response.data.condition.description);
  }
  function showHumidity(response){
    let humidity = document.querySelector("#humidityValue");
    humidity.innerHTML = response.data.temperature.humidity + "%";
    //console.log(response.data.temperature.humidity);
  }
  function showWindSpeed(response){
    let windSpeed = document.querySelector("#windSpeed");
    windSpeed.innerHTML = response.data.wind.speed + "km/h";
    //console.log(response.data.wind.speed);
  }

function changeCity(event){
  event.preventDefault();
  //alert("Hello");
  let citySearchField = document.querySelector("#citySearchField");
  let city = document.querySelector("#city");

  // wert aus dem Input-Feld holen
  let newCity = citySearchField.value;
  city.innerHTML = newCity;

  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${newCity}&key=${apiKey}`;
  axios.get(apiURL).then(showTemperature);
  axios.get(apiURL).then(showCondition);
  axios.get(apiURL).then(showHumidity);
  axios.get(apiURL).then(showWindSpeed);
}

let form = document.querySelector("form");
form.addEventListener("submit",changeCity);
let apiKey = "8d54b800a79o3a3f274ta06a2117547b";


function showCurrentTime(){
  let now = new Date();
  let days =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDay = days[now.getDay()];

  let day = document.querySelector("#day");
  day.innerHTML = currentDay;

  let hours = document.querySelector("#hours");
  let currentHour = now.getHours();
  if (currentHour < 10){
    hours.innnerHTML = `0${currentHour}`;
  } else{
    hours.innerHTML = currentHour;
  }
  
  let minutes = document.querySelector("#minutes");
  let currentMinute = now.getMinutes();
  if(currentMinute < 10){
    minutes.innerHTML = `0${currentMinute}`;
  }else{
    minutes.innerHTML = currentMinute;
  } 
}

showCurrentTime();







