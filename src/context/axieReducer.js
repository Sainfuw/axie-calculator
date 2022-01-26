export const axieReducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
