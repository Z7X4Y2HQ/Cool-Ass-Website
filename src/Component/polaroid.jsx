import React, { useState } from "react";
import "../App.css";

export function Polaroid(props) {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    polaroidContainer: {
      backgroundColor: "blanchedalmond",
      margin: props.margin,
      flexShrink: 0,
      opacity: "0",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      float: props.float,
      borderRadius: "1vw",
      border: "0.4vw solid #ccbca4",
      borderBottom: "none",
      ...(isHovered && {
        borderBottom: "0.4vw solid #ccbca4",
      }),
      animation: "fade-in 1.5s forwards",
      animationDelay: props.delay,
    },
    polarioidIMG: {
      backgroundColor: "white",
      backgroundImage: `url(${props.image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      width: "17vw",
      height: "19vw",
      ...(isHovered && {
        height: "22.6vw",
      }),
      borderRadius: "0.65vw",
      transition: "0.2s",
    },
    polaroidTitle: {
      color: "black",
      fontSize: "1.34vw",
      ...(isHovered && {
        fontSize: "0vw",
      }),
    },
    polaroidTitleContainer: {
      display: "flex",
      width: "86%",
      alignItems: "center",
      margin: "0.5vw 0",
      ...(isHovered && {
        margin: "0",
      }),
    },
    polaroidOverTitle: {
      fontSize: "0vw",
      backgroundColor: "blanchedalmond",
      display: "inline-block",
      borderRadius: "0.65vw",
      margin: 0,
      padding: "0.35vw 0.45vw",
      opacity: 0,
      color: "black",
      ...(isHovered && {
        fontSize: "1.34vw",
        backgroundColor: "blanchedalmond",
        display: "inline-block",
        borderRadius: "0.65vw",
        margin: "0.6vw",
        padding: "0.35vw 0.45vw",
        opacity: 1,
      }),
    },
  };
  return (
    <div style={styles.polaroidContainer}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={styles.polarioidIMG}
      >
        <div style={styles.polaroidOverTitle}>{props.Title}</div>
      </div>
      <div style={styles.polaroidTitleContainer}>
        <div style={styles.polaroidTitle}>{props.Title}</div>
      </div>
    </div>
  );
}
