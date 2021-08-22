import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import "./BoostSection.scss";

const BoostSection = ({ value }) => {
  return (
    <section data-testid="boost" id="cta">
      <div className="container">
        <h2>{value}</h2>
        <Button value="Get Started" />
      </div>
    </section>
  );
};
export default BoostSection;

BoostSection.propTypes = {
  value: PropTypes.string,
};
