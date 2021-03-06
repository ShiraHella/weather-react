import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherStats from "./WeatherStats";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({result: false});
const [city, setCity] = useState (props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      result: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    icon: response.data.weather[0].icon,
    coord: response.data.coord})

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

  }

  function handleCityChange(event){
setCity(event.target.value);
  }


  function search() {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60dbe083627851751ca64015719aa9ec&units=metric`;
        axios.get(url).then(handleResponse);
  }

  if (weatherData.result) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 search"><input
                        type="search"
                        placeholder="Enter a city"
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                    />
              </div>
                    <div className="col-3">
                      <input className="btn btn-primary w-100" type="submit" value="Search" />
                    </div>
            </div>
      </form>
           <WeatherStats data={weatherData} /> 
           <WeatherForecast coord={weatherData.coord}/>             
    </div>
  );
  } else {
     search();
        return "Loading...";
  }
}
