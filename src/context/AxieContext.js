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
      allieOne: { cards: [], bonus: false, total: 0 },
      allieTwo: { cards: [], bonus: false, total: 0 },
      allieThree: { cards: [], bonus: false, total: 0 },
    },
  },
  myHistory: {},
};

// crear contexto
export const AxieContext = createContext({});

// componente proveedor del estado
export const AxieProvider = ({ children }) => {
  const [axieState, dispatch] = useReducer(axieReducer, axieInitialState);

  const setDamageCalculatorTotal = (allie, total) => {
    dispatch({ type: "setDamageCalculatorTotal", payload: { allie, total } });
  };

  const addCardCalculator = (axie) => {
    dispatch({ type: "addCardCalculator", payload: axie });
  };

  const addAllieOne = async (id) => {
    const res = await getAxieInfo(id);
    dispatch({ type: "addAllieOne", payload: res });
    return res;
  };

  const fillOtherAllies = async (allies) => {
    dispatch({
      type: "fillOtherAllies",
      payload: {
        allieTwo: await getAxieInfo(allies[0]),
        allieThree: await getAxieInfo(allies[1]),
      },
    });
  };

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

  return (
    <AxieContext.Provider
      value={{
        setDamageCalculatorTotal,
        addCardCalculator,
        addAllieOne,
        fillOtherAllies,
        setTotalDamage,
        setEnemyFocused,
        axieState,
        addEnergy,
        removeEnergy,
        addEnemieOne,
        fillOtherEnemies,
      }}
    >
      {children}
    </AxieContext.Provider>
  );
};
