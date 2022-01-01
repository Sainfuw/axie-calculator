import React from "react";
import { AllieCard } from "./AllieCard";

export const AllieCards = ({ position }) => {
  return (
    <div className="cards">
      <AllieCard position={position} card={2} />
      <AllieCard position={position} card={3} />
      <AllieCard position={position} card={4} />
      <AllieCard position={position} card={5} />
    </div>
  );
};
