import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <div className="header-icon-container">
          <img className="header-icon" src="../images/square-check-solid.svg" />
        </div>
        <h1>AutoComplete</h1>
      </div>
      <h2>The Automated To-Do List</h2>
    </header>
  );
}
