import React, { useContext, useState, useEffect } from "react";
import { EnemyContext } from "../context/EnemyContext";

export const EnemyCard = ({ position, card }) => {
  const { enemyState } = useContext(EnemyContext);
  const [axie, setAxie] = useState({});
  const [cardImage, setCardImage] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardEnergy, setCardEnergy] = useState("");

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

  useEffect(() => {
    if (axie && axie.hasOwnProperty("parts")) {
      setCardImage(axie.parts[card].abilities[0].backgroundUrl);
      setCardName(axie.parts[card].name);
      setCardEnergy(axie.parts[card].abilities[0].energy);
    }
  }, [cardImage, cardName, axie, card]);

  const handleCardClick = () => {
    console.log("clickeando:", cardName);
  };

  return (
    <div
      className="custom-card axie-image"
      onClick={handleCardClick}
      style={{
        backgroundImage: `url('${
          cardImage !== "" ? cardImage : "../images/axiebackground.png"
        }')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "95%",
        backgroundPosition: "0px 14px",
      }}
    >
      <p
        style={{
          color: "white",
          margin: `14px ${cardEnergy === 1 ? "9px" : "8px"}`,
          fontWeight: "bold",
          textShadow: "2px 2px #000000",
        }}
      >
        {cardEnergy}
      </p>
    </div>
  );
};
