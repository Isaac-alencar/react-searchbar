import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/globalStyles.ts";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { SearchProvider } from "./providers/SearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchProvider>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <GlobalStyles />
        <App />
      </StyleSheetManager>
    </SearchProvider>
  </React.StrictMode>
);
