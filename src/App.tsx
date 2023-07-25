import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import Providers from "./contexts/Providers";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Providers>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Providers>
    </ThemeProvider>
  );
}
