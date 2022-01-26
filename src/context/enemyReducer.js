export const enemyReducer = (state, action) => {
  switch (action.type) {
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
    case "restartEnergy":
      return {
        ...state,
        energyEnemy: 3,
      };
    case "nextTurn":
      return {
        ...state,
        round: state.round + 1,
      };
    case "restartTurns":
      return {
        ...state,
        round: 1,
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
