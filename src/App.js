import React, { Component } from "react";
// import RowChart from "./RowChart";
import TestThing from "./TestThing";
// import Circle from "./Circle";
import "./App.scss";
import * as d3 from "d3";

class App extends Component {
  componentDidMount() {
    d3.select("circle").attr("fill", "deeppink");
  }

  changeStuff() {
    d3.select("#thaNotoriousSVG").style("background", "blue");

    d3.select("svg")
      .append("circle")
      .attr("r", 20)
      .attr("cx", 300)
      .attr("cy", 300)
      .attr("fill", "yellowgreen");
  }

  render() {
    return (
      <div className="mainPage">
        <h1>MAIN PAGE</h1>
        <TestThing height={600} width={600} numOfCircles={6} />
        <button onClick={this.changeStuff}>CHANGE STUFF</button>
      </div>
    );
  }
}

export default App;
