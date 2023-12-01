import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";


export default function Current(props) {
  return (
    <div className="currentInfo">
      <div className="row">
        <div className="col-7">
          <h3 id="cityName">
            <strong>{props.data.city}</strong>
          </h3>
          <div>
            <p className="currentinfo">
              <span id="currentDayTime">
                <FormattedDate date={props.data.daytime} />,{" "}
              </span>
              <span id="condition">{props.data.condition}</span>
              <br />
              Humidity: <span id="humidity">{props.data.humidity}</span>%, Wind:{" "}
              <span id="wind">{Math.round(props.data.wind)}</span>mph
            </p>
          </div>
        </div>

        <div className="col-5">
          <div>
            <h1>
              <img
                src={props.data.iconUrl}
                id="icon"
                title=""
                width="90"
                alt=""
              />
              <WeatherTemp fahrenheit={props.data.temperature}/>
              
              
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
    
  
  

}
