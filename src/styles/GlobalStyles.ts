import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

a {
  all: unset;
  cursor: pointer;
  color: inherit;
}

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

body {
  font-family: 'Alkatra', cursive;
}
`;
