import React, { Component } from "react";
import RowChart from "./RowChart";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="mainPage">
        MAIN PAGE
        <RowChart />
      </div>
    );
  }
}

export default App;
