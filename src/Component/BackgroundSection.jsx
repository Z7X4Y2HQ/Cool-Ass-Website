import React from "react";

export const BackgroundSection = ({ image, position = "", children }) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: `center ${position || "top"}`,
    width: "100vw",
    backgroundRepeat: "no-repeat",
    flexShrink: 0,
    transition: "0s",
  };

  return <div style={bgStyle}>{children}</div>;
};

