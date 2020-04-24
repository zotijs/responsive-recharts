import React from "react";

const withMockData = (data) => (Component) => (...props) => {
  return <Component {...props} data={data} />;
};

export default withMockData;
