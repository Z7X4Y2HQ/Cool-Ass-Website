import React, { useState, useEffect } from "react";
import "../App.css";

export const FadeText = (props) => {
  const [wordIndex, setwordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [temp, setTemp] = useState(0);

  const interval = 2700;

  setTimeout(() => {
    setTemp(1);
  }, 0);

  useEffect(() => {
    setTimeout(
      () => {
        const fadeTimeout = setTimeout(() => setFade(false), interval / 2);
        const wordTimeout = setTimeout(() => {
          setwordIndex((prevIndex) => (prevIndex + 1) % props.array.length);
          setFade(true);
        }, interval);
        return () => {
          clearTimeout(fadeTimeout);
          clearTimeout(wordTimeout);
        };
      },
      temp == 0 ? 3000 : 0
    );
  }, [wordIndex, interval, props.array.length]);

  return (
    <div className={`${props.class} ${fade ? "fade-in" : "fade-out"}`}>
      {props.array[wordIndex]}
    </div>
  );
};
