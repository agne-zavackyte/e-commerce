import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { LocationProvider } from "./contexts/location.context";
import "normalize.css";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocationProvider>
        <Routes />
      </LocationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
