import React from "react";
import "../App.css";

export function Polaroid(props) {
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
      border: "0.4vw solid brown",
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
      borderRadius: "0.65vw",
    },
    polaroidTitle: {
      color: "black",
      fontSize: "1.34vw",
    },
    polaroidTitleContainer: {
      display: "flex",
      width: "86%",
      alignItems: "center",
      margin: "0.5vw 0",
    },
  };
  return (
    <div style={styles.polaroidContainer}>
      <div style={styles.polarioidIMG}></div>
      <div style={styles.polaroidTitleContainer}>
        <div style={styles.polaroidTitle}>{props.Title}</div>
      </div>
    </div>
  );
}
