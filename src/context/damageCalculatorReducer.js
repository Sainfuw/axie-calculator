export const damageCalculatorReducer = (state, action) => {
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
    default:
      return state;
  }
};
