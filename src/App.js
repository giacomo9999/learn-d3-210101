import React, { Component } from "react";
// import RowChart from "./RowChart";
import TestThing from "./TestThing";
import "./App.scss";
import * as d3 from "d3";

class App extends Component {
  state = { testThingHeight: 600, testThingWidth: 600, numberOfCircles: 6 };
  
  componentDidMount() {
    d3.select("circle").attr("fill", "deeppink");
  }

  changeStuff() {
    const svg = d3.select("#thaNotoriousSVG");

    svg.style("background", "blue");

    svg
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
        <TestThing
          height={this.state.testThingHeight}
          width={this.state.testThingWidth}
          numOfCircles={this.state.numberOfCircles}
        />
        <button onClick={this.changeStuff}>CHANGE STUFF</button>
      </div>
    );
  }
}

export default App;
