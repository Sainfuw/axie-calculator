import React from "react";
import { AllieFinder } from "./AllieFinder";
import { EnemyFinder } from "./EnemyFinder";

import { EnergyContainer } from "./EnergyContainer";

export const InfoPanel = () => {
  return (
    <div className="info-panel">
      <button className="btn btn-info button-restart">Restart</button>
      <AllieFinder />
      <EnergyContainer />
      <EnemyFinder />
      <button className="btn btn-primary button-restart">Next Turn</button>
    </div>
  );
};
