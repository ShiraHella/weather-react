import React from "react";
import Weather from "./Weather";
import "./StartingPoint.css";

export default function StartingPoint(){
    return (
    <div className="StartingPoint">
        <div className="container">
            <Weather defaultCity="Yokohama" />
           
            <footer> <a
          href="https://github.com/ShiraHella/weather-react"
          target="_blank"
          rel="noreferrer noopener"
        >
          OpenSource Code
        </a>{" "}
        by Shira Hella Shuval</footer>
        </div>
      </div>
    );
}