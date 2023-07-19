
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/Form";
import { Cards } from "../../components/Cards";

import { MainContainer } from "./styles";

export function Blog() {
  return (
    <MainContainer>
      <Profile />

      <SearchForm />

      <Cards />
    </MainContainer>

  );
}
