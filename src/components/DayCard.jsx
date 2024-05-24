import React from "react";
import "./DayCard.css";

function DayCard({ day, icon: Icon, temp }) {
  return (
    <div className="daycard">
      <p>{day}</p>
      <Icon size={24} color="#1e90ff" />
      <h2>{temp}</h2>
    </div>
  );
}

export default DayCard;
