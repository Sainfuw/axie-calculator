import React from "react";
import { AxieBoxEnemy } from "./AxieBoxEnemy";
import { Cards } from "./Cards";

export const AxieEnemyContainer = ({ position }) => {
  return (
    <div className="axie-container">
      <Cards />
      <AxieBoxEnemy position={position} />
    </div>
  );
};
