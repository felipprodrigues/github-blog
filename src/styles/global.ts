import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["base-border"]}
  }

  body {
    background-color: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  body {
    line-height: 160%;
  }

  input,
  textarea,
  button {
    font: 400 1rem Nunito, sans-serif;
  }

  input {
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid transparent;
    border-radius: 6px;
    color: ${(props) => props.theme["base-label"]}
  }
`;
