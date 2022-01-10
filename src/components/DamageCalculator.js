import React, { useContext, useEffect, useState } from "react";
import { AxieContext } from "../context/AxieContext";
import calculateDamage from "../helpers/calculateDamage";

export const DamageCalculator = ({ position }) => {
  const { axieState, addCardCalculator, setBonus } = useContext(AxieContext);
  const [calculatedDamage, setCalculatedDamage] = useState({
    cards: [],
    total: { plant: 0, aquatic: 0, beast: 0 },
  });

  const getAllie =
    position === "front"
      ? "allieOne"
      : position === "middle"
      ? "allieTwo"
      : "allieThree";

  const bonus = axieState.damageCalculator.usedCards[getAllie].bonus;

  useEffect(() => {
    const cards = axieState.damageCalculator.usedCards[getAllie]?.cards;
    const plantClasses = ["Plant", "Reptile", "Dusk"];
    const aquaticClasses = ["Aquatic", "Bird", "Dawn"];

    const cardsPlayed = cards?.map((card) => {
      const info = [card, axieState, cards.length, bonus, getAllie];
      return {
        name: card.name,
        aquatic: plantClasses.includes(card.class)
          ? calculateDamage("Plant", "Aquatic", ...info)
          : aquaticClasses.includes(card.class)
          ? calculateDamage("Aquatic", "Aquatic", ...info)
          : calculateDamage("Beast", "Aquatic", ...info),
        beast: plantClasses.includes(card.class)
          ? calculateDamage("Plant", "Beast", ...info)
          : aquaticClasses.includes(card.class)
          ? calculateDamage("Aquatic", "Beast", ...info)
          : calculateDamage("Beast", "Beast", ...info),
        plant: plantClasses.includes(card.class)
          ? calculateDamage("Plant", "Plant", ...info)
          : aquaticClasses.includes(card.class)
          ? calculateDamage("Aquatic", "Plant", ...info)
          : calculateDamage("Beast", "Plant", ...info),
      };
    });

    const plant = cardsPlayed?.reduce(
      (sum, card) => sum + parseInt(card.plant),
      0
    );
    const aquatic = cardsPlayed?.reduce(
      (sum, card) => sum + parseInt(card.aquatic),
      0
    );
    const beast = cardsPlayed?.reduce(
      (sum, card) => sum + parseInt(card.beast),
      0
    );

    setCalculatedDamage({
      cards: cardsPlayed,
      total: { plant, aquatic, beast },
    });
  }, [position, axieState, getAllie, bonus]);

  const handleResetClick = () => {
    const usedCards = axieState.damageCalculator.usedCards;

    setCalculatedDamage({
      cards: [],
      total: { plant: 0, aquatic: 0, beast: 0 },
    });

    addCardCalculator({
      ...usedCards,
      [getAllie]: {
        ...usedCards[getAllie],
        cards: [],
        total: 0,
      },
    });
  };

  const handleBonusChange = () => {
    setBonus({ allie: getAllie, bonus: !bonus });
  };

  return (
    <div className="card-damage">
      <div className="top-options">
        <button className="reset-start" onClick={handleResetClick}>
          X
        </button>
        <div className="form-check form-switch">
          <span>Bonus?</span>
          <input
            className="form-check-input"
            type="checkbox"
            value={bonus}
            onChange={handleBonusChange}
          />
        </div>
      </div>
      <table
        id="damageTable"
        style={{
          borderCollapse: "collapse",
          width: "70%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <thead>
          <tr
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              padding: "5px",
            }}
          >
            <td style={{ minWidth: "120px" }}>Card</td>
            <td style={{ minWidth: "80px" }}>
              Plant
              <br />
              Reptile
              <br />
              Dusk
            </td>
            <td style={{ minWidth: "80px" }}>
              Bird
              <br />
              Aquatic
              <br />
              Dawn
            </td>
            <td style={{ minWidth: "80px" }}>
              Bug
              <br />
              Beast
              <br />
              Mech
            </td>
          </tr>
          {calculatedDamage?.cards?.map((card, index) => (
            <tr key={index}>
              <td>{card.name}</td>
              <td>{card.plant}</td>
              <td>{card.aquatic}</td>
              <td>{card.beast}</td>
            </tr>
          ))}
          <tr style={{ borderTop: "thin solid" }}>
            <td>
              <b>Total</b>
            </td>
            <td>
              <b>{calculatedDamage?.total?.plant}</b>
            </td>
            <td>
              <b>{calculatedDamage?.total?.aquatic}</b>
            </td>
            <td>
              <b>{calculatedDamage?.total?.beast}</b>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
