import "./seasonDisplay.css";
import React from "react";

// Helper Functions and Config objects typically go at the top of the file in React convention.
// The Functional Component is at the bottom.
// Config object
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun ",
  },
  winter: {
    text: "Brr it's cold!",
    iconName: "snowflake ",
  },
};

// Helper function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

// Functional Component
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      {/* Formatting tip to save time down the line -> make the className the same as the component name */}
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
