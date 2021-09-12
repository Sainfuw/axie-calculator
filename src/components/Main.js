import React from "react";

import { InfoPanel } from "./InfoPanel";
import { PlayerPanel } from "./PlayerPanel";
import { EnemyPanel } from "./EnemyPanel";

export const Main = () => {
  return (
    <div className="main">
      <EnemyPanel />
      <InfoPanel />
      <PlayerPanel />
    </div>
  );
};
