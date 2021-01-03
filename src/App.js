import React, { Component } from "react";
// import RowChart from "./RowChart";
import TestThing from "./TestThing";
import "./App.scss";
import * as d3 from "d3";

class App extends Component {
  componentDidMount() {
    // d3.select("#svgcontainer")
    //   .append("rect") // create rectangle for background color
    //   .attr("width", "50%")
    //   .attr("height", "50%")
    //   .style("fill", "blue");
    // d3.select("rect:nth-child(2").style("fill", "white");
    // d3.select("rect:nth-child(3").style("fill", "green");
    d3.selectAll("circle").style("fill", "indigo");
    d3.selectAll(".oink > circle").style("fill", "yellowgreen");
  }

  render() {
    return (
      <div className="mainPage">
        <h1>MAIN PAGE</h1>
        <TestThing height={100} width={400} />
      </div>
    );
  }
}

export default App;
