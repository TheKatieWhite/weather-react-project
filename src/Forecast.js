import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./Forecast.css";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect (() => {
    setLoaded(false);
  }, [props.coordinates])

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
console.log(props);

  if(loaded) {
    return (
      <span className="forecastSpan">
        
        {forecast.map(function(dailyForecast, index){
          if (index < 6) {
            return (
              
          <div className="forecastDay" key={index}>
            
            <WeatherForecastDay data={dailyForecast}/>
            </div>
          );
          } else {
            return null;
          }
        })}
      
     
     
      
      </span>
      
      
    );

    
  }
  else {

  let apiKey = `96771e971243152d6b8948878c26adde`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return null;

  }
}
