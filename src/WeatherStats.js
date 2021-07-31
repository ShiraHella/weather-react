import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherStats(props){
    return (<div className="WeatherStats">
        <h1>{props.data.city}</h1>
                <ul className="sub-titles">
                <li><FormatDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
             </ul>
            <div className="row mt-3">
              <div className="col-6">
                <WeatherIcon code={props.data.icon} size={100}/> 
                
            <WeatherTemperature celsius={props.data.temperature} />
                  
                  
              
              </div>
             
              <div class="col-6 extra-info">
                <ul>
                <li>
                  Humidity: {props.data.humidity}%
                </li>
                <li>
                  Wind: {Math.round(props.data.wind)} km/h
                </li>
            </ul>
            </div>
            </div>
    </div>);
}
