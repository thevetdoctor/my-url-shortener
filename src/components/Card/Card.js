import React from "react";
import PropTypes from "prop-types";

import FeatureIcon from "../FeatureIcon/FeatureIcon";
import "./Card.scss";

const Card = ({ srcLink, altText, cardTitle, cardBody }) => {
  return (
    <div data-testid="card" className="card">
      <FeatureIcon srcLink={srcLink} iconName={altText} />
      <h3>{cardTitle}</h3>
      <p>{cardBody}</p>
    </div>
  );
};
export default Card;

Card.propTypes = {
  srcLink: PropTypes.string,
  altText: PropTypes.string,
  cardTitle: PropTypes.string,
  cardBody: PropTypes.string,
};
