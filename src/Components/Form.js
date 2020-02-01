import React, { Component } from "react";
import Questions from "../Questions";
import GoBackSVG from "../img/left-chevron.svg";

export default class Form extends Component {
  state = {
    revenue: "",
    saleWorth: "",
    sessionConversion: "",
    outreachConversion: "",
    count: 0
  };

  handleChange = e => {
    switch (e.target.id) {
      case "revenue":
        this.setState({ revenue: e.target.value });
        break;
      case "saleWorth":
        this.setState({ saleWorth: e.target.value });
        break;
      case "sessionConversion":
        this.setState({
          sessionConversion: e.target.value
        });
        break;
      case "outreachConversion":
        this.setState({
          outreachConversion: e.target.value
        });
        break;
      default:
        console.log("something went wrong");
    }
  };

  updateCount = e => {
    switch (e.dataset.action) {
      case "next":
        if (this.state.count < Questions.length - 1) {
          let newCount = this.state.count + 1;
          this.setState({ count: newCount });
        }
        break;

      case "previous":
        if (this.state.count > 0) {
          let newCount = this.state.count - 1;
          this.setState({ count: newCount });
        }
        break;

      default:
        console.log("something went wrong");
    }
  };

  render() {
    return (
      <form className="calculator__form">
        {Questions[this.state.count].questions.map((question, index) => {
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
                value={this.state.revenue}
                onChange={this.handleChange}
              />
            </div>
          );
        })}
        <div className="calculator__footer">
          <img
            className="calculator__form--previous"
            src={GoBackSVG}
            alt="previous"
            data-action="previous"
            onClick={this.updateCount}
          />

          <button
            onClick={this.updateCount}
            data-action="next"
            className="calculator__footer--btn"
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}
