import React, { createContext, useReducer } from "react";
import { axieReducer } from "./axieReducer";

// estado inicial
export const axieInitialState = {
  energyEnemy: 3,
  enemies: {
    enemyOne: {},
    enemyTwo: {},
    enemyThree: {},
  },
  allies: {
    allieOne: {},
    allieTwo: {},
    allieThree: {},
  },
  enemyHistory: {},
  myHistory: {},
};

// crear contexto
export const AxieContext = createContext({});

// componente proveedor del estado
export const AxieProvider = ({ children }) => {
  const [axieState, dispatch] = useReducer(axieReducer, axieInitialState);

  const addEnergy = (count) => {
    dispatch({ type: "addEnergy", payload: count });
  };

  const removeEnergy = (count) => {
    dispatch({ type: "removeEnergy", payload: count });
  };

  return (
    <AxieContext.Provider
      value={{
        axieState,
        addEnergy,
        removeEnergy,
      }}
    >
      {children}
    </AxieContext.Provider>
  );
};
