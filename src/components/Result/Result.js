import React from "react";

import Button from "../Button/Button";
import "./Result.scss";

const Result = (props) => {
  console.log(props.fullLink);
  console.log(props.shortenedLink);
  return (
    <div data-testid="result" className="result">
      <span className="fullLink">{props.fullLink}</span>
      <div className="shortenedDetails">
        <span className="shortenedLink">{props.shortenedLink}</span>
        <Button value="Copy"></Button>
      </div>
    </div>
  );
};
export default Result;
