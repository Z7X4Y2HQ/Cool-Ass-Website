import React, { cloneElement } from "react";
import Kiznaiver from "./Assets/Kiznaiver.jpg";
import Anime from "./Assets/Anime.jpg";
import RWBY from "./Assets/rwby.jpg";
import useWindowDimensions from "./Component/useWindowDimensions";
import "./App.css";

function App() {
  const { width, height } = useWindowDimensions();
  let imgheight = height;
  let imgWidth = Math.round(imgheight * (16 / 9));
  const BGImage = (img) => {
    return {
      backgroundImage: `url(${img})`,
      backgroundSize: "contain",
      height: imgWidth,
      width: width > 1530 ? width : imgWidth,
      backgroundRepeat: "no-repeat",
      flexShrink: 0,
    };
  };

  return (
    <>
      <div
        className="sidebar"
        style={{
          height: height - 30,
        }}
      >
        <button className="sidebarButton">G</button>
        <button className="sidebarButton">G</button>
        <button className="sidebarButton">G</button>
        <button className="sidebarButton">G</button>
      </div>
      <div className="scroll-container">
        <div style={BGImage(Anime)}>
          <div
            className="overlayContainer"
            style={{
              backgroundColor: "#0008",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ color: "white", fontSize: "100px" }}>こんにちは</span>
          </div>
        </div>
        <div style={BGImage(Kiznaiver)}></div>
        <div style={BGImage(RWBY)}></div>
      </div>
    </>
  );
}

export default App;
