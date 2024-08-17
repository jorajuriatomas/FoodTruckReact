import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --blue-bg: #4e688d;
  --white: #fbfbfb;
  --blue: #65baee;
  --gray-bg: #2b2b2c;
--btn-gradient: linear-gradient(83deg, #fbfbfb, #65baee);
--btn-gradient-secondary: linear-gradient(140deg, #304869, #304169);
}

html{
  scroll-behavior: smooth;
}

  body {
  margin: 0;
  padding: 0;
  background: #131415;
  font-family: 'Montserrat', sans-serif;
  color: white;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden
  }
  a {
  text-decoration: none;
  color: white;
  }
  a:visited {
  color: white;
  }
  li {
  list-style: none;
  }
;
`;