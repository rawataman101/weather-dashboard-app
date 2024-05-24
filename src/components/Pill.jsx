import React from "react";
import "./Pill.css";
function Pill() {
  return (
    <div className="pill">
      <div className="left">
        <p>Monthly Rainfall</p>
        <p>45mm</p>
      </div>
      <div className="right">
        <p>This year</p>
        <p>+17%</p>
      </div>
    </div>
  );
}

export default Pill;
