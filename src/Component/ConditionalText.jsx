import React from "react";

const Important = ({ text, class: className }) => (
  <>
    <span style={{ transition: "0.2s" }} className={className}>
      {text}
    </span>{" "}
  </>
);

export const ConditionalText = ({ condition, whenTrue, whenFalse }) => {
  if (condition && !whenTrue) return null;
  if (!condition && !whenFalse) return null;
  
  const content = condition ? whenTrue : whenFalse;
  
  if (typeof content === "string") {
    return <Important text={content} class="" />;
  }
  
  return <>{content}</>;
};

export { Important };

