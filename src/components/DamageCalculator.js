import React, { useContext } from "react";
import { AxieContext } from "../context/AxieContext";

export const DamageCalculator = () => {
  const { axieState, setTotalDamage } = useContext(AxieContext);

  return (
    <div className="card-damage">
      <h5>Damage Calculator</h5>
      <div className="card-damage-number">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => setTotalDamage(0)}
        >
          X
        </button>
        <h2>{axieState.damageCalculator.totalDamage}</h2>
      </div>
    </div>
  );
};
