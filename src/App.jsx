import React, { useState } from "react";

import { useHorizontalScroll } from "./Component/Horizontal Scroll";
import useWindowDimensions from "./Component/useWindowDimensions";
import FadeText from "./Component/TextFade";

import Kiznaiver from "./Assets/Kiznaiver.jpg";
import Anime from "./Assets/Anime.jpg";
import RWBY from "./Assets/rwby.jpg";

import "./App.css";

function App() {
  const { width, height } = useWindowDimensions();
  let imgheight = height;
  let imgWidth = Math.round(imgheight * (16 / 9));

  const realWidth = window.screen.width * window.devicePixelRatio;
  const realHeight = window.screen.height * window.devicePixelRatio;

  const scrollRef = useHorizontalScroll();

  const BGImage = (img) => {
    return {
      backgroundImage: `url(${img})`,
      backgroundSize: "contain",
      height: height > 0.562962963 * realHeight ? imgWidth : width,
      width: width > 0.796875 * realWidth ? width : imgWidth,
      backgroundRepeat: "no-repeat",
      flexShrink: 0,
    };
  };

  return (
    <>
      <div className="sideBar">
        <div className="sidebarNav">
          <button className="sidebarButton">R</button>
          <button className="sidebarButton">E</button>
          <button className="sidebarButton">A</button>
          <button className="sidebarButton">L</button>
        </div>
        <div className="sidebarThemeToggle">
          <button className="sidebarButton">D</button>
        </div>
      </div>
      <div ref={scrollRef} className="scroll-container">
        <div style={BGImage(Anime)}>
          <div className="overlayContainer">
            <FadeText />
          </div>
        </div>
        <div style={BGImage(Kiznaiver)}></div>
        <div style={BGImage(RWBY)}></div>
      </div>
    </>
  );
}

export default App;
