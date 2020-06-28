import React from "react";
import "./Specificity.css";

const Specificity = () => {
  return (
    <div className="demo">
      <br />
      <br />
      <div className="first-row">
        <div className="item hello">Hello</div>
        <div className="item world">Hello</div>
      </div>
      <div className="second-row">
        <div className="item hello">Hello</div>
        <div className="item world">Hello</div>
      </div>
    </div>
  );
};

export default Specificity;
