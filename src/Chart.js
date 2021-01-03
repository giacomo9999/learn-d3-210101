import React from "react";
// import * as d3 from "d3";

const chart = (props) => {
  const graphicData = () => {
    const circleArray = [];
    for (let i = 1; i <= props.chartData; i++) {
      circleArray.push(
        <circle
          key={"circ_" + i}
          cx={i * 70}
          cy="50"
          r="30"
          onClick={() => console.log("clicked.")}
        />
      );
    }
    return circleArray;
  };

  const chartOut = (
    <div id="svgcontainer">
      <svg id="theSVG" width={props.width} height={props.height}>
        {graphicData()}
      </svg>
    </div>
  );

  return chartOut;
};

export default chart;
