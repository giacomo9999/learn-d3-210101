import React from "react";
import * as d3 from "d3";

const testThing = (props) => {
  const testBox = (
    <div>
      <svg
        id="svgcontainer"
        width={props.width}
        height={props.height}
        style={{
          backgroundColor: "pink",
          border: "2px solid gold",
        }}
      >
        <g fill="deeppink" stroke="indigo" strokeWidth="3">
          <rect x="20" y="20" width="50" height="50"></rect>
          <rect x="80" y="20" width="50" height="50"></rect>
          <rect x="140" y="20" width="50" height="50"></rect>
          <rect x="200" y="20" width="50" height="50"></rect>
        </g>
      </svg>
    </div>
  );

  return testBox;
};

export default testThing;
