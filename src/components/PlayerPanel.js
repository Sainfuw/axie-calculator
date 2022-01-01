import React from "react";
import { AxiePlayerContainer } from "./AxiePlayerContainer";

export const PlayerPanel = () => {
  return (
    <div className="player-panel">
      <AxiePlayerContainer position={"front"} />
      <AxiePlayerContainer position={"middle"} />
      <AxiePlayerContainer position={"back"} />
    </div>
  );
};
