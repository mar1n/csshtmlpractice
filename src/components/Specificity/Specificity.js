import React from "react";
import "./Specificity.css";

const Specificity = () => {
  return (
    <div className="demo">
      <br />
      <br />
      <div className="first-row">
        <div id="hello" className="item hello">Hello</div>
        <div world="true" className="item world">World</div>
        <div world="false" className="item again">Again</div>
        <input type="text" value="hello" />
        <input type="password" value="hello" />
      </div>
    </div>
  );
};

export default Specificity;
