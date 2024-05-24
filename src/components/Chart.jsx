import React from "react";
import { LineChart } from "@tremor/react";
import "./Chart.css";

const chartdata = [
  {
    date: "01 am",
    Running: 13,
  },
  {
    date: "04 am",
    Running: 11,
  },
  {
    date: "07 am",
    Running: 14,
  },
  {
    date: "01 pm",
    Running: 10,
  },
  {
    date: "04 pm",
    Running: 15,
  },
  {
    date: "07 pm",
    Running: 13,
  },
];

export function Chart() {
  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value} bpm
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="w-[750px]">
      <h3 className="text-sm font-light text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Temperature . Precipitation . Wind
      </h3>
      <LineChart
        className="mt-0 h-40"
        data={chartdata}
        index="date"
        categories={["Running"]}
        colors={["blue"]}
        yAxisWidth={30}
        customTooltip={customTooltip}
      />
    </div>
  );
}

export default Chart;
