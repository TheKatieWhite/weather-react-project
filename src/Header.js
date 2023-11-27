import React from "react";

export default function Header() {
  return (
    <div className="logo-wrapper">
      <img
        src="/images/weatherlogo.png"
        class="logo"
        alt="Weather App Logo"
        title="Know the weather where you are"
        width="150"
      />
    </div>
  );
}