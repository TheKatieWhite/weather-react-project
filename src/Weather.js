import React, { useState } from "react";
import axios from "axios";

import Current from "./Current";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({default: false});
  function handleResponse(response) {
    

setWeatherData({
  ready: true,
  city: response.data.name,
  temperature: response.data.main.temp,
  daytime: new Date(response.data.dt *1000),
  condition: response.data.weather[0].main,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  iconUrl: "/images/weatherlogo.png"
  

}); 
  }

function search() {
    let apiKey = "96771e971243152d6b8948878c26adde";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleCityChange(event){
setCity(event.target.value);

}

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit} id="enterCity">
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
                  onChange={handleCityChange}
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
        <Current data={weatherData}/>
        
      </div>
    );
    
  } else {
    
    search();
    return "Loading...";
  }

  
}
