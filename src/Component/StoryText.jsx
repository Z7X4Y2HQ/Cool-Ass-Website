import React from "react";

// Individual text segment component
const TextSegment = ({ text, className, link }) => {
  const content = (
    <>
      <span style={{ transition: "0.2s" }} className={className}>
        {text}
      </span>{" "}
    </>
  );

  if (link) {
    return (
      <a
        style={{ textDecoration: "none", color: "white" }}
        target="_blank"
        href={link}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
};

// Main component to render story text from data
export const StoryText = ({ segments, highlighted, underlined }) => {
  return (
    <>
      {segments.map((segment, index) => {
        // Handle conditional rendering
        if (segment.condition !== undefined) {
          const conditionMet = segment.condition === "highlighted" 
            ? highlighted.class === "highlightedText"
            : segment.condition === "notHighlighted"
            ? highlighted.class === ""
            : segment.condition === "ended"
            ? segment.conditionValue
            : segment.condition === "notEnded"
            ? !segment.conditionValue
            : true;

          if (!conditionMet) return null;
        }

        // Handle line breaks
        if (segment.type === "br") {
          return <br key={index} />;
        }

        // Handle wrapper elements (like fragments for grouped conditionals)
        if (segment.type === "group") {
          return (
            <React.Fragment key={index}>
              <StoryText 
                segments={segment.children} 
                highlighted={highlighted} 
                underlined={underlined} 
              />
            </React.Fragment>
          );
        }

        // Determine the className based on style type
        let className = "";
        if (segment.style === "highlighted") {
          className = highlighted.class;
        } else if (segment.style === "underlined") {
          className = underlined.class;
        } else if (segment.style === "highlightedText") {
          className = "highlightedText";
        } else if (segment.style === "custom") {
          className = segment.className;
        }

        // Handle dynamic text (functions)
        const text = typeof segment.text === "function" ? segment.text() : segment.text;

        return (
          <TextSegment
            key={index}
            text={text}
            className={className}
            link={segment.link}
          />
        );
      })}
    </>
  );
};

