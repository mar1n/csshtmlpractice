import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Menu">
      <MenuButton 
        isOpem={isOpen}
        onMenu={() => setIsOpen(!isOpen)}
        />
      <MenuBox  isOpen={isOpen}/>
    </div>
  );
};

const MenuButton = ({ onMenu }) => {
  return (
    <button className="Menu-button" onClick={() => onMenu()}>
      Menu
    </button>
  );
};

const MenuBox = ({ isOpen }) => {
  return (
    <div className={`Menu-box ${isOpen ? "is-open" : ""}`}>
      <div className="Menu-box-link">Home</div>
      <div className="Menu-box-link">Projects</div>
      <div className="Menu-box-link">About</div>
      <div className="Menu-box-link">Contact</div>
    </div>
  );
};

export default Menu;
