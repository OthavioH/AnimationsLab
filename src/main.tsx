import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Nav from "./components/Navigation/Nav/Nav";
import Router from "./routes/router";
import { GlobalStyles } from "./styles/global.styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
