import React, { useContext, useState, useEffect } from "react";
import { AxieContext } from "../context/AxieContext";

export const Card = ({ position, card }) => {
  const { axieState } = useContext(AxieContext);
  const [axie, setAxie] = useState({});
  const [cardImage, setCardImage] = useState("");
  const [cardName, setCardName] = useState("");

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

  useEffect(() => {
    if (axie && axie.hasOwnProperty("parts")) {
      setCardImage(axie.parts[card].abilities[0].backgroundUrl);
      setCardName(axie.parts[card].name);
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
    ></div>
  );
};
