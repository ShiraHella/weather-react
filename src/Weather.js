import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {

  const [weatherData, setWeatherData] = useState({ result: false});

  function handleResponse(response) {
    setWeatherData({
      result: true,
      city: response.data.name,
      date: `Sunday 10:00`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`})

  }
  if (weatherData.result) {
  return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-7">
                <h1 className="card-title">{weatherData.city}</h1>
                <div className="today">{weatherData.date}</div>
              </div>
              <div className="col-5 search">
                <form>
                    <input
                        type="search"
                        placeholder="Enter a city"
                    />
                    <input type="submit" value="Search" />
                </form>
              </div>

              <div className="col-3 current-weather">
                <img src={weatherData.icon} alt={weatherData.description} />
              </div>
              <div className="col-5 center-weather">
                <div className="weather-word  text-capitalize">{weatherData.description}</div>
                <h2 className="card-subtitle mb-2 day-temp">
                  {Math.round(weatherData.temperature)}°c
                </h2>
              </div>

              <div class="col-2 extra-info">
                <span className="extra-info">
                  Humidity: {weatherData.humidity}%
                </span>
                <br />
                <span className="extra-info">
                  Wind: {Math.round(weatherData.wind)} km/h
                </span>
              </div>
            </div>
            <div className="icons">
              <div className="row">
                <div className="col-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="openSourceLink">
        {" "}
        <a
          href="https://github.com/ShiraHella/weather-react"
          target="_blank"
          rel="noreferrer noopener"
        >
          OpenSource Code
        </a>{" "}
        by Shira Hella Shuval
      </div>
    </div>
  );
  } else {
    let city = "Yokohama";
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60dbe083627851751ca64015719aa9ec&units=metric`;
        axios.get(url).then(handleResponse);

        return "Loading...";
  }
}
