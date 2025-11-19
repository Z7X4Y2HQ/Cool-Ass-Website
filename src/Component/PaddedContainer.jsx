import React from "react";

export const PaddedContainer = ({ children, paddingTop = "5.8vw" }) => {
  const style = {
    paddingLeft: "9.3vw",
    paddingTop,
    paddingRight: "6vw",
  };

  return <div style={style}>{children}</div>;
};

