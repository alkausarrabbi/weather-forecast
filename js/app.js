const API_KEY=`3bdd225b97e0023f7702675e8f9c7cba`;
const searchTemperature=()=>{
    const cityInput=document.getElementById('city-name');
    const cityName=cityInput.value;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res =>res.json())
    .then(data=>displayWeather(data));
}
const innerText=(id,value)=>{
    document.getElementById(id).innerText=value;
}
const displayWeather=(temp)=>{
    console.log(temp);
    innerText("city",temp.name);
    innerText("temperature",temp.main.temp);
    innerText("condition",temp.weather[0].main);
    const url=` http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const weatherIcon=document.getElementById('weather-icon');
    weatherIcon.setAttribute("src",url);
}