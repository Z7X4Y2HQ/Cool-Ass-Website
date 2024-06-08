import React, { useState, useEffect } from "react";
import "../App.css";

const FadeText = () => {
  const [wordIndex, setwordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [temp, setTemp] = useState(0);

  const words = ["Hello", "Hola", "Bonjour", "Ciao", "안녕하세요", "こんにちは", "مرحبا", "Salam"];
  const interval = 2700;

  setTimeout(() => {
    setTemp(1);
  }, 0);

  useEffect(() => {
    setTimeout(
      () => {
        const fadeTimeout = setTimeout(() => setFade(false), interval / 2);
        const wordTimeout = setTimeout(() => {
          setwordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setFade(true);
        }, interval);
        return () => {
          clearTimeout(fadeTimeout);
          clearTimeout(wordTimeout);
        };
      },
      temp == 0 ? 3000 : 0
    );
  }, [wordIndex, interval, words.length]);

  return (
    <div className={`fade-text ${fade ? "fade-in" : "fade-out"}`}>{words[wordIndex] + ", "}</div>
  );
};

export default FadeText;
