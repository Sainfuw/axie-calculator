import React, { useContext, useState, useEffect } from "react";
import { AxieContext } from "../context/AxieContext";

export const AllieCard = ({ position, card }) => {
  const { axieState, addCardCalculator } = useContext(AxieContext);
  const [axie, setAxie] = useState({});
  const [cardImage, setCardImage] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardEnergy, setCardEnergy] = useState("");

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
    if (axie && axie.hasOwnProperty("parts")) {
      setCardImage(axie.parts[card].abilities[0].backgroundUrl);
      setCardName(axie.parts[card].name);
      setCardEnergy(axie.parts[card].abilities[0].energy);
    }
  }, [cardImage, cardName, axie, card]);

  const handleCardClick = () => {
    const usedCards = axieState.damageCalculator.usedCards;
    const allie = getAllie();
    addCardCalculator({
      ...usedCards,
      [allie]: {
        ...usedCards[`${allie}`],
        cards: [...usedCards[`${allie}`].cards, axie.parts[card]],
      },
    });
  };

  const getAllie = () => {
    return position === "front"
      ? "allieOne"
      : position === "middle"
      ? "allieTwo"
      : "allieThree";
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
