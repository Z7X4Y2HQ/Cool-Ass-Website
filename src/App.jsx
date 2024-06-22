import React, { useState, useEffect, useRef, useReducer } from "react";

import { FiHome, FiImage, FiUser, FiCamera } from "react-icons/fi";
import { MdFormatUnderlined } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { FaHighlighter } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { LuGamepad2 } from "react-icons/lu";
import { LuSun } from "react-icons/lu";

import { useIntersectionObserver } from "./Component/useIntersectionObserver";
import { useHorizontalScroll } from "./Component/Horizontal Scroll";
import { SideBarButton } from "./Component/SideBarButton";
import { Polaroid } from "./Component/polaroid";
import { FadeText } from "./Component/TextFade";

import Kiznaiver from "./Assets/Kiznaiver.jpg";
import Laptop from "./Assets/laptop.jpg";
import Stadia from "./Assets/stadia.jpg";
import Bakery from "./Assets/Bakery.jpg";
import Anime from "./Assets/Anime.jpg";
import Moon from "./Assets/Moon.jpg";
import RWBY from "./Assets/rwby.jpg";
import Sky from "./Assets/sky.jpg";
import Me from "./Assets/me.png";

import "./App.css";

const Important = (props) => {
  return (
    <>
      <span style={{ transition: "0.2s" }} className={props.class}>
        {props.text}
      </span>{" "}
    </>
  );
};
const Heading = (props) => {
  return (
    <div>
      <span
        style={{
          display: "block",
          color: "blanchedalmond",
          fontSize: "4.5vw",
          lineHeight: 0,
          textAlign: props.alignment,
          margin: props.margin,
          opacity: "0",
          animation: "fade-in 1.5s forwards",
          animationDelay: props.delay,
        }}
      >
        {props.heading}
      </span>
    </div>
  );
};

function App() {
  const [highlighted, setHighlighted] = useState({
    class: "",
    setting: "Highlightn't",
  });
  const [underlined, setUnderlined] = useState({
    class: "",
    setting: "Underline",
  });

  const scrollRef = useHorizontalScroll();

  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "안녕하세요",
    "こんにちは",
    "مرحبا",
    "Salam",
  ];

  const web = [
    "HTML",
    "CSS",
    "PHP",
    "Bootstrap",
    "Tailwind CSS",
    "MySQL",
    "XAMPP",
    "MS SQL",
    "React",
    "JavaScript",
    "React Native",
    "Express",
    "MongoDB",
  ];

  const game = ["Unity", "C#"];

  const [ref, isVisible] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();

  useEffect(() => {
    if (isVisible) {
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible2) {
    }
  }, [isVisible2]);

  const BGImage = (img, position) => {
    return {
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: `center ${position == "" ? "top" : position}`,
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
      <div className="sideBar">
        <div className="sidebarNav">
          <SideBarButton link="#home" name="Home" icon={<FiHome className="icons" />} />
          <SideBarButton link="#web" name="Web" icon={<GiSpiderWeb className="icons" />} />
          <SideBarButton link="#game" name="Game" icon={<LuGamepad2 className="icons" />} />
          <SideBarButton link="#" name="Photography" icon={<FiCamera className="icons" />} />
          <SideBarButton link="#" name="Writing" icon={<IoBookOutline className="icons" />} />
        </div>
        <div className="sidebarNav">
          <SideBarButton
            setHighlighted={setHighlighted}
            setUnderlined={setUnderlined}
            name={underlined.setting}
            icon={<MdFormatUnderlined className="icons" />}
          />
          <SideBarButton
            setHighlighted={setHighlighted}
            setUnderlined={setUnderlined}
            name={highlighted.setting}
            icon={<FaHighlighter className="icons" />}
          />
          <SideBarButton name="Theme" icon={<LuSun className="icons" />} />
          <SideBarButton name="User" icon={<FiUser className="icons" />} />
        </div>
      </div>
      <div ref={scrollRef} className="scroll-container">
        <div style={BGImage(Bakery)}>
          <div id="home" className="overlayContainer">
            <FadeText class="greeting-text" array={greetings} />
            <div className="intros">
              <div
                style={{
                  paddingLeft: "9.3vw",
                  paddingTop: "4vw",
                  paddingRight: "6vw",
                }}
              >
                <Polaroid delay="3.8s" float="right" image={Me} Title="Z7X4Y2HQ" />
                <div
                  style={{
                    fontSize: "1.76vw",
                    color: "white",
                    textAlign: "justify",
                    wordWrap: "normal",
                  }}
                >
                  <span style={FadeInDelay(3.5)}>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      href="https://github.com/Z7X4Y2HQ"
                    >
                      <Important class={"highlightedText"} text="Z7X4Y2HQ" />
                    </a>
                    <Important
                      class={underlined.class}
                      text="cracking knuckles while staring at an empty canvas of pages"
                    />
                    <Important
                      class={highlighted.class}
                      text={`"How to start talking about myself?"`}
                    />
                    <Important
                      class={underlined.class}
                      text="A question he often asked himself when being interviewed by HRs."
                    />
                    <Important
                      class={highlighted.class}
                      text={`"How does one introduce himself?"`}
                    />
                    <Important
                      class={underlined.class}
                      text="thinking back to what his Psychology teacher once said in the introductory class"
                    />
                    <Important class={highlighted.class} text={`"Your name and age don't `} />
                    <Important
                      class={highlighted.class}
                      text={`define who you are, your interests, hobbies, passion and skills do"`}
                    />
                    {highlighted.class == "" && (
                      <Important
                        class={underlined.class}
                        text="Realising that it has been 12 seconds and he has not spoken a single word"
                      />
                    )}
                    {highlighted.class == "highlightedText" && (
                      <Important
                        class={underlined.class}
                        text="Realising that it has been 12 seconds and he has not spoken a single word he
                    replies"
                      />
                    )}
                  </span>
                  <Polaroid delay="4.1s" float="left" image={Laptop} Title="T460" />
                  <a
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    href="https://github.com/Z7X4Y2HQ"
                  >
                    <Heading
                      delay="4.4s"
                      margin="2.3vw 0 0vw 0"
                      heading="Z7X4Y2HQ"
                      alignment="center"
                    />
                  </a>
                  <br />
                  <span style={FadeInDelay(4.7)}>
                    {highlighted.class == "" && (
                      <>
                        <Important class={underlined.class} text="he replies" />
                        <Important
                          class={"highlightedText"}
                          text={`"My name is Areeb and I'm ${
                            new Date().getFullYear() - 2001
                          } years old and i've recently`}
                        />
                        <Important
                          class={"highlightedText"}
                          text={`completed my bachelor's in CS from COMSATS and..."`}
                        />
                      </>
                    )}
                    {highlighted.class == "highlightedText" && (
                      <>
                        <Important
                          class={"highlightedText"}
                          text={`"My name is Areeb and I'm ${
                            new Date().getFullYear() - 2001
                          } years old and i've recently completed`}
                        />
                        <Important
                          class={"highlightedText"}
                          text={`my bachelor's in CS from COMSATS and..."`}
                        />
                      </>
                    )}
                    <Important
                      class={underlined.class}
                      text="and he speaks! because he didn't want to give a bad impression by staying quiet."
                    />
                    <Important
                      class={highlighted.class}
                      text={`"Don't just introduce yourself, talk about yourself"`}
                    />
                    <Important
                      class={underlined.class}
                      text="interrupts the interviewer, breaking Z7X4Y2HQ's confidence."
                    />
                    <Important
                      class={highlighted.class}
                      text={`"How does one introduce himself?"`}
                    />
                    <Important class={underlined.class} text="he thought to himself..." />
                    <Important
                      class={highlighted.class}
                      text={`"You mean like my interests or past experience?"`}
                    />
                    <Important
                      class={underlined.class}
                      text="his voice cracks, to which the interviewer tries to relax him by saying"
                    />

                    {highlighted.class == "" && (
                      <Important class={highlighted.class} text={`"Don't worry, this isn't a`} />
                    )}
                    {highlighted.class == "highlightedText" && (
                      <Important
                        class={highlighted.class}
                        text={`"Don't worry, this isn't a hard interview"`}
                      />
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={BGImage(Sky, "bottom")}>
          <div id="home" className="overlayContainer">
            <div className="intros">
              <div
                style={{
                  paddingLeft: "9.3vw",
                  paddingRight: "6vw",
                }}
              >
                <Polaroid delay="0s" float="left" image={Moon} Title="Purple Sky" />
                <Polaroid delay="0s" float="left" image={Stadia} Title="Stadia Controller" />
                <div
                  style={{
                    fontSize: "1.76vw",
                    color: "white",
                    textAlign: "justify",
                    wordWrap: "normal",
                  }}
                >
                  <span style={FadeInDelay(0)}>
                    {highlighted.class == "" && (
                      <Important
                        class={underlined.class}
                        text={`hard interview" So much for Keeping composure...`}
                      />
                    )}
                    {highlighted.class == "highlightedText" && (
                      <Important
                        class={underlined.class}
                        text={`So much for Keeping composure...`}
                      />
                    )}
                    <Important class={highlighted.class} text={`"Take a few minutes to `} />
                    <Important
                      class={highlighted.class}
                      text={`relax and we'll continue the interview then"`}
                    />
                    <Important
                      class={underlined.class}
                      text="So much for first impression... overthinking different ways he could have
                    started talking about himself, thinking if he should talk first or they will, 3
                    minutes pass by and the interview begins again and it was just them questioning
                    some things from his CV and stuff."
                    />{" "}
                    <br />
                    <Important class={"highlightedText"} text="2019" />
                    <Important
                      class={underlined.class}
                      text=", college ended, with nothing better to do, he decided to learn"
                    />
                    <Important class={"highlightedText"} text="Wordpress Elementor" />
                    <Important class={"highlightedText"} text="Adobe PhotoShop" />
                    <Important class={underlined.class} text="and" />
                    <Important class={"highlightedText"} text="illustrator" />
                    <Important
                      class={underlined.class}
                      text=" for logos and brochures. Also started 
                      learning "
                    />
                    <Important class={"highlightedText"} text="Javascript" />
                    <Important class={underlined.class} text="till his University started in" />
                    <Important class={"highlightedText"} text="2020" />
                    <Important class={underlined.class} text=" But a month later" />
                    <Important class={highlighted.class} text={"Corona"} />
                    <Important class={underlined.class} text="arrived... Stuck at home, taking" />
                    <Important class={highlighted.class} text={"online classes"} />
                    <Important class={underlined.class} text=", he spent the next" />
                    <Important class={highlighted.class} text={"1 and a half year"} />
                    <Important
                      class={underlined.class}
                      text="like this. But he didn't waste all that time, worked on improving his"
                    />
                    <Important class={"highlightedText"} text={"progamming fundamentals"} />
                    <Important class={underlined.class} text={"and"} />
                    <Important class={"highlightedText"} text={"logic Building"} />
                    <Important
                      class={underlined.class}
                      text=", decided to copy MyAnimeList, made a"
                    />
                    <Important class={"highlightedText"} text={"CRUD website"} />
                    <Important class={underlined.class} text={"using"} />
                    <Important class={"highlightedText"} text={"HTML"} />
                    <Important class={"highlightedText"} text={"CSS"} />
                    <Important class={"highlightedText"} text={"PHP"} />
                    <Important class={"highlightedText"} text={"MySQL"} />.
                    <Important class={underlined.class} text={"By the end of"} />
                    <Important class={"highlightedText"} text={"2021"} />
                    <Important class={underlined.class} text={", he took part in an online"} />
                    <Important class={"highlightedText"} text={"writing contest"} />
                    <Important class={underlined.class} text={"where he wrote his first"} />
                    <Important class={"highlightedText"} text={"novel"} />
                    <Important class={underlined.class} text={"which was approximately"} />
                    <Important class={"highlightedText"} text={"75,000 words"} />
                    <Important class={underlined.class} text={"long."} />
                    <Important class={"highlightedText"} text={"2022"} />
                    <Important class={underlined.class} text="came" />
                    <Important
                      class={highlighted.class}
                      text={`and... hm, Z7X4Y2HQ is calling me on the phone... yes? Yes i did. I was about to 
                        start on 2022- OH... I'm sorry... No i`}
                    />
                    <Important
                      class={highlighted.class}
                      text={`Understand, I won't make that mistake aga- HUH no Wait, HEY... He umm... he just fired me for writing about him in Third`}
                    />
                    <Important
                      class={highlighted.class}
                      text={`Third Person Perspective... he said he hates that "SHIT" and will be taking over from here on... `}
                    />
                    <br />
                    {/* <Important class={"highlightedText"} text="DISCLAIMER" />
                    <Important
                      class={"highlightedText"}
                      text={`"This doesn't meet any industry standards or whatever. It was just him playing around, implementing different things he knew`}
                    />
                    <Important
                      class={"highlightedText"}
                      text={`he could. Nor it has some advanced or complex new tech, Its just React with CSS,  and Maybe some backend in the future`}
                    />
                    <Important class={"highlightedText"} text={`who knows."`} />
                    <Important
                      class={highlighted.class}
                      text={`"Maybe i should make a Visual Novel out of this" `}
                    />
                    <Important class={underlined.class} text={`he thought.`} /> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={BGImage(Kiznaiver)}>
          <div id="web" className="overlayContainer">
            <div ref={ref} style={{ position: "absolute" }}>
              <div className="intros">
                <FadeText class="fade-text" array={web} />
                <div
                  style={{
                    paddingLeft: "9.3vw",
                    paddingTop: "4vw",
                    paddingRight: "6vw",
                  }}
                >
                  <Polaroid delay="0.6s" float="right" image={Stadia} Title="Stadia Controller" />
                  <Polaroid delay="0.9s" float="left" image={Moon} Title="Purple Sky" />
                  <div
                    style={{
                      fontSize: "1.76vw",
                      color: "white",
                      textAlign: "justify",
                      wordWrap: "normal",
                    }}
                  >
                    <span style={FadeInDelay(1.2)}>
                      nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Nulla vehicula lectus ligula, vel faucibus dui vulputate
                      quis. Etiam nec aliquam libero, non blandit sapien. Class aptent taciti
                      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula lectus
                      ligula, vel faucibus dui vulputate quis. Etiam nec aliquam libero. nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla vehicula lectus ligula, vel faucibus dui vulputate quis.aliquam libero,
                      non blandit sapien aliquam libero, non blandit sapien aliquam libero, as{" "}
                      <br />
                      Class aptent taciti ad litora torquent per conubia vulputate.
                      <Heading
                        delay="0.3s"
                        margin="-2vw 0 2vw 0"
                        heading="Web Development"
                        alignment="right"
                      />
                      aliquam libero, non blandit sapien. Class aptent taciti sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={BGImage(RWBY)}>
          <div id="game" className="overlayContainer">
            <div ref={ref2} style={{ position: "absolute" }}>
              <div className="intros">
                <FadeText class="fade-text" array={game} />
                {/* <Heading delay="0s" heading="Game Development" alignment="center" /> */}
                <div
                  style={{
                    paddingLeft: "9.3vw",
                    paddingTop: "4vw",
                    paddingRight: "6vw",
                  }}
                >
                  <Polaroid
                    delay="0s"
                    margin="0.6vw 1.3vw 0 0"
                    float="left"
                    image={Stadia}
                    Title="Stadia Controller"
                  />
                  <Polaroid
                    delay="0s"
                    margin="0.6vw 1.3vw 0 0"
                    float="left"
                    image={Moon}
                    Title="Purple Sky"
                  />
                  <div
                    style={{
                      fontSize: "1.76vw",
                      color: "white",
                      textAlign: "justify",
                      wordWrap: "normal",
                      marginBottom: "-4vw",
                    }}
                  >
                    <span style={FadeInDelay(0)}>
                      nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Nulla vehicula lectus ligula, vel faucibus dui vulputate
                      quis. Etiam nec aliquam libero, non blandit sapien. Class aptent taciti
                      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula lectus
                      ligula, vel faucibus dui vulputate quis. Etiam nec aliquam libero. nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla vehicula lectus ligula, vel dui vulputate quis. Etiam nec aliquam{" "}
                      <span
                        style={{
                          fontSize: "4.06vw",
                          float: "left",
                          marginRight: "1.4vw",
                          color: "blanchedalmond",
                        }}
                      >
                        Game Development
                      </span>
                      libero, non blandit sapien. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
