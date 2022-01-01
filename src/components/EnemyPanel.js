import React from "react";
import { AxieEnemyContainer } from "./AxieEnemyContainer";

export const EnemyPanel = () => {
  return (
    <div className="enemy-panel">
      <AxieEnemyContainer position={"front"} />
      <AxieEnemyContainer position={"middle"} />
      <AxieEnemyContainer position={"back"} />
    </div>
  );
};
