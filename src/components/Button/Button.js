import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ value }) => {
  return (
    <button data-testid="button" className="btn">
      {value}
    </button>
  );
};
export default Button;
Button.propTypes = {
  value: PropTypes.string,
};
