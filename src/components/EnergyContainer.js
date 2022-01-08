import React, { useContext } from "react";
import { AxieContext } from "../context/AxieContext";

export const EnergyContainer = () => {
  const {
    axieState,
    addEnergy,
    removeEnergy,
    restartEnergy,
    nextTurn,
    restartTurns,
  } = useContext(AxieContext);

  const handleNextTurn = () => {
    addEnergy(2);
    nextTurn();
  };

  const restartGame = () => {
    restartEnergy();
    restartTurns();
  };

  return (
    <div className="energy-container">
      <button className="btn btn-info button-control" onClick={restartGame}>
        Restart
      </button>
      <button className="circle-control" onClick={() => removeEnergy(1)}>
        <span style={{ marginBottom: "13px" }}>-</span>
      </button>
      <div className="energy-display">
        <span style={{ marginBottom: "2px" }}>{axieState.energyEnemy}</span>
      </div>
      <button className="circle-control" onClick={() => addEnergy(1)}>
        <span style={{ marginBottom: "10px" }}>+</span>
      </button>
      <button
        className="btn btn-primary button-control"
        onClick={handleNextTurn}
      >
        Next Turn
      </button>
    </div>
  );
};
