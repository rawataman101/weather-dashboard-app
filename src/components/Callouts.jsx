import React from "react";
import CalloutCard from "./CalloutCard";
import { WiHumidity } from "weather-icons-react";
import { WiDaySunny } from "weather-icons-react";
import { WiSunrise } from "weather-icons-react";
import { WiSunset } from "weather-icons-react";

import "./Callouts.css";
function Callouts({ weatherData }) {
  function convertUnixTimeToReadable(unixTimestamp) {
    // Convert Unix timestamp to milliseconds
    const date = new Date(unixTimestamp * 1000);

    // Get hours, minutes, and seconds
    let hours = date.getHours();
    const minutes = "0" + date.getMinutes(); // Add leading zero if minutes < 10
    const seconds = "0" + date.getSeconds(); // Add leading zero if seconds < 10

    // Determine AM/PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Format the time
    const formattedTime = hours + ":" + minutes.substr(-2) + " " + ampm;

    return formattedTime;
  }
  return (
    <div className="callouts">
      <div className="first mx-[10px]">
        <CalloutCard
          icon={WiHumidity}
          title={"Humidiy"}
          info={`${weatherData?.main?.humidity}%`}
        />
        <CalloutCard icon={WiDaySunny} title={"UV Index"} info={"0 of 10"} />
      </div>
      <div className="second">
        <CalloutCard
          icon={WiSunrise}
          title={"Sunrise"}
          info={convertUnixTimeToReadable(weatherData?.sys.sunrise)}
        />
        <CalloutCard
          icon={WiSunset}
          title={"Sunset"}
          info={convertUnixTimeToReadable(weatherData?.sys.sunset)}
        />
      </div>
    </div>
  );
}

export default Callouts;
