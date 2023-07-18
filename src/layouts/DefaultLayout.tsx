import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <div id="main">
        <Outlet />
      </div>

      <div id="footer" />
    </LayoutContainer>
  );
}
