import React, { useContext, useState, useEffect, useRef } from "react";
import { AxieContext } from "../context/AxieContext";
import { AxiePIXI } from "./AxiePIXI";

export const AxieBoxPlayer = ({ position }) => {
  const { axieState } = useContext(AxieContext);
  const [axie, setAxie] = useState(null);

  const pixiRef = useRef(null);

  const {
    allies: { allieOne, allieTwo, allieThree },
  } = axieState;

  useEffect(() => {
    if (position === "front") {
      setAxie(allieOne);
    } else if (position === "middle") {
      setAxie(allieTwo);
    } else if (position === "back") {
      setAxie(allieThree);
    }
  }, [allieOne, allieTwo, allieThree, position]);

  useEffect(() => {
    axie?.figure?.model &&
      AxiePIXI({
        model: axie.figure.model,
        position: pixiRef.current,
      });
  }, [axie]);

  return (
    <div className="axie-box">
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
        <div ref={pixiRef} className="axie-type-image"></div>
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
