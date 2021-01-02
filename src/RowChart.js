import React, { Component } from "react";
import * as d3 from "d3";

class RowChart extends Component {
  state = {
    data: [12, 5, 6, 7, 5, 10, 6],
    height: 300,
    width: 700,
    spaceBetweenBars: 20,
  };

  componentDidMount() {
    this.drawChart();
  }

  drawChart = () => {
    let barWidth = Math.round(
      (this.state.width -
        this.state.spaceBetweenBars * (this.state.data.length + 1)) /
        this.state.data.length
    );

    console.log("Bar Width", barWidth);
    console.log(
      "Total space between bars",
      this.state.spaceBetweenBars * (this.state.data.length + 1)
    );

    const svg = d3
      .select(".rowChart")
      .append("svg")
      .attr("width", this.state.width)
      .attr("height", this.state.height);

    svg
      .append("rect") // create rectangle for background color
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "#253536");

    svg
      .selectAll(".svg")
      .data(this.state.data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d, i) =>
          this.state.spaceBetweenBars +
          i * (barWidth + this.state.spaceBetweenBars)
      ) // x co-ordinate
      .attr("y", (d, i) => this.state.height - 20 * d) // y co-ordinate
      .attr("width", barWidth) // width of each bar
      .attr("height", (d, i) => 30 * d) // height of each bar (data, index)
      .attr("fill", "#39D5FF");

    svg
      .selectAll("g.text")
      .data(this.state.data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr(
        "x",
        (d, i) =>
          this.state.spaceBetweenBars +
          i * (barWidth + this.state.spaceBetweenBars)
      )
      .attr("y", (d, i) => this.state.height - 20 * d - 3)
      .attr("fill", "white");
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
