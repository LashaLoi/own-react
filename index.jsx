import React from "./react";
import ReactDom from "./react-dom";

import { App } from "./App";

export const rerender = () => {
  const root = document.getElementById("root");
  root.innerHTML = "";

  ReactDom.render(<App />, root);
};

ReactDom.render(<App />, document.getElementById("root"));
