import React from "react";
import Header from "./Header";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Weather from "./Weather"

import './App.css';
import "./Header.css";
import "./Search.css";
import "./Current.css";
import "./Forecast.css";
import "./Footer.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-wrapper">
        <Header />
        <Weather defaultCity="Tokyo"/>
        <span className="forecastInfo">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </span>
      </div>
      <Footer />
    </div>
  );
}
