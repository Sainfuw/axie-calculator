import React from "react";
import { Card } from "./Card";

export const Cards = ({ position }) => {
  return (
    <div className="cards">
      <Card position={position} card={2} />
      <Card position={position} card={3} />
      <Card position={position} card={4} />
      <Card position={position} card={5} />
    </div>
  );
};
