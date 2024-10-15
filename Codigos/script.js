// Variáveis e seleção de elementos
const apiKey = "4cde32e6b4fb37018d654243054e76f4";
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png";

const cityInput = document.querySelector("#city-input");
const search8tn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");


// Funções
const getweatherData = async (city) => {

   const apiweatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=$(city)&units=metric&appid=${apiKey}&lang=pt_br'

   const res = await fetch(apiweatherURL);
   const data = await res.json();

   return data
};




const showWeatherData = async (city) => {

  const data = await getWeatherData(city);

cityElement.innerText = data.name;
tempElement.ineetText = parseInt(data.main.temp);
descElement.innerText = data.weather[0].description; 
weatherIconElement.setAttribute("src", 'http://openweathermap.org/img/wn/${data.weather[0].Icon}.png'

);
 countryElement.setAttribute("src", apiCountryURL + data.sys.country);
  humidityElement.InnerText = '$(data.main.huminidy)%';
  windElement.InnerText = '${data.wind.speed}km/h';
  
  weatherContainer.classList.remove("hide");
};

//Eventos
search8tn.addEventListener("click", (e) => {
    e.preventDefault();

   
   const city = cityInput.Value;
   
   
    showWeatherData(city);
}); 

cityInput.addEventListener("keyup", (e) => {

   if(e.code === "Enter")  {
     const city = e.target.value
   
    showWeatherData(city);
   
    }



})