import React, { useState } from "react";

import { useHorizontalScroll } from "./Component/Horizontal Scroll";
import useWindowDimensions from "./Component/useWindowDimensions";
import FadeText from "./Component/TextFade";
import { Polaroid } from "./Component/polaroid";

import Kiznaiver from "./Assets/Kiznaiver.jpg";
import Anime from "./Assets/Anime.jpg";
import RWBY from "./Assets/rwby.jpg";
import Stadia from "./Assets/stadia.jpg";

import "./App.css";

const Heading = (props) => {
  return (
    <p
      style={{
        fontSize: "4.5vw",
        lineHeight: 0,
        textAlign: "center",
        marginTop: "2.3vw",
        marginBottom: "0.5vw",
        opacity: "0",
        animation: "fade-in 1.5s forwards",
        animationDelay: props.delay,
      }}
    >
      {props.heading}
    </p>
  );
};

function App() {
  const [time, setTime] = useState(false);
  setTimeout(() => setTime(true), 5000);

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

  const introContainer = () => {
    return {
      paddingLeft: "180px",
      paddingTop: "130px",
      paddingRight: "100px",
    };
  };

  const FadeInDelay = (delay) => {
    return {
      opacity: "0",
      animation: "fade-in 1.5s forwards",
      animationDelay: delay + "s",
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
            <div className="intros">
              <div
                style={{
                  paddingLeft: "180px",
                  paddingTop: "130px",
                  paddingRight: "100px",
                }}
              >
                <Polaroid
                  delay="3.8s"
                  margin="20px"
                  float="right"
                  image={Stadia}
                  Title="Some Image"
                />
                <div
                  style={{
                    fontSize: "1.8vw",
                    color: "white",
                    textAlign: "justify",
                    wordWrap: "normal",
                  }}
                >
                  <span style={FadeInDelay(3.5)}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula lectus
                    ligula, vel faucibus dui vulputate quis. Etiam nec aliquam libero, non blandit
                    sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vehicula lectus ligula, vel faucibus dui vulputate quis. Etiam nec aliquam
                    libero, non blandit sapien. Class aptent taciti sociosqu ad litora torquent per
                  </span>
                  <Polaroid
                    delay="4.1s"
                    margin="20px"
                    float="left"
                    image={Stadia}
                    Title="Some Image"
                  />
                  <br />
                  <Heading delay="4.4s" heading="Some Heading" />
                  <br />
                  <span style={FadeInDelay(4.7)}>
                    nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla vehicula lectus ligula, vel faucibus dui vulputate quis.
                    Etiam nec aliquam libero, non blandit sapien. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nulla vehicula lectus ligula, vel faucibus
                    dui vulputate quis. Etiam nec aliquam libero.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={BGImage(Kiznaiver)}></div>
        <div style={BGImage(RWBY)}></div>
      </div>
    </>
  );
}

export default App;
