import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function SearchEngine() {
    const [city, setCity] = useState(null);
    const [displayResult, setDisplayResult] = useState({});
    const [result, setResult] = useState(false);

    function updateCity(event) {
        setCity(event.target.value);
    }

    function showInformation(response) {
        setResult(true);
        setDisplayResult({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    function handleSearch(event) {
        event.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60dbe083627851751ca64015719aa9ec&units=metric`;
        axios.get(url).then(showInformation);
    }

    if (result) {
        return (
            <div className="SearchEngine">
                <form onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="Enter a city"
                        onChange={updateCity}
                    />
                    <input type="submit" value="Search" />
                </form>

                <ul>
                    <li>Temperature: {Math.round(displayResult.temperature)}°c</li>
                    <li>Description: {displayResult.description}</li>
                    <li>Humidity: {displayResult.humidity}%</li>
                    <li>Wind: {Math.round(displayResult.wind)}m/h</li>
                    <li>
                        <img src={displayResult.icon} alt="Weather Icon" />
                    </li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className="SearchEngine">
                <form onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="Enter a city"
                        onChange={updateCity}
                    />
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
}
