import React from "react";
// import * as d3 from "d3";

const chart = (props) => {
  const graphicData = () => {
    const dataArray = [];
    for (let i = 0; i <= props.chartData.length - 1; i++) {
      dataArray.push(
        <circle
          key={"circle_" + i}
          r={props.chartData[i].radius}
          cx={props.chartData[i].x}
          cy={props.chartData[i].y}
          fill={props.chartData[i].color}
        ></circle>
      );
    }

    return dataArray;
  };
  graphicData();

  const chartOut = (
    <div id="svgcontainer">
      <svg id="theSVG" width={props.width} height={props.height}>
        {graphicData()}
      </svg>
    </div>
    // <div id="container-inner">{graphicData()}</div>
  );

  return chartOut;
};

export default chart;
