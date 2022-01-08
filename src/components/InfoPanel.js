import React, { useContext } from "react";
import { AllieFinder } from "./AllieFinder";
import { EnemyFinder } from "./EnemyFinder";

import { EnergyContainer } from "./EnergyContainer";
import { AxieContext } from "../context/AxieContext";

export const InfoPanel = () => {
  const { axieState } = useContext(AxieContext);
  return (
    <div className="info-panel">
      <div className="damage">
        <EnemyFinder />
        <AllieFinder />
      </div>
      <div className="round">
        <h5>ROUND</h5>
        {axieState.round}
      </div>
      <EnergyContainer />
    </div>
  );
};
