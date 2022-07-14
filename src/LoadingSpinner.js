import React from "react";

const Spinner = () => {
  return (
    <div className={"ui segment"}>
      <div className={"ui active dimmer"}>
        <div className={"ui text loader"}>Waiting for Location Permission</div>
      </div>
    </div>
  );
};

export default Spinner;
