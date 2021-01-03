import React from "react";
// import * as d3 from "d3";

const testThing = (props) => {
  const arrayOfCircles = () => {
    const circleArray = [];
    for (let i = 1; i <= props.numOfCircles; i++) {
      circleArray.push(<circle key={"circ_" + i} cx={i * 70} cy="50" r="30" />);
    }
    return circleArray;
  };

  const testBox = (
    <div id="svgcontainer">
      <svg width={props.width} height={props.height}>
      {/* <svg viewBox={`0 0 ${props.width} ${props.height}`}> */}
        {arrayOfCircles()}
      </svg>
    </div>
  );

  return testBox;
};

export default testThing;
