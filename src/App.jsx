import { useState } from "react";
import "./App.css";
import HeroSection from "./components/hero";
import FeatureSection from "./components/featureSection"

const App = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
    </>
  );
};

export default App;
