import React from "react";
import { ResponsiveContainer } from "recharts";

const withResponsiveContainer = ({ width = "99%", height = undefined }) => (
  Component
) => (...props) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <Component {...props} />
    </ResponsiveContainer>
  );
};

export default withResponsiveContainer;
