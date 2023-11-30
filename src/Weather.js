import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({default: false});
  function handleResponse(response) {
    console.log(response.data);

setWeatherData({
  ready: true,
  city: response.data.name,
  temperature: response.data.main.temp,
  daytime: "Wednesday party time",
  condition: response.data.weather[0].main,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  iconUrl: response.data.weather[0].icon,
  description: response.data.weather[0].description,

});

   
  
  }

  if (weatherData.ready) {
    return (
      <div>
        <form id="enterCity">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control entercity"
                  placeholder="Enter a city..."
                  autoComplete="off"
                  id="city-input"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="button-search"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-7">
            <h3 id="cityName">
              <strong>{weatherData.city}</strong>
            </h3>
            <div>
              <p className="currentinfo">
                <span id="currentDayTime">{(weatherData.daytime)}, </span>
                <span id="condition">{weatherData.condition}</span>
                <br />
                Humidity: <span id="humidity">{weatherData.humidity}</span>%,
                Wind: <span id="wind">{Math.round(weatherData.wind)}</span>mph
              </p>
            </div>
          </div>

          <div className="col-5">
            <div>
              <h1>
                <img src={weatherData.iconUrl} id="icon" title="" width="90" alt="" />
                <span id="tempNow">{Math.round(weatherData.temperature)}</span>
                <span className="temptype" id="fah">
                  {" "}
                  °F
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
    
  } else {
    let apiKey = "96771e971243152d6b8948878c26adde";

    let city = "Tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }

  
}
