import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import ProgressBar from "./ProgressBar";

export default class App extends Component {
  state = { count: 0 };
  updateProgress = count => {
    this.setState({ count: count });
  };
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <ProgressBar count={this.state.count} />
          <Header />
          <Form updateProgress={this.updateProgress} />
        </div>
      </div>
    );
  }
}
