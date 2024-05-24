import React from "react";
import { WiDaySunny } from "weather-icons-react";
import { Icon } from "@tremor/react";
import "./CalloutCard.css";

function CalloutCard({ icon, title, info }) {
  return (
    <div className="calloutCard mx-auto max-w-xs m-[10px]">
      <div className="flex items-start space-x-6">
        <Icon
          icon={icon}
          color="blue"
          variant="shadow"
          tooltip={title}
          size="xl"
        />
        <div>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {title}
          </p>
          <p className="text-xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {info}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CalloutCard;
