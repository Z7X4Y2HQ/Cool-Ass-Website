import React from "react";

export const ContentSection = ({ id, children, absolute = false }) => {
  return (
    <div id={id} className="overlayContainer">
      {absolute ? (
        <div style={{ position: "absolute" }}>
          <div className="intros">{children}</div>
        </div>
      ) : (
        <div className="intros">{children}</div>
      )}
    </div>
  );
};

