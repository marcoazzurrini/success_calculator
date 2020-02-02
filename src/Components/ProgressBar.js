import React from "react";

export default function ProgressBar(props) {
  return (
    <div className="progress">
      <div
        style={{ width: `${(props.count / 2) * 100}%` }}
        className="progress__inner"
      ></div>
    </div>
  );
}
