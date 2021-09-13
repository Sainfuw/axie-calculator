import React from "react";
import { AxieBoxEnemy } from "./AxieBoxEnemy";
import { Cards } from "./Cards";

export const AxieEnemyContainer = ({ position }) => {
  return (
    <div className="axie-container">
      <Cards position={position} />
      <AxieBoxEnemy position={position} />
    </div>
  );
};
