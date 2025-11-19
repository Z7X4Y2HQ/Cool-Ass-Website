import React from "react";

export const TextContent = ({ children, paddingTop, marginBottom }) => {
  const style = {
    fontSize: "1.76vw",
    color: "white",
    textAlign: "justify",
    wordWrap: "normal",
    ...(paddingTop && { paddingTop }),
    ...(marginBottom && { marginBottom }),
  };

  return <div style={style}>{children}</div>;
};

