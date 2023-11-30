import React, {useState} from "react";
import axios from "axios";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

 

  if (ready) {
   
    return (
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
              <p>Only here to test if working<h1>{Math.round(temperature)}</h1></p>
            </div>
          </div>
        </div>
      </form>
    );
  }
  else {
let apiKey = "96771e971243152d6b8948878c26adde";


let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";

  }


}