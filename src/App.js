import React from "react";
import Header from "./Header";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

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
        <Search />
        <Current />
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
