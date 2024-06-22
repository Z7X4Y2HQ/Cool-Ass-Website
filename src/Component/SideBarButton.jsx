import React, { useState } from "react";
import { DescriptionBox } from "./DescriptionBox";
import "../App.css";

export const SideBarButton = (props) => {
  const [hover, setHover] = useState({ hover: false, name: "" });

  return (
    <>
      <DescriptionBox hover={hover} />
      <button
        style={{ borderRadius: props.name == "User" ? "20vw" : "" }}
        onClick={() => {
          if (props.name == "Highlightn't") {
            props.setHighlighted({
              class: "",
              setting: "Highlight",
            });
          } else if (props.name == "Underlinen't") {
            props.setUnderlined({
              class: "",
              setting: "Underline",
            });
          } else if (props.name == "Highlight") {
            props.setHighlighted({
              class: "highlightedText",
              setting: "Highlightn't",
            });
          } else if (props.name == "Underline") {
            props.setUnderlined({
              class: "underlinedText",
              setting: "Underlinen't",
            });
          }
        }}
        onMouseEnter={() => setHover({ hover: true, name: props.name })}
        onMouseLeave={() => setHover({ hover: false, name: props.name })}
        className="sidebarButton"
      >
        <a
          style={{ color: "black", fontSize: 0, padding: "0.8vw" }}
          href={props.link}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(props.link).scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {props.icon}
        </a>
      </button>
    </>
  );
};
