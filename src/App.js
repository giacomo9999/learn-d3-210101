import React, { Component } from "react";
// import RowChart from "./RowChart";
import Chart from "./Chart";
import "./App.scss";
// import * as d3 from "d3";

class App extends Component {
  state = {
    chartHeight: 200,
    chartWidth: 600,
    chartData: [
      { radius: 20, x: 50, y: 50, color: "red" },
      { radius: 25, x: 150, y: 50, color: "deeppink" },
      { radius: 30, x: 250, y: 50, color: "indigo" },
      { radius: 35, x: 350, y: 50, color: "pink" },
      { radius: 40, x: 450, y: 50, color: "green" },
    ],
  };

  componentDidMount = () => {
    // const svg = d3.select("#theSVG");
    // svg.style("border", "2px solid blue");

    // d3.selectAll("p")
    //   .data(this.state.chartData)
    //   .text((d) => d)
    //   .style("font-size", (d) => d + "px")
    //   .classed("changeColor", (d) => d > 30);
  };

  changeStuff = () => {};

  render() {
    return (
      <div className="container-outer">
        <h1>App</h1>
        <Chart
          height={this.state.chartHeight}
          width={this.state.chartWidth}
          chartData={this.state.chartData}
        />
      </div>
    );
  }
}

export default App;
