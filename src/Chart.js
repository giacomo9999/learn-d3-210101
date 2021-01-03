import React from "react";
// import * as d3 from "d3";

const chart = (props) => {
  const graphicData = () => {
    const dataArray = [];
    for (let i = 1; i <= props.chartData.length; i++) {
      dataArray.push(<p>Blah</p>);
    }
    return dataArray;
  };

  const chartOut = (
    // <div id="svgcontainer">
    //   <svg id="theSVG" width={props.width} height={props.height}>
    //     {graphicData()}
    //   </svg>
    // </div>
    <div id="container-inner">{graphicData()}</div>
  );

  return chartOut;
};

export default chart;
