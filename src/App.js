import React, { Component } from "react";
// import RowChart from "./RowChart";
import TestThing from "./TestThing";
// import Circle from "./Circle";
import "./App.scss";
import * as d3 from "d3";

class App extends Component {
  componentDidMount() {
    d3.select("#canvas")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 25)
      .attr("height", 25)
      .attr("fill", "green");
  }

  render() {
    return (
      <div className="mainPage">
        <h1>MAIN PAGE</h1>
        <TestThing height={600} width={600} numOfCircles={4}/>
        
      </div>
    );
  }
}

export default App;
