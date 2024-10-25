import { useState } from "react";
import "./App.css";
import HeroSection from "./components/hero";
import FeatureSection from "./components/featureSection";
import React from "react";


const App = () => {
  var pic = "./src/assets/Card1.png";
  return (
    <>
      {/* <Card
        imageUrl="./src/assets/Card1.png"
      /> */}
      <HeroSection />
      <FeatureSection />
    </>
  );
};

export default App;
