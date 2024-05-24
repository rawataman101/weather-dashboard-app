import React from "react";
import DayCard from "./DayCard";
import "./Days.css";
import {
  WiDaySunny,
  WiDayCloudyWindy,
  WiDayCloudy,
  WiSandstorm,
  WiStrongWind,
} from "weather-icons-react";

function Days() {
  return (
    <div className="days">
      <DayCard day={"MON"} icon={WiDaySunny} temp={"41°"} />
      <DayCard day={"TUE"} icon={WiDayCloudyWindy} temp={"35°"} />
      <DayCard day={"WED"} icon={WiDayCloudy} temp={"40°"} />
      <DayCard day={"THR"} icon={WiDaySunny} temp={"43°"} />
      <DayCard day={"FRI"} icon={WiSandstorm} temp={"40°"} />
      <DayCard day={"SAT"} icon={WiStrongWind} temp={"35°"} />
      <DayCard day={"SUN"} icon={WiDaySunny} temp={"39°"} />
    </div>
  );
}

export default Days;
