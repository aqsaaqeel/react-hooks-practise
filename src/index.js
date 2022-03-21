import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./cart-context";
import { ThemeProvider } from "./theme-context";
import { LocalisationProvider } from "./localise-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocalisationProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </LocalisationProvider>
  </StrictMode>,
  rootElement
);
