import React, { useContext, useState, useEffect } from "react";
import { EnemyContext } from "../context/EnemyContext";

export const AxieBoxEnemy = ({ position }) => {
  const { enemyState } = useContext(EnemyContext);
  const [axie, setAxie] = useState(null);
  // const [totalDamage, setTotalDamage] = useState(0);

  // useEffect(() => {
  //   const values = enemyState.damageCalculator.usedCards;
  //   setTotalDamage(
  //     Object.values(values).reduce((sum, allie) => sum + allie.total, 0)
  //   );
  // }, [enemyState]);

  const {
    enemies: { enemyOne, enemyTwo, enemyThree },
  } = enemyState;

  useEffect(() => {
    if (position === "front") {
      setAxie(enemyOne);
    } else if (position === "middle") {
      setAxie(enemyTwo);
    } else if (position === "back") {
      setAxie(enemyThree);
    }
  }, [enemyOne, enemyTwo, enemyThree, position]);

  // const handleAxieClicked = () => {
  //   setFocus(axie);
  // };

  return (
    <div
      className="axie-box"
      style={
        enemyState.focus && enemyState.focus.id === axie.id
          ? { backgroundColor: "#3D435B" }
          : { backgroundColor: "#242735" }
      }
    >
      {/* <div */}
      {/*   className="total-damage" */}
      {/*   style={ */}
      {/*     enemyState.focus && enemyState.focus.id === axie.id */}
      {/*       ? { display: "flex" } */}
      {/*       : { display: "none" } */}
      {/*   } */}
      {/* > */}
      {/*   <span className="total-damage-text">{totalDamage}</span> */}
      {/* </div> */}
      <div className="axie-info">
        {true && (
          <div className="axie-stats left">
            <div>
              <span className="badge bg-success">Health</span>
              <br />
              <span className="badge-stats health-color">
                {axie && axie.stats?.hp && `${axie.stats?.hp * 6 + 150}`}
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
          // onClick={handleAxieClicked}
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
    </div>
  );
};
