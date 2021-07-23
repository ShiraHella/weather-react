import React from "react";
import "./Weather.css";
import Rainy from "./img/10d.svg";

export default function Weather() {
  let weatherData = {
    city: "Yokohama",
    temperature: 22,
    date: "Saturday, 10:00",
    description: "Rainy",
    humidity: 95,
    wind: 10
  };

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
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Where do you want to go?"
                    />
                  </div>
                  <button type="submit" className="btn btn-sm search">
                    How's the weather?
                  </button>
                </form>
              </div>

              <div className="col-3 current-weather">
                <img src={Rainy} alt="weather icon" />
              </div>
              <div className="col-5 center-weather">
                <div className="weather-word">{weatherData.description}</div>
                <h2 className="card-subtitle mb-2 day-temp">
                  {weatherData.temperature}°c
                </h2>
              </div>

              <div class="col-2 extra-info">
                <span className="extra-info">
                  Humidity: {weatherData.humidity}%
                </span>
                <br />
                <span className="extra-info">
                  Wind: {weatherData.wind} m/hr
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
          href="https://github.com/ShiraHella/purple-weather-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          OpenSource Code
        </a>{" "}
        by Shira Hella Shuval
      </div>
    </div>
  );
}
