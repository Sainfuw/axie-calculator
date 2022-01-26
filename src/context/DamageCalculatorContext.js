import React, { createContext, useReducer } from "react";
import { damageCalculatorReducer } from "./damageCalculatorReducer";

// estado inicial
export const DamageCalculatorInitialState = {
  focus: null,
  damageCalculator: {
    usedCards: {
      allieOne: { cards: [], bonus: false, total: 0 },
      allieTwo: { cards: [], bonus: false, total: 0 },
      allieThree: { cards: [], bonus: false, total: 0 },
    },
  },
};

// crear contexto
export const DamageCalculatorContext = createContext({});

// componente proveedor del estado
export const DamageCalculatorProvider = ({ children }) => {
  const [damageCalculatorState, dispatch] = useReducer(
    damageCalculatorReducer,
    DamageCalculatorInitialState
  );

  const setBonus = (allie) => {
    dispatch({ type: "setBonus", payload: allie });
  };

  const setDamageCalculatorTotal = (allie, total) => {
    dispatch({ type: "setDamageCalculatorTotal", payload: { allie, total } });
  };

  const addCardCalculator = (axie) => {
    dispatch({ type: "addCardCalculator", payload: axie });
  };

  const setTotalDamage = (num) => {
    dispatch({ type: "setTotalDamage", payload: num });
  };

  const setFocus = (axie) => {
    dispatch({ type: "setFocus", payload: axie });
  };

  return (
    <DamageCalculatorContext.Provider
      value={{
        setBonus,
        setDamageCalculatorTotal,
        addCardCalculator,
        setTotalDamage,
        setFocus,
        damageCalculatorState,
      }}
    >
      {children}
    </DamageCalculatorContext.Provider>
  );
};
