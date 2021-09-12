import React from "react";
import { AxieEnemyContainer } from "./AxieEnemyContainer";

export const EnemyPanel = () => {
  return (
    <div className="panels">
      <AxieEnemyContainer position={"front"} />
      <AxieEnemyContainer position={"middle"} />
      <AxieEnemyContainer position={"back"} />
    </div>
  );
};
