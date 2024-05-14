import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import APP01 from "./APP01";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <APP01 />
  </ThemeProvider>
);
