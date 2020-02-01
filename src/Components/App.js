import React, { Component } from "react";
import MoneySVG from "../img/money.svg";
import Header from "./Header";
import Form from "./Form";
import ProgressBar from "./ProgressBar";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <img className="calculator__img" src={MoneySVG} alt="money" />
          <ProgressBar />
          <Header />
          <Form />
        </div>
      </div>
    );
  }
}
