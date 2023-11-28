import React from "react";

export default function Header() {
  return (
    <div className="row">
    <div className="logo-wrapper col-4">
      <img
        src="/images/weatherlogo.png"
        class="logo"
        alt="Weather App Logo"
        title="Know the weather where you are"
        width="150"
      />
      
      </div>
      <h2 className="header-text col-8">Katie's Weather App</h2>
    </div>
  );
}