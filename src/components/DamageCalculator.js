import React, { useContext } from "react";
import { AxieContext } from "../context/AxieContext";

export const DamageCalculator = ({ position }) => {
  const { axieState } = useContext(AxieContext);

  const getAllie = () => {
    return position === "front"
      ? "allieOne"
      : position === "middle"
      ? "allieTwo"
      : "allieThree";
  };

  return (
    <div className="card-damage">
      <table
        id="damageTable"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              padding: "5px",
            }}
          >
            <td style={{ width: "120px" }}>Move</td>
            <td>
              Plant
              <br />
              Reptile
              <br />
              Dusk
            </td>
            <td>
              Bird
              <br />
              Aquatic
              <br />
              Dawn
            </td>
            <td>
              Bug
              <br />
              Beast
              <br />
              Mech
            </td>
          </tr>
          {axieState.damageCalculator.usedCards[`${getAllie()}`].cards.map(
            (card, index) => (
              <tr key={index}>
                <td>{card.name}</td>
                <td title="Crit Dmg NaN">{card.abilities[0].attack}</td>
                <td title="Crit Dmg NaN">{card.abilities[0].attack}</td>
                <td title="Crit Dmg NaN">{card.abilities[0].attack}</td>
              </tr>
            )
          )}
          <tr style={{ borderTop: "thin solid" }}>
            <td>
              <b>Total</b>
            </td>
            <td>
              <b>0</b>
            </td>
            <td>
              <b>0</b>
            </td>
            <td>
              <b>0</b>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
