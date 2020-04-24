import React from "react";
import {
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SizeCalculator } from "components";

const SeasonalityChart = ({ data, ...restProps }) => {
  const epochGenerator = (dateStr) => new Date(dateStr).getTime() / 1000;

  const xFormatter = (seconds) =>
    new Date(seconds * 1000).toLocaleDateString("en-US", { month: "short" });

  const domain = [
    new Date("2012-01-01").getTime() / 1000,
    new Date("2012-12-31").getTime() / 1000,
  ];

  const changedData = data.map((item) => ({
    ...item,
    range: [item.Min, item.Max],
    epoch: epochGenerator(item.ReferenceDate),
  }));
  console.log("rerender");
  return (
    <>
      <SizeCalculator />
      <ResponsiveContainer width="99%" height={400}>
        <ComposedChart data={changedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <XAxis
            dataKey="epoch"
            type="number"
            domain={domain}
            interval={0}
            tickFormatter={xFormatter}
            tickCount={12}
          />
          <YAxis />
          <Area
            type="monotone"
            dataKey="range"
            fill="#b2b2b2 "
            stroke="#b2b2b2 "
            strokeDasharray="3 3"
          />
          <Line
            type="monotone"
            dataKey="Average"
            stroke="#000"
            strokeDasharray="3 3"
          />
          <Line
            type="monotone"
            dataKey="2019"
            connectNulls={true}
            stroke="#38eeff"
          />
          <Line
            type="monotone"
            dataKey="2020"
            connectNulls={true}
            stroke="#000"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="helperlastyear"
            connectNulls={true}
            stroke="#000"
            strokeWidth={3}
            strokeDasharray="3 3"
          />
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default SeasonalityChart;
