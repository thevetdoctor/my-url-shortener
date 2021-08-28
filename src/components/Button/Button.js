import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ value, handleClick }) => {
  return (
    <button data-testid="button" className="btn" onClick={handleClick}>
      {value}
    </button>
  );
};
export default Button;
Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
};
