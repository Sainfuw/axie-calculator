import React, { createContext, useReducer } from "react";
import { axieReducer } from "./axieReducer";

import { getAxieInfo } from "../api/queries";

// estado inicial
export const axieInitialState = {
  allies: {
    allieOne: {},
    allieTwo: {},
    allieThree: {},
  },
};

// crear contexto
export const AxieContext = createContext({});

// componente proveedor del estado
export const AxieProvider = ({ children }) => {
  const [axieState, dispatch] = useReducer(axieReducer, axieInitialState);

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

  return (
    <AxieContext.Provider
      value={{
        addAllieOne,
        fillOtherAllies,
        axieState,
      }}
    >
      {children}
    </AxieContext.Provider>
  );
};
