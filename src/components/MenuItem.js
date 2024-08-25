// src/components/MenuItem.js
import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span>{item.price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
