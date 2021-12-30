import React, { createContext, useReducer } from "react";
import { axieReducer } from "./axieReducer";

import { getAxieInfo } from "../api/queries";

// estado inicial
export const axieInitialState = {
  energyEnemy: 3,
  enemyFocused: null,
  enemyHistory: {},
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
  damageCalculator: {
    usedCards: {
      axieOne: { count: 0, bonus: false },
      axieTwo: { count: 0, bonus: false },
      axieThree: { count: 0, bonus: false },
    },
    totalDamage: 0,
  },
  totalDamage: 0,
  myHistory: {},
};

// crear contexto
export const AxieContext = createContext({});

// componente proveedor del estado
export const AxieProvider = ({ children }) => {
  const [axieState, dispatch] = useReducer(axieReducer, axieInitialState);

  const setTotalDamage = (num) => {
    dispatch({ type: "setTotalDamage", payload: num });
  };

  const setEnemyFocused = (axie) => {
    dispatch({ type: "setEnemyFocused", payload: axie });
  };

  const addEnemieOne = async (id) => {
    const res = await getAxieInfo(id);
    dispatch({ type: "addEnemieOne", payload: res });
    return res;
  };

  const fillOtherAxies = async (enemies) => {
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

  return (
    <AxieContext.Provider
      value={{
        setTotalDamage,
        setEnemyFocused,
        axieState,
        addEnergy,
        removeEnergy,
        addEnemieOne,
        fillOtherAxies,
      }}
    >
      {children}
    </AxieContext.Provider>
  );
};
