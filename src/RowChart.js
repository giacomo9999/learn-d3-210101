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

  chartRef = React.createRef();

  drawChart = () => {
    console.log("Drawing the chart...");
    let margin = {
        top: 20,
        right: 30,
        bottom: 40,
        left: 90,
      },
      width = this.state.width - margin.left - margin.right,
      height = this.state.height - margin.top - margin.bottom;

    // append SVG object to body of the page
    let svg = d3
      .select(".rowChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("class", "axis x")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");
  };

  render() {
    return (
      <div>
        <h1>RowChart Here</h1>
        <div className="rowChart" ref={this.chartRef}></div>
      </div>
    );
  }
}

export default RowChart;
