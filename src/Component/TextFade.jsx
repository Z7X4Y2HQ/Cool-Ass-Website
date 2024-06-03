import React, { useState, useEffect } from "react";
import "../App.css";

const FadeText = () => {
  const [wordIndex, setwordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const words = ["Hello", "Hola", "Bonjour", "Ciao", "안녕하세요", "こんにちは", "مرحبا", "Salam"];
  const interval = 2700;

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFade(false), interval / 2);
    const wordTimeout = setTimeout(() => {
      setwordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setFade(true);
    }, interval);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(wordTimeout);
    };
  }, [wordIndex, interval, words.length]);

  return (
    <div className={`fade-text ${fade ? "fade-in" : "fade-out"}`}>{words[wordIndex] + ","}</div>
  );
};

export default FadeText;
