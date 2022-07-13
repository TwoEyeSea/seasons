import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

const SeasonDisplay = (props) => {
  console.log(props.lat);
  return <div>{props.lat}</div>;
};

export default SeasonDisplay;
