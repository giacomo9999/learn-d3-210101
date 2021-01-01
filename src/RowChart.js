import React, { Component } from "react";
import * as d3 from "d3";

class RowChart extends Component {
  state = {
    data: [
      { skill: "CSS", value: 80 },
      { skill: "HTML", value: 85 },
      { skill: "JS", value: 74 },
    ],
    yAxisAttribute: "Skill",
    xAxisAttribute: "Value",
    width: 1000,
    height: 400,
  };

  componentDidMount() {
    this.drawChart();
  }

  drawChart = () => {
    const data = [12, 5, 6, 7, 5, 10];

    const svg = d3
      .select(".rowChart")
      .append("svg")
      .attr("width", 700)
      .attr("height", 300)

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 65)
      .attr("y", 0)
      .attr("width", 50)
      .attr("height", (d, i) => d * 20)
      .attr("fill", "green");
  };

  render() {
    return (
      <div>
        <h1>RowChart Here</h1>
        <div className="rowChart"></div>
      </div>
    );
  }
}

export default RowChart;
