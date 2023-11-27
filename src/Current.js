import React from "react";


export default function Current() {
  return (
    <div className="row">
      <div className="col-7">
        <h3 id="cityName">
          <strong>Tokyo</strong>
        </h3>
        <div>
          <p className="currentinfo">
            <span id="currentDayTime">Current day and time, </span>
            <span id="condition">Current condition</span>
            <br />
            Humidity: <span id="humidity">57</span>%, Wind:{" "}
            <span id="wind">7</span>mph
          </p>
        </div>
      </div>
      <div className="col-5">
        <div>
          <h1>
            <img src="" id="icon" title="" width="90" alt="" />
            <span id="tempNow">66</span>
            <span className="temptype" id="fah">
              {" "}
              °F
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
