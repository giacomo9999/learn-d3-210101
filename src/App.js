import React, { Component } from "react";
// import RowChart from "./RowChart";
import TestThing from "./TestThing";
import "./App.scss";
import * as d3 from "d3";

class App extends Component {
  componentDidMount() {
    d3.select("rect:nth-child(2").style("fill", "white");
  }

  render() {
    return (
      <div className="mainPage">
        <h1>MAIN PAGE</h1>
        <TestThing height={500} width={700} />
      </div>
    );
  }
}

export default App;
