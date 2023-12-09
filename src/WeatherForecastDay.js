import React from "react";

import "./Forecast.css";

export default function WeatherForecastDay(props) {
    console.log(props);
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
      let date = new Date(props.data.dt*1000);
      let day = date.getDay();

      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      return days[day];
    }

    

    return (
      <div className="weatherForecast">
        <p className="day">{day()}</p>
        <p className="forecastIcon">
          <img
            src={`https://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
            alt=""
          />
        </p>
        <p className="forecastTemp">
          <strong>{maxTemp()}</strong> {minTemp()}
        </p>
      </div>
    );
}