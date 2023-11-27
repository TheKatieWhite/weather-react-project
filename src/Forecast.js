import React from "react";

export default function Forecast() {
  return (
    <div>
      <p className="day">Day</p>
      <p>☀️</p>
      <p className="forecastTemp">
        <strong>high</strong> low
      </p>
    </div>
  );
}
