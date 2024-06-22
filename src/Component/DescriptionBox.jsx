import React, { useState } from "react";
import { MousePosition } from "./MousePosition";
import "../App.css";

export const DescriptionBox = (props) => {
  let top = MousePosition().MouseY;
  let left = MousePosition().MouseX;

  return (
    <div
      className="hoverBox"
      style={{
        opacity: props.hover.hover ? "1" : "0",
        top: top,
        left: left,
        margin: "-0.7vw",
      }}
    >
      {props.hover.name}
    </div>
  );
};
