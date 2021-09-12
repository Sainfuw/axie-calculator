import React from "react";
import { AxieProvider } from "./context/AxieContext";

import "bootstrap/dist/css/bootstrap.min.css";

import { HistoryLeft } from "./components/HistoryLeft";
import { Main } from "./components/Main";
import { HistoryRight } from "./components/HistoryRight";

const AppState = ({ children }) => {
  return <AxieProvider>{children}</AxieProvider>;
};

const App = () => {
  return (
    <AppState>
      <div className="App main-container">
        <HistoryLeft />
        <Main />
        <HistoryRight />
      </div>
    </AppState>
  );
};

export default App;
