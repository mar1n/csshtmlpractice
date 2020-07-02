import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Menu">
      <button className="Menu-button" onClick={() => setIsOpen(!isOpen)}>Menu</button>
        <div className={`Menu-box ${isOpen ? 'is-open' : ''}`}>
          <div className="Menu-box-link">Home</div>
          <div className="Menu-box-link">Projects</div>
          <div className="Menu-box-link">About</div>
          <div className="Menu-box-link">Contact</div>
        </div>
    </div>
  );
};

export default Menu;
