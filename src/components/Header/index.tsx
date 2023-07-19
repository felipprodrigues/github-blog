import logo from "../../assets/Cover.png";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  );
}
