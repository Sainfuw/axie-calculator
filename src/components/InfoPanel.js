import React, { useState, useContext } from "react";
import { AxieContext } from "../context/AxieContext";
import { EnergyContainer } from "./EnergyContainer";
import { getOwnerAxies } from "../api/queries";

export const InfoPanel = () => {
  const [enemyAxieId, setEnemyAxieId] = useState("");
  const { addEnemieOne, fillOtherEnemies, addAllieOne, fillOtherAllies } =
    useContext(AxieContext);
  const [allieAxieId, setAllieAxieId] = useState("");

  const handleEnemyChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    setEnemyAxieId(value);
  };

  const handleGetEnemyAxie = async () => {
    const res = await addEnemieOne(enemyAxieId);
    res && getEnemyAxies(res.owner, res.id);
  };

  const getEnemyAxies = async (ownerId, id) => {
    const res = await getOwnerAxies(ownerId);
    const axiesArray = res.filter((axie) => axie.id !== id);
    if (axiesArray.length === 2) {
      fillOtherEnemies(axiesArray.map((axie) => axie.id));
    } else {
      // dibujar modal con la lista de axies
    }
    console.log(axiesArray);
  };

  const handleAllieChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    setAllieAxieId(value);
  };

  const handleGetAllieAxie = async () => {
    const res = await addAllieOne(allieAxieId);
    res && getAllieAxies(res.owner, res.id);
  };

  const getAllieAxies = async (ownerId, id) => {
    const res = await getOwnerAxies(ownerId);
    const axiesArray = res.filter((axie) => axie.id !== id);
    if (axiesArray.length === 2) {
      fillOtherAllies(axiesArray.map((axie) => axie.id));
    } else {
      // dibujar modal con la lista de axies
    }
    console.log(axiesArray);
  };

  return (
    <div className="info-panel">
      <button className="btn btn-info button-restart">Restart</button>
      <div className="axie-options">
        <button className="btn btn-success mx-2" onClick={handleGetAllieAxie}>
          MyID
        </button>
        <input
          type="text"
          className="form-control"
          value={allieAxieId}
          onChange={handleAllieChange}
        />
      </div>
      <EnergyContainer />
      <div className="axie-options">
        <button className="btn btn-danger mx-2" onClick={handleGetEnemyAxie}>
          EnemyID
        </button>
        <input
          type="text"
          className="form-control"
          value={enemyAxieId}
          onChange={handleEnemyChange}
        />
      </div>

      <button className="btn btn-primary button-restart">Next Turn</button>
    </div>
  );
};
