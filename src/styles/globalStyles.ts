import { createGlobalStyle } from "styled-components";

import "@fontsource-variable/inter";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #dedbd2;
    --primary-color: #3f37c9;
    --grey: #edede9;
    --black: #000;
    --white: #fff;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-family: 'Inter Variable', sans-serif;
  }

  span, strong {
    font-family: 'Inter Variable', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
