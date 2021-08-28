import React from "react";

import Button from "../Button/Button";
import heroIllustration from "../../images/illustration-working.svg";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section data-testid="hero" id="hero">
      <div id="hero-text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button value="Get Started" />
      </div>
      <div id="image">
        <img src={heroIllustration} alt="Illustration of someone working" />
      </div>
    </section>
  );
};
export default HeroSection;
