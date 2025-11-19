import React, { useState } from "react";

import { MdFormatUnderlined } from "react-icons/md";
import { FiHome, FiUser, FiCamera } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { FaHighlighter } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { LuGamepad2, LuSun } from "react-icons/lu";

import { useHorizontalScroll } from "./Component/HorizontalScroll";
import { SideBarButton } from "./Component/SideBarButton";
import { Polaroid } from "./Component/polaroid";
import { FadeText } from "./Component/TextFade";
import { BackgroundSection } from "./Component/BackgroundSection";
import { ContentSection } from "./Component/ContentSection";
import { TextContent } from "./Component/TextContent";
import { PaddedContainer } from "./Component/PaddedContainer";
import { PhoneScreen } from "./Component/PhoneScreen";
import { StoryText } from "./Component/StoryText";

import Kiznaiver from "./Assets/Kiznaiver.jpg";
import Laptop from "./Assets/laptop.jpg";
import Stadia from "./Assets/stadia.jpg";
import Bakery from "./Assets/Bakery.jpg";
import Moon from "./Assets/Moon.jpg";
import RWBY from "./Assets/rwby.jpg";
import Sky from "./Assets/sky.jpg";
import Me from "./Assets/me.png";

import "./App.css";

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
  const [ended, setEnded] = useState(false);
  const [picked, setPicked] = useState(false);
  const [pickUp, setPickUp] = useState(false);
  const [callButtonClass, setCallButtonClass] = useState({
    background: "",
    callerScreen: "pickupButton",
  });

  const [highlighted, setHighlighted] = useState({
    class: "highlightedText",
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

  const FadeInDelay = (delay) => ({
    opacity: "0",
    animation: "fade-in 1.5s forwards",
    animationDelay: `${delay}s`,
  });

  // Story content data structure - Section 1
  const introStory = [
    { text: "Z7X4Y2HQ", style: "highlightedText", link: "https://github.com/Z7X4Y2HQ" },
    { text: "cracking knuckles while staring at an empty canvas of pages", style: "underlined" },
    { text: `"How to start talking about myself?"`, style: "highlighted" },
    { text: "A question he often asked himself when being interviewed by HRs.", style: "underlined" },
    { text: `"How does one introduce himself?"`, style: "highlighted" },
    { text: "thinking back to what his Psychology teacher once said in the introductory class", style: "underlined" },
    { text: `"Your name and age don't `, style: "highlighted" },
    { text: `define who you are, your interests, hobbies, passion and skills do"`, style: "highlighted" },
    {
      condition: "notHighlighted",
      text: "Realising that it has been 12 seconds and he has not spoken a single word",
      style: "underlined"
    },
    {
      condition: "highlighted",
      text: "Realising that it has been 12 seconds and he has not spoken a single word he replies",
      style: "underlined"
    },
  ];

  // Story content data structure - Section 2
  const continueStory = [
    {
      type: "group",
      condition: "notHighlighted",
      children: [
        { text: "he replies", style: "underlined" },
        {
          text: () => `"My name is Areeb and I'm ${new Date().getFullYear() - 2001} years old and i've recently`,
          style: "highlightedText"
        },
        { text: `completed my bachelor's in CS from COMSATS and..."`, style: "highlightedText" },
      ]
    },
    {
      type: "group",
      condition: "highlighted",
      children: [
        {
          text: () => `"My name is Areeb and I'm ${new Date().getFullYear() - 2001} years old and i've recently completed`,
          style: "highlightedText"
        },
        { text: `my bachelor's in CS from COMSATS and..."`, style: "highlightedText" },
      ]
    },
    { text: "and he speaks! because he didn't want to give a bad impression by staying quiet.", style: "underlined" },
    { text: `"Don't just introduce yourself, talk about yourself"`, style: "highlighted" },
    { text: "interrupts the interviewer, breaking Z7X4Y2HQ's confidence.", style: "underlined" },
    { text: `"How does one introduce himself?"`, style: "highlighted" },
    { text: "he thought to himself...", style: "underlined" },
    { text: `"You mean like my interests or past experience?"`, style: "highlighted" },
    { text: "his voice cracks, to which the interviewer tries to relax him by saying", style: "underlined" },
    { condition: "notHighlighted", text: `"Don't worry, this isn't a`, style: "highlighted" },
    { condition: "highlighted", text: `"Don't worry, this isn't a hard interview"`, style: "highlighted" },
  ];

  // Story content data structure - Section 3 (Timeline)
  const timelineStory = [
    { condition: "notHighlighted", text: `hard interview" So much for Keeping composure...`, style: "underlined" },
    { condition: "highlighted", text: `So much for Keeping composure...`, style: "underlined" },
    { text: `"Take a few minutes to `, style: "highlighted" },
    { text: `relax and we'll continue the interview then"`, style: "highlighted" },
    { text: "So much for first impression... overthinking different ways he could have started talking about himself, thinking if he should talk first or they will, 3 minutes pass by and the interview begins again and it was just them questioning some things from his CV and stuff.", style: "underlined" },
    { type: "br" },
    { text: "2019", style: "highlightedText" },
    { text: ", college ended, with nothing better to do, he decided to learn", style: "underlined" },
    { text: "Wordpress Elementor", style: "highlightedText" },
    { text: "Adobe PhotoShop", style: "highlightedText" },
    { text: "and", style: "underlined" },
    { text: "illustrator", style: "highlightedText" },
    { text: " for logos and brochures. Also started learning ", style: "underlined" },
    { text: "Javascript", style: "highlightedText" },
    { text: "till his University started in", style: "underlined" },
    { text: "2020", style: "highlightedText" },
    { text: " But a month later", style: "underlined" },
    { text: "Corona", style: "highlighted" },
    { text: "arrived... Stuck at home, taking", style: "underlined" },
    { text: "online classes", style: "highlighted" },
    { text: ", he spent the next", style: "underlined" },
    { text: "1 and a half year", style: "highlighted" },
    { text: "like this. But he didn't waste all that time, worked on improving his", style: "underlined" },
    { text: "progamming fundamentals", style: "highlightedText" },
    { text: "and", style: "underlined" },
    { text: "logic Building", style: "highlightedText" },
    { text: ", decided to copy MyAnimeList, made a", style: "underlined" },
    { text: "CRUD website", style: "highlightedText" },
    { text: "using", style: "underlined" },
    { text: "HTML", style: "highlightedText" },
    { text: "CSS", style: "highlightedText" },
    { text: "PHP", style: "highlightedText" },
    { text: "MySQL", style: "highlightedText" },
    { text: "By the end of", style: "underlined" },
    { text: "2021", style: "highlightedText" },
    { text: ", he took part in an online", style: "underlined" },
    { text: "writing contest", style: "highlightedText" },
    { text: "where he wrote his first", style: "underlined" },
    { text: "novel", style: "highlightedText" },
    { text: "which was approximately", style: "underlined" },
    { text: "75,000 words", style: "highlightedText" },
    { text: "long.", style: "underlined" },
  ];

  // Story content for when call is not ended
  const callStory = [
    { text: "2022", style: "highlightedText" },
    { text: "came", style: "underlined" },
    { type: "br" },
    { type: "br" },
    { text: `and... hm, Z7X4Y2HQ is calling me on the phone...`, style: "highlightedText" },
  ];

  // Story content for when call ended
  const endedStory = [
    { type: "br" },
    { type: "br" },
    { text: "Seriously... ? ", style: "highlighted" },
    { text: "ತ⁠_⁠ತ", style: "highlighted" },
  ];

  return (
    <>
      <div className="sideBar">
        <div className="sidebarNav">
          <SideBarButton link="#home" name="Home" icon={<FiHome className="icons" />} />
          {picked && (
            <>
              <SideBarButton link="#web" name="Web" icon={<GiSpiderWeb className="icons" />} />
              <SideBarButton link="#game" name="Game" icon={<LuGamepad2 className="icons" />} />
              <SideBarButton link="#" name="Photography" icon={<FiCamera className="icons" />} />
              <SideBarButton link="#" name="Writing" icon={<IoBookOutline className="icons" />} />
            </>
          )}
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
        <BackgroundSection image={Bakery}>
          <div id="home" className="overlayContainer">
            <FadeText class="greeting-text" array={greetings} />
            <div className="intros">
              <PaddedContainer>
              <Polaroid delay="3.8s" float="right" image={Me} Title="Z7X4Y2HQ" />
              <TextContent>
                <span style={FadeInDelay(3.5)}>
                  <StoryText segments={introStory} highlighted={highlighted} underlined={underlined} />
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
                  <StoryText segments={continueStory} highlighted={highlighted} underlined={underlined} />
                </span>
              </TextContent>
            </PaddedContainer>
            </div>
          </div>
        </BackgroundSection>
        <BackgroundSection image={Sky} position="bottom">
          <ContentSection id="home">
            <PaddedContainer paddingTop="0">
              <Polaroid delay="5s" float="left" image={Moon} Title="Purple Sky" />
              <Polaroid delay="5.3s" float="left" image={Stadia} Title="Stadia Controller" />
              <TextContent>
                <span style={FadeInDelay(5.6)}>
                  <StoryText segments={timelineStory} highlighted={highlighted} underlined={underlined} />
                  {!ended && (
                    <>
                      <StoryText segments={callStory} highlighted={highlighted} underlined={underlined} />
                      <span
                        style={{
                          transition: "0.5s",
                        }}
                        className={callButtonClass.background}
                      ></span>
                      <span className={callButtonClass.callerScreen}>
                        {!pickUp && (
                          <span
                            onClick={() => {
                              setCallButtonClass({
                                background: "callerScreenBG",
                                callerScreen: "callerScreen",
                              });
                              setPickUp(true);
                            }}
                            className="highlightedText"
                          >
                            Pick Up?
                          </span>
                        )}
                        {pickUp && (
                          <PhoneScreen
                            onAttend={() => {
                              setPickUp(true);
                              setCallButtonClass({
                                background: "callerScreenBG",
                                callerScreen: "dialogueScreen",
                              });
                            }}
                            onDecline={() => {
                              setEnded(true);
                              setPicked(false);
                              setPickUp(false);
                            }}
                          />
                        )}
                      </span>
                    </>
                  )}
                  {ended && (
                    <StoryText segments={endedStory} highlighted={highlighted} underlined={underlined} />
                  )}
                </span>
              </TextContent>
            </PaddedContainer>
          </ContentSection>
        </BackgroundSection>
        {picked && (
          <>
            <BackgroundSection image={Kiznaiver}>
              <ContentSection id="web" absolute>
                <FadeText class="fade-text" array={web} />
                <PaddedContainer paddingTop="4vw">
                  <Polaroid
                    delay="0.6s"
                    float="right"
                    image={Stadia}
                    Title="Stadia Controller"
                  />
                  <Polaroid delay="0.9s" float="left" image={Moon} Title="Purple Sky" />
                  <TextContent>
                    <span style={FadeInDelay(1.2)}>
                      nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Nulla vehicula lectus ligula, vel faucibus dui vulputate
                      quis. Etiam nec aliquam libero, non blandit sapien. Class aptent taciti
                      sociosqu ad litora torquent per conubia nostra, per inceptos
                      himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                      vehicula lectus ligula, vel faucibus dui vulputate quis. Etiam nec aliquam
                      libero. nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nulla vehicula lectus ligula, vel faucibus
                      dui vulputate quis.aliquam libero, non blandit sapien aliquam libero, non
                      blandit sapien aliquam libero, as <br />
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
                  </TextContent>
                </PaddedContainer>
              </ContentSection>
            </BackgroundSection>
            <BackgroundSection image={RWBY}>
              <ContentSection id="game" absolute>
                <FadeText class="fade-text" array={game} />
                {/* <Heading delay="0s" heading="Game Development" alignment="center" /> */}
                <PaddedContainer paddingTop="4vw">
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
                  <TextContent marginBottom="-4vw">
                    <span style={FadeInDelay(0)}>
                      nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Nulla vehicula lectus ligula, vel faucibus dui vulputate
                      quis. Etiam nec aliquam libero, non blandit sapien. Class aptent taciti
                      sociosqu ad litora torquent per conubia nostra, per inceptos
                      himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                      vehicula lectus ligula, vel faucibus dui vulputate quis. Etiam nec aliquam
                      libero. nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nulla vehicula lectus ligula, vel dui
                      vulputate quis. Etiam nec aliquam{" "}
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
                      libero, non blandit sapien. Class aptent taciti sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </span>
                  </TextContent>
                </PaddedContainer>
              </ContentSection>
            </BackgroundSection>
          </>
        )}
      </div>
    </>
  );
}

export default App;
