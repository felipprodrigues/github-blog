import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/Form";
import { Cards } from "../../components/Cards";

import { MainContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Blog() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Profile />

      <SearchForm />

      <Cards handleNavigate={navigate} />
    </MainContainer>
  );
}
