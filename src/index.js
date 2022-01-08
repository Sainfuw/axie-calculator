import { Application } from "@pixi/app";
import { Renderer } from "@pixi/core";
import { BatchRenderer } from "@pixi/core";
import { TickerPlugin } from "@pixi/ticker";
import { AppLoaderPlugin } from "@pixi/loaders";

import "./helpers/SpinePreparer";
import "pixi-spine";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

Renderer.registerPlugin("batch", BatchRenderer);
Application.registerPlugin(TickerPlugin);
Application.registerPlugin(AppLoaderPlugin);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
