import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <h1>Tour</h1>
      </div>
      <nav className="nav">
        <li>home</li>
        <li>About</li>
        <li>Sign Out</li>
      </nav>
    </div>
  );
}

export default Header;
