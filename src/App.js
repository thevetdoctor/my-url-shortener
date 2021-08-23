import React from "react";

import Nav from "./components/Nav/Nav";
import HeroSection from "./components/HeroSection/HeroSection";
import StatSection from "./components/StatsSection/StatSection";
import BoostSection from "./components/BoostSection/BoostSection";
import Footer from "./components/Footer/Footer";
import "./styles/App.scss";

const App = () => {
  return (
    <div>
      <Nav />

      <HeroSection />

      <StatSection />

      <BoostSection value="Boost your links today" />

      <Footer />
    </div>
  );
};
export default App;
