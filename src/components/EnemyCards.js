import React from "react";
import { EnemyCard } from "./EnemyCard";

export const EnemyCards = ({ position }) => {
  return (
    <div className="cards">
      <EnemyCard position={position} card={2} />
      <EnemyCard position={position} card={3} />
      <EnemyCard position={position} card={4} />
      <EnemyCard position={position} card={5} />
    </div>
  );
};
