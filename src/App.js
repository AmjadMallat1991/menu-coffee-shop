// src/App.js
import React from "react";
import "./App.css";
import menuData from "./data/MenuData";
import logo from "./logo.png";
function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} alt="Wid Cafe Logo" className="header-logo" /> */}
        <h1>قهوة وِد | Wid Cafe</h1>
        <div className="header-contact">
          <p>
            <i className="fas fa-phone-alt"></i> Phone: +961 70 374 758
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Qalamoun, North Lebanon
          </p>
        </div>
      </header>

      <div className="menu-container">
        {menuData.map((category) => (
          <div key={category.id} className="menu-category">
            <h2>{category.name}</h2>
            <div className="menu-items">
              {category.items.map((item) => (
                <div key={item.id} className="menu-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
