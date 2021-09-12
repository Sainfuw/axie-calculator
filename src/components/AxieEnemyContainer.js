import React from "react";
import { AxieBoxEnemy } from "./AxieBoxEnemy";
import { Cards } from "./Cards";

export const AxieEnemyContainer = () => {
  return (
    <div className="axie-container">
      <Cards />
      <AxieBoxEnemy />
    </div>
  );
};
