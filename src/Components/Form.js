import React, { Component } from "react";
import Questions from "../Questions";
import GoBackSVG from "../img/left-chevron.svg";
import MoneySVG from "../img/money.svg";
import Output from "./Output";

export default class Form extends Component {
  state = {
    revenue: "",
    saleWorth: "",
    sessionConversion: 20,
    outreachConversion: 2,
    count: 0,
    showResults: false
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  updateCount = e => {
    e.preventDefault();
    let newCount = this.state.count;
    switch (e.target.dataset.action) {
      case "next":
        if (this.state.count < Questions.length - 1) {
          this.setState({ count: newCount + 1 });
          this.props.updateProgress(newCount + 1);
        } else if (this.state.count === Questions.length - 1) {
          this.setState({ showResults: true, count: newCount + 1 });
          this.props.updateProgress(newCount + 1);
        }
        break;

      case "previous":
        if (this.state.count > 0) {
          this.setState({ count: newCount - 1, showResults: false });
          this.props.updateProgress(newCount - 1);
        }
        break;

      default:
        console.log("something went wrong");
    }
  };

  render() {
    return (
      <form
        data-action="next"
        onSubmit={this.updateCount}
        className="calculator__form"
      >
        <img
          className={`calculator__img ${
            this.state.showResults === true ? "mobile" : ""
          }`}
          src={MoneySVG}
          alt="money"
        />

        {this.state.showResults === false ? (
          Questions[this.state.count].questions.map((question, index) => {
            return (
              <div key={index}>
                <label className="calculator__form--label">
                  {question.label}
                </label>
                <input
                  className="calculator__form--input"
                  required
                  placeholder={question.placeholder}
                  type="number"
                  id={question.tag}
                  value={this.state[question.tag]}
                  onChange={this.handleChange}
                />
              </div>
            );
          })
        ) : (
          <Output
            revenue={this.state.revenue}
            saleWorth={this.state.saleWorth}
            sessionConversion={this.state.sessionConversion}
            outreachConversion={this.state.outreachConversion}
          />
        )}
        <div className="calculator__footer">
          <img
            className="calculator__form--previous"
            src={GoBackSVG}
            alt="previous"
            data-action="previous"
            onClick={this.updateCount}
          />

          <button
            data-action="next"
            type="submit"
            className="calculator__footer--btn"
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}
