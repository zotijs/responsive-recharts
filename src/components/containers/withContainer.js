import React from "react";

const withContainer = (containerStyle) => ({ children, ...restProps }) => {
  return <div style={containerStyle}>{children}</div>;
};

export default withContainer;
