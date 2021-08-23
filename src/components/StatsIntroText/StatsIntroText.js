import React from "react";
import PropTypes from "prop-types";

import "./StatsIntroText.scss";

const StatsIntroText = ({ introTitle, bodyText }) => {
  return (
    <div data-testid="intro-text" className="container">
      <div id="intro-text">
        <h2>{introTitle}</h2>
        <p>{bodyText}</p>
      </div>
    </div>
  );
};
export default StatsIntroText;
StatsIntroText.propTypes = {
  introTitle: PropTypes.string,
  bodyText: PropTypes.string,
};
