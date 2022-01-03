export const axieReducer = (state, action) => {
  switch (action.type) {
    case "setBonus":
      return {
        ...state,
        damageCalculator: {
          ...state.damageCalculator,
          usedCards: {
            ...state.damageCalculator.usedCards,
            [action.payload.allie]: {
              ...state.damageCalculator.usedCards[`${action.payload.allie}`],
              bonus: action.payload.bonus,
            },
          },
        },
      };
    case "setDamageCalculatorTotal":
      return {
        ...state,
        damageCalculator: {
          ...state.damageCalculator,
          usedCards: {
            ...state.damageCalculator.usedCards,
            [action.payload.allie]: {
              ...state.damageCalculator.usedCards[`${action.payload.allie}`],
              total: action.payload.total,
            },
          },
        },
      };
    case "addCardCalculator":
      return {
        ...state,
        damageCalculator: {
          ...state.damageCalculator,
          usedCards: action.payload,
        },
      };
    case "addAllieOne":
      return {
        ...state,
        allies: { allieOne: action.payload, allieTwo: {}, allieThree: {} },
      };
    case "fillOtherAllies":
      return {
        ...state,
        allies: {
          ...state.allies,
          allieTwo: action.payload.allieTwo,
          allieThree: action.payload.allieThree,
        },
      };
    case "setTotalDamage":
      return {
        ...state,
        totalDamage: action.payload,
      };
    case "setFocus":
      return {
        ...state,
        focus: action.payload,
      };
    case "addEnergy":
      return {
        ...state,
        energyEnemy: state.energyEnemy + action.payload,
      };
    case "removeEnergy":
      return {
        ...state,
        energyEnemy:
          state.energyEnemy === 0 ? 0 : state.energyEnemy - action.payload,
      };
    case "addEnemieOne":
      return {
        ...state,
        enemies: { enemyOne: action.payload, enemyTwo: {}, enemyThree: {} },
      };
    case "fillOtherEnemies":
      return {
        ...state,
        enemies: {
          ...state.enemies,
          enemyTwo: action.payload.enemyTwo,
          enemyThree: action.payload.enemyThree,
        },
      };
    default:
      return state;
  }
};
