import React from "react";
import { EnergyContainer } from "./EnergyContainer";
import { DamageCalculator } from "./DamageCalculator";

export const InfoPanel = () => {
  return (
    <div className="info-panel">
      <button className="btn btn-danger button-restart">Restart</button>
      <DamageCalculator />
      <EnergyContainer />
      <button className="btn btn-primary button-restart">Next Turn</button>
    </div>
  );
};
