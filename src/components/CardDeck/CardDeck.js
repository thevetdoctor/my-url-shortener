import React from "react";

import Card from "../Card/Card";
import recordIcon from "../../images/icon-detailed-records.svg";
import brandIcon from "../../images/icon-brand-recognition.svg";
import fullyCustomIcon from "../../images/icon-fully-customizable.svg";
import "./CardDeck.scss";

const CardDeck = () => {
  const brandText =
    "Boost your brand recognition with each click. Genetic links don't mean a thing. Branded links help instill confidence in your content.";
  const recordsText =
    "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.";
  const customizableText =
    "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement";
  return (
    <div data-testid="deck" className="card-deck">
      <Card
        srcLink={brandIcon}
        altText="brand recognition"
        cardTitle="Brand Recognition"
        cardBody={brandText}
      />
      <Card
        srcLink={recordIcon}
        altText="detailed records"
        cardTitle="Detailed Records"
        cardBody={recordsText}
      />
      <Card
        srcLink={fullyCustomIcon}
        altText="fully customizable"
        cardTitle="Fully Customizable"
        cardBody={customizableText}
      />
    </div>
  );
};
export default CardDeck;
