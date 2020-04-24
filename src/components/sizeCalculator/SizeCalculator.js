import React from "react";

const SizeCalculator = ({ size, ...restProps }) => {
  const { height, width } = size;

  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        color: "red",
        fontWeight: 400,
      }}
    >{`height: ${height}, width: ${width}`}</div>
  );
};

export default SizeCalculator;
