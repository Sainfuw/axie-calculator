export const axieReducer = (state, action) => {
  switch (action.type) {
    case "addEnemieOne":
      return {
        ...state,
        enemies: { enemyOne: action.payload },
      };
    case "addEnergy":
      return {
        ...state,
        energyEnemy: state.energyEnemy + action.payload,
      };
    case "removeEnergy":
      return {
        ...state,
        energyEnemy: state.energyEnemy - action.payload,
      };
    default:
      return state;
  }
};
