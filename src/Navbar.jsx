import React from "react";

import "./index.css";

export default function Navbar() {
  return (
    <nav className="navigation">
      <img
        src="./assets/travel-logo.png"
        alt="travel journal logo"
        className="nav-logo"
      />
      <h2 className="nav-title">my travel journal</h2>
    </nav>
  );
}
