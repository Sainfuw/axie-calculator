import React from "react";
import { AxieBoxEnemy } from "./AxieBoxEnemy";
import { EnemyCards } from "./EnemyCards";

export const AxieEnemyContainer = ({ position }) => {
  return (
    <div className="axie-container">
      <EnemyCards position={position} />
      <AxieBoxEnemy position={position} />
    </div>
  );
};
