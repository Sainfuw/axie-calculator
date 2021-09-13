import React, { useContext, useState, useEffect } from "react";
import { AxieContext } from "../context/AxieContext";
import { getOwnerAxies } from "../api/queries";

export const AxieBoxEnemy = ({ position }) => {
  const { axieState, addEnemieOne, fillOtherAxies } = useContext(AxieContext);
  const [enemyAxieId, setEnemyAxieId] = useState("");
  const [axie, setAxie] = useState(null);

  const {
    enemies: { enemyOne, enemyTwo, enemyThree },
  } = axieState;

  useEffect(() => {
    if (position === "front") {
      setAxie(enemyOne);
    } else if (position === "middle") {
      setAxie(enemyTwo);
    } else if (position === "back") {
      setAxie(enemyThree);
    }
  }, [enemyOne, enemyTwo, enemyThree, position]);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    setEnemyAxieId(value);
  };

  const handleGetAxie = async () => {
    const res = await addEnemieOne(enemyAxieId);
    res && getEnemyAxies(res.owner, res.id);
  };

  const getEnemyAxies = async (ownerId, id) => {
    const res = await getOwnerAxies(ownerId);
    const axiesArray = res.filter((axie) => axie.id !== id);
    if (axiesArray.length === 2) {
      fillOtherAxies(axiesArray.map((axie) => axie.id));
    } else {
      // dibujar modal con la lista de axies
    }
    console.log(axiesArray);
  };

  return (
    <div className="axie-box">
      <div className="axie-info">
        {true && (
          <div className="axie-stats left">
            <div>
              <span className="badge bg-success">Health</span>
              <br />
              <span className="badge-stats health-color">
                {axie && axie.stats?.hp}
              </span>
            </div>
            <div>
              <span className="badge bg-warning">Speed</span>
              <br />
              <span className="badge-stats speed-color">
                {axie && axie.stats?.speed}
              </span>
            </div>
          </div>
        )}
        <div
          className="axie-type-image"
          style={
            true
              ? {
                  backgroundImage: `url(${axie && axie.image})`,
                  backgroundSize: "130%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }
              : {}
          }
        ></div>
        {true && (
          <div className="axie-stats right">
            <div>
              <span className="badge bg-purple">Skill</span>
              <br />
              <span className="badge-stats skill-color">
                {axie && axie.stats?.skill}
              </span>
            </div>
            <div>
              <span className="badge bg-danger">Morale</span>
              <br />
              <span className="badge-stats morale-color">
                {axie && axie.stats?.morale}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="axie-options">
        <button className="btn btn-success mx-2" onClick={handleGetAxie}>
          Find
        </button>
        <input type="text" value={enemyAxieId} onChange={handleInputChange} />
        {/* <Select */}
        {/*   className="enemy-select-axie" */}
        {/*   options={axieSelect} */}
        {/*   placeholder="Please select Axie" */}
        {/*   onChange={handleSelectChange} */}
        {/* /> */}
        <button className="btn btn-warning mx-2">Kill</button>
      </div>
    </div>
  );
};
