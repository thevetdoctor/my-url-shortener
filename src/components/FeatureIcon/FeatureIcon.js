import React from "react";
import PropTypes from "prop-types";

import "./FeatureIcon.scss";

const FeatureIcon = ({ srcLink, iconName }) => {
  const altName = `${iconName} icon`;
  return (
    <div data-testid="icon" className="feature-icon">
      <img src={srcLink} alt={altName} />
    </div>
  );
};
export default FeatureIcon;

FeatureIcon.propTypes = {
  srcLink: PropTypes.string,
  iconName: PropTypes.string,
};
