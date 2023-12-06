import axios from "axios";
import React from "react";

export default function Forecast(props) {
  function handleResponse(response) {
console.log(response.data);

  }

  
  
  let apiKey = `96771e971243152d6b8948878c26adde`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiURL).then(handleResponse);

  return (
    <div className="weatherForecast">
      <p className="day">Day</p>
      <p className="forecastIcon">☀️</p>
      <p className="forecastTemp">
        <strong>high</strong> low
      </p>
    </div>
  );
}
