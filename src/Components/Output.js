import React from "react";
import WorkSVG from "../img/work.svg";
import CalendarSVG from "../img/calendar.svg";
import CodingSVG from "../img/coding.svg";

export default function Output(props) {
  const numOfSessions = parseInt(
    props.revenue / props.saleWorth / (props.sessionConversion / 100)
  );
  const numOfOutreaches = parseInt(
    numOfSessions / (props.outreachConversion / 100)
  );
  let strategySessionsDaily = numOfSessions / 365;
  if (strategySessionsDaily < 1) {
    let i = 2;
    while (strategySessionsDaily <= 1) {
      strategySessionsDaily *= i;
      i++;
    }
    strategySessionsDaily = `1 strategy session every ${i} days`;
  } else {
    strategySessionsDaily = `${parseInt(strategySessionsDaily)} per day`;
  }

  return (
    <div className="output">
      <section className="output__section">
        <p className="output__paragraph border">
          You will need to do
          <span className="output__paragraph--value"> {numOfSessions} </span>
          strategy sessions, which you'll get by doing
          <span className="output__paragraph--value"> {numOfOutreaches} </span>
          outreaches.
        </p>
        <img className="output__img" src={WorkSVG} alt="work" />
      </section>
      <section className="output__section">
        <p className="output__paragraph">
          That's gonna be
          <span className="output__paragraph--value">
            {" "}
            {parseInt(numOfSessions / 12)}{" "}
          </span>
          strategy sessions and
          <span className="output__paragraph--value">
            {" "}
            {parseInt(numOfOutreaches / 12)}{" "}
          </span>
          outreaches per month.
        </p>
        <img className="output__img" src={CalendarSVG} alt="work" />
      </section>
      <section className="output__section">
        <p className="output__paragraph">
          Let's break it down, here's the road map, you'll need
          <span className="output__paragraph--value">
            {" "}
            {strategySessionsDaily}
          </span>
          , as well as
          <span className="output__paragraph--value">
            {" "}
            {parseInt(numOfOutreaches / 365)}{" "}
          </span>
          outreaches per day.
        </p>
        <img className="output__img" src={CodingSVG} alt="work" />
      </section>
    </div>
  );
}
