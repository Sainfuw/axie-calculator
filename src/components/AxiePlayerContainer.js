import React from "react";
import { AxieBoxPlayer } from "./AxieBoxPlayer";
import { AllieCards } from "./AllieCards";
import { DamageCalculator } from "./DamageCalculator";

export const AxiePlayerContainer = ({ position }) => {
  return (
    <div className="axie-container">
      <DamageCalculator position={position} />
      <AxieBoxPlayer position={position} />
      <AllieCards position={position} />
    </div>
  );
};
