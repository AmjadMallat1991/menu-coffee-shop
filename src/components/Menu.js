// src/components/Menu.js
import React from "react";
import Category from "./Category";
import menuData from "../data/MenuData";

const Menu = () => {
  return (
    <div className="menu">
      {menuData.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Menu;
