import React, { useState, useEffect } from "react";

import { FiHome, FiImage, FiUser } from "react-icons/fi";
import { LuGamepad2 } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { GiSpiderWeb } from "react-icons/gi";

import { useHorizontalScroll } from "./Component/Horizontal Scroll";
import FadeText from "./Component/TextFade";
import { MousePosition } from "./Component/MousePosition";
import { Polaroid } from "./Component/polaroid";

import Kiznaiver from "./Assets/Kiznaiver.jpg";
import Anime from "./Assets/Anime.jpg";
import RWBY from "./Assets/rwby.jpg";
import Stadia from "./Assets/stadia.jpg";
import Moon from "./Assets/Moon.jpg";
import Bakery from "./Assets/Bakery.jpg";

import "./App.css";
import { BiZoomIn } from "react-icons/bi";

const Heading = (props) => {
  return (
    <div>
      <p
        style={{
          color: "blanchedalmond",
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
    </div>
  );
};

function App() {
  const scrollRef = useHorizontalScroll();
  const [hover, setHover] = useState({ hover: false, name: "" });

  let top = MousePosition().MouseY;
  let left = MousePosition().MouseX;

  const BGImage = (img) => {
    return {
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      width: "100vw",
      backgroundRepeat: "no-repeat",
      flexShrink: 0,
      transition: "0s",
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
      <div
        style={{
          position: "absolute",
          opacity: hover.hover ? "1" : "0",
          top: top,
          left: left,
          zIndex: 2,
          backgroundColor: "blanchedalmond",
          borderRadius: "0.65vw",
          fontSize: "1vw",
          margin: "0.6vw",
          padding: "0.4vw 0.6vw",
          color: "black",
          transition: "0.15s",
        }}
      >
        {hover.name}
      </div>
      <div className="sideBar">
        <div className="sidebarNav">
          <button
            onMouseEnter={() => setHover({ hover: true, name: "Home" })}
            onMouseLeave={() => setHover({ hover: false, name: "Home" })}
            className="sidebarButton"
          >
            <FiHome className="icons" />
          </button>
          <button
            onMouseEnter={() => setHover({ hover: true, name: "Web" })}
            onMouseLeave={() => setHover({ hover: false, name: "Web" })}
            className="sidebarButton"
          >
            <GiSpiderWeb className="icons" />
          </button>
          <button
            onMouseEnter={() => setHover({ hover: true, name: "Game" })}
            onMouseLeave={() => setHover({ hover: false, name: "Game" })}
            className="sidebarButton"
          >
            <LuGamepad2 className="icons" />
          </button>
          <button
            onMouseEnter={() => setHover({ hover: true, name: "Gallery" })}
            onMouseLeave={() => setHover({ hover: false, name: "Gallery" })}
            className="sidebarButton"
          >
            <FiImage className="icons" />
          </button>
          <button
            onMouseEnter={() => setHover({ hover: true, name: "Writing" })}
            onMouseLeave={() => setHover({ hover: false, name: "Writing" })}
            className="sidebarButton"
          >
            <IoBookOutline className="icons" />
          </button>
        </div>
        <div className="sidebarNav">
          <button
            onMouseEnter={() => setHover({ hover: true, name: "Theme" })}
            onMouseLeave={() => setHover({ hover: false, name: "Theme" })}
            className="sidebarButton"
          >
            <MdOutlineLightMode className="icons" />
          </button>
          <button
            style={{ borderRadius: "20vw" }}
            onMouseEnter={() => setHover({ hover: true, name: "User" })}
            onMouseLeave={() => setHover({ hover: false, name: "User" })}
            className="sidebarButton"
          >
            <FiUser className="icons" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="scroll-container">
        <div style={BGImage(Bakery)}>
          <div className="overlayContainer">
            <FadeText />
            <div className="intros">
              <div
                style={{
                  paddingLeft: "9.3vw",
                  paddingTop: "4vw",
                  paddingRight: "6vw",
                }}
              >
                <Polaroid
                  delay="3.8s"
                  margin="0.6vw -0px 1.3vw 1.3vw"
                  float="right"
                  image={Stadia}
                  Title="Stadia Controller"
                />
                <div
                  style={{
                    fontSize: "1.76vw",
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
                    margin="0.6vw 1.3vw 1.3vw -0px"
                    float="left"
                    image={Moon}
                    Title="Purple Sky"
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
