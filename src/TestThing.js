import React from "react";
import * as d3 from "d3";

const testThing = (props) => {
  const testBox = (
    <div>
      <svg
        // id="svgcontainer"
        id="one"
        width={props.width}
        height={props.height}
        // style={{
        //   backgroundColor: "pink",
        //   border: "2px solid gold",
        // }}
      >
        <circle cx="40" cy="50" r="40"></circle>
        <circle cx="130" cy="50" r="40"></circle>
        <circle cx="220" cy="50" r="40"></circle>
        <circle cx="310" cy="50" r="40"></circle>
      </svg>

      <br />
      <br />
      <svg
        // id="svgcontainer"
        className="oink"
        id="two"
        width={props.width}
        height={props.height}
        // style={{
        //   backgroundColor: "pink",
        //   border: "2px solid gold",
        // }}
      >
        <circle cx="40" cy="50" r="40"></circle>
        <circle cx="130" cy="50" r="40"></circle>
        <circle cx="220" cy="50" r="40"></circle>
        <circle cx="310" cy="50" r="40"></circle>
      </svg>
    </div>
  );

  return testBox;
};

export default testThing;
