import React, { Component } from "react";
// import RowChart from "./RowChart";
import Chart from "./Chart";
import "./App.scss";
import * as d3 from "d3";

class App extends Component {
  state = {
    chartHeight: 400,
    chartWidth: 600,
    chartData: [20, 25, 30, 35, 40],
  };

  componentDidMount() {
    const svg = d3.select("#theSVG");
    svg.style("border", "2px solid blue");
  }

  changeStuff = () => {};

  render() {
    return (
      <div className="mainPage">
        <h1>MAIN PAGE</h1>
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
