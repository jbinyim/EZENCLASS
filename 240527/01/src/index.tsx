import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App01 from "./App01";
import App02 from "./App02";
import App03 from "./App03";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(125deg, #e09, #e0e);
  }
  li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    {/* <App /> */}
    <App03 />
  </>
);
