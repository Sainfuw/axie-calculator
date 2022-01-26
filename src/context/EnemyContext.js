import React, { createContext, useReducer } from "react";
import { enemyReducer } from "./enemyReducer";

import { getAxieInfo } from "../api/queries";

// estado inicial
export const enemyInitialState = {
  round: 1,
  energyEnemy: 3,
  enemies: {
    enemyOne: {},
    enemyTwo: {},
    enemyThree: {},
  },
};

// crear contexto
export const EnemyContext = createContext({});

// componente proveedor del estado
export const EnemyProvider = ({ children }) => {
  const [enemyState, dispatch] = useReducer(enemyReducer, enemyInitialState);

  const addEnemieOne = async (id) => {
    const res = await getAxieInfo(id);
    dispatch({ type: "addEnemieOne", payload: res });
    return res;
  };

  const fillOtherEnemies = async (enemies) => {
    dispatch({
      type: "fillOtherEnemies",
      payload: {
        enemyTwo: await getAxieInfo(enemies[0]),
        enemyThree: await getAxieInfo(enemies[1]),
      },
    });
  };

  const addEnergy = (count) => {
    dispatch({ type: "addEnergy", payload: count });
  };

  const removeEnergy = (count) => {
    dispatch({ type: "removeEnergy", payload: count });
  };

  const restartEnergy = () => {
    dispatch({ type: "restartEnergy" });
  };

  const nextTurn = () => {
    dispatch({ type: "nextTurn" });
  };

  const restartTurns = () => {
    dispatch({ type: "restartTurns" });
  };

  return (
    <EnemyContext.Provider
      value={{
        enemyState,
        addEnergy,
        removeEnergy,
        restartEnergy,
        nextTurn,
        restartTurns,
        addEnemieOne,
        fillOtherEnemies,
      }}
    >
      {children}
    </EnemyContext.Provider>
  );
};
