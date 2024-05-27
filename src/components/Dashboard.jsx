import React from "react";
import "./Dashboard.css";
import Callouts from "./Callouts";
import Pill from "./Pill";
import Chart from "./Chart";
import Days from "./Days";
function Dashboard({ weatherData }) {
  function getCurrentTime() {
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine AM/PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Format the time
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    return formattedTime;
  }

  // Example usage:
  const currentTime = getCurrentTime();
  console.log("Current Time:", currentTime);

  return (
    <div className="dashboard">
      <div className="main">
        <div className="left">
          <h1 className="mainLeft__title">{`${weatherData.main?.temp}°`}</h1>
          <p className="mainLeft__p">{weatherData?.name}</p>
        </div>
        <div className="right">
          <p className="right__time">Time</p>
          <p className="right__p">{getCurrentTime()}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="main__left">
          <Callouts weatherData={weatherData} />
          <Pill weatherData={weatherData} />
        </div>
        <div className="main__right">
          <Chart />
          <div className="mainRight_bottom">
            <Days />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
