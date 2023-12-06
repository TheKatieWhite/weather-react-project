import React from "react";
import Header from "./Header";

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
        
          
       
      </div>
      <Footer />
    </div>
  );
}
