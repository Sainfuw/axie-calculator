import React from "react";
import { AxieBoxPlayer } from "./AxieBoxPlayer";
import { Cards } from "./Cards";

export const AxiePlayerContainer = () => {
  return (
    <div className="axie-container">
      <AxieBoxPlayer />
      <Cards />
    </div>
  );
};
