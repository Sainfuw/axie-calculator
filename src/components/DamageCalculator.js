import React, { useContext, useEffect, useState } from "react";
import { AxieContext } from "../context/AxieContext";

export const DamageCalculator = ({ position }) => {
  const { axieState, addCardCalculator } = useContext(AxieContext);
  const [calculatedDamage, setCalculatedDamage] = useState([]);
  const [bonus, setBonus] = useState(false);
  const [getAllie] = useState(
    position === "front"
      ? "allieOne"
      : position === "middle"
      ? "allieTwo"
      : "allieThree"
  );

  useEffect(() => {
    const cards = axieState.damageCalculator.usedCards[`${getAllie}`].cards;
    const axieClass = axieState.allies[`${getAllie}`].class;
    const plantClasses = ["Plant", "Reptile", "Dusk"];
    const fishClasses = ["Aquatic", "Bird", "Dawn"];

    const calculate = (damage, myClass, enemyClass, card) => {
      const skill = axieState.allies[`${getAllie}`].stats.skill;
      const sameClass = axieClass === card.class ? 1.1 : 1;
      const combo = cards.length > 1 ? skill * 0.55 - 12.5 : 0;

      let bonusValue = 1;
      if (bonus) {
        const splittedDescription = card.abilities[0].description.split(" ");
        if (splittedDescription[0] === "Deal") {
          bonusValue = parseInt(splittedDescription[1]) / 100;
        }
      }

      if (
        (myClass === "Plant" && enemyClass === "Fish") ||
        (myClass === "Fish" && enemyClass === "Beast") ||
        (myClass === "Beast" && enemyClass === "Plant")
      ) {
        return parseInt((damage * 1.15 * sameClass + combo) * bonusValue);
      } else if (
        (myClass === "Plant" && enemyClass === "Beast") ||
        (myClass === "Fish" && enemyClass === "Plant") ||
        (myClass === "Beast" && enemyClass === "Fish")
      ) {
        return parseInt((damage * 0.85 * sameClass + combo) * bonusValue);
      } else if (
        (myClass === "Plant" && enemyClass === "Plant") ||
        (myClass === "Fish" && enemyClass === "Fish") ||
        (myClass === "Beast" && enemyClass === "Beast")
      ) {
        return parseInt((damage * 1 * sameClass + combo) * bonusValue);
      }
    };

    const cardsPlayed = cards.map((card) => {
      return {
        name: card.name,
        fish: plantClasses.includes(card.class)
          ? calculate(card.abilities[0].attack, "Plant", "Fish", card)
          : fishClasses.includes(card.class)
          ? calculate(card.abilities[0].attack, "Fish", "Fish", card)
          : calculate(card.abilities[0].attack, "Beast", "Fish", card),
        beast: plantClasses.includes(card.class)
          ? calculate(card.abilities[0].attack, "Plant", "Beast", card)
          : fishClasses.includes(card.class)
          ? calculate(card.abilities[0].attack, "Fish", "Beast", card)
          : calculate(card.abilities[0].attack, "Beast", "Beast", card),
        plant: plantClasses.includes(card.class)
          ? calculate(card.abilities[0].attack, "Plant", "Plant", card)
          : fishClasses.includes(card.class)
          ? calculate(card.abilities[0].attack, "Fish", "Plant", card)
          : calculate(card.abilities[0].attack, "Beast", "Plant", card),
      };
    });

    const plant = cardsPlayed.reduce(
      (sum, card) => sum + parseInt(card.plant),
      0
    );
    const fish = cardsPlayed.reduce(
      (sum, card) => sum + parseInt(card.fish),
      0
    );
    const beast = cardsPlayed.reduce(
      (sum, card) => sum + parseInt(card.beast),
      0
    );

    setCalculatedDamage({
      cards: cardsPlayed,
      total: { plant, fish, beast },
    });
  }, [
    position,
    axieState.allies,
    axieState.damageCalculator.usedCards,
    getAllie,
    bonus,
  ]);

  const handleResetClick = () => {
    const usedCards = axieState.damageCalculator.usedCards;

    setCalculatedDamage({
      cards: [],
      total: { plant: 0, fish: 0, beast: 0 },
    });

    addCardCalculator({
      ...usedCards,
      [getAllie]: {
        ...usedCards[`${getAllie}`],
        cards: [],
        bonus: false,
        total: { plant: 0, fish: 0, beast: 0 },
      },
    });
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
            onChange={() => setBonus((bonus) => !bonus)}
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
              <td>{card.fish}</td>
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
              <b>{calculatedDamage?.total?.fish}</b>
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
