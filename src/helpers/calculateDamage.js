const calculateDamage = (
  myClassOld,
  enemyClassOld,
  card,
  axieState,
  cardsCount,
  bonus,
  allie
) => {
  const damage = card.abilities[0].attack;
  const axieClass = axieState.allies[allie]?.class;
  const skill = axieState.allies[allie].stats.skill;
  const morale = axieState.allies[allie].stats.morale;
  const sameClass = axieClass === card.class ? 1.1 : 1;
  const combo = cardsCount > 1 ? skill * 0.55 - 12.5 : 0;
  let critical = parseFloat(
    ((Math.sqrt(morale) * 10 + morale * 0.4 - 18) / 100 + 1).toFixed(2)
  );
  critical = card.name === "Ronin" && cardsCount > 2 ? critical : 1;

  let bonusValue = 1;
  if (bonus && card.name !== "Dual Blade") {
    const splittedDescription = card.abilities[0].description.split(" ");
    if (splittedDescription[0] === "Deal") {
      bonusValue = parseInt(splittedDescription[1]) / 100;
    }
  }

  const myClass = getClass(myClassOld);
  const enemyClass = getClass(enemyClassOld);

  if (
    (myClass === "Plant" && enemyClass === "Aquatic") ||
    (myClass === "Aquatic" && enemyClass === "Beast") ||
    (myClass === "Beast" && enemyClass === "Plant")
  ) {
    return parseInt(damage * 1.15 * sameClass * bonusValue * critical + combo);
  } else if (
    (myClass === "Plant" && enemyClass === "Beast") ||
    (myClass === "Aquatic" && enemyClass === "Plant") ||
    (myClass === "Beast" && enemyClass === "Aquatic")
  ) {
    return parseInt(damage * 0.85 * sameClass * bonusValue * critical + combo);
  } else if (
    (myClass === "Plant" && enemyClass === "Plant") ||
    (myClass === "Aquatic" && enemyClass === "Aquatic") ||
    (myClass === "Beast" && enemyClass === "Beast")
  ) {
    return parseInt(damage * 1 * sameClass * bonusValue * critical + combo);
  }
};

const getClass = (theClass) => {
  return ["Plant", "Dusk", "Reptile"].includes(theClass)
    ? "Plant"
    : ["Beast", "Mech", "Bug"].includes(theClass)
    ? "Beast"
    : "Aquatic";
};

export default calculateDamage;
