import React, { useState } from "react";

export const AxieBoxPlayer = () => {
  const [axieBaseStats] = useState({
    aquatic: [39, 39, 35, 27],
    beast: [31, 35, 31, 43],
    bird: [27, 43, 35, 35],
    bug: [35, 31, 35, 39],
    plant: [43, 31, 31, 35],
    reptile: [39, 35, 31, 35],
    dawn: [35, 35, 39, 31],
    dusk: [43, 39, 27, 31],
    mech: [31, 39, 43, 27],
  });

  const [selectedAxie] = useState(null);

  return (
    <div className="axie-box">
      <div className="axie-options">
        <button className="btn btn-success mx-2">Presets</button>
        <button className="btn btn-warning mx-2">Kill</button>
      </div>
      <div className="axie-info">
        {selectedAxie && (
          <div className="axie-stats left">
            <div>
              <span className="badge bg-success">Health</span>
              <br />
              <span className="badge-stats health-color">
                {axieBaseStats[selectedAxie][0]}
              </span>
            </div>
            <div>
              <span className="badge bg-warning">Speed</span>
              <br />
              <span className="badge-stats speed-color">
                {axieBaseStats[selectedAxie][1]}
              </span>
            </div>
          </div>
        )}
        <div
          className="axie-type-image"
          style={
            selectedAxie
              ? {
                  backgroundImage: `url(/${selectedAxie}.png)`,
                  backgroundSize: "70%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }
              : {}
          }
        ></div>
        {selectedAxie && (
          <div className="axie-stats right">
            <div>
              <span className="badge bg-purple">Skill</span>
              <br />
              <span className="badge-stats skill-color">
                {axieBaseStats[selectedAxie][2]}
              </span>
            </div>
            <div className="pl-3">
              <span className="badge bg-danger">Morale</span>
              <br />
              <span className="badge-stats morale-color">
                {axieBaseStats[selectedAxie][3]}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
