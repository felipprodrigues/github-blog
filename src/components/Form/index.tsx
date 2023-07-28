import { useContext } from "react";
import { BlogContext } from "../../contexts/Blog/BlogContext"; // Use named import

import { FormContainer } from "./styles";

export function SearchForm() {
  const { setSearchInput, totalCount } = useContext(BlogContext);

  return (
    <FormContainer>
      <div>
        <span>Publicações</span>
        <span>{totalCount} publicações</span>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={({ target }) => setSearchInput(target.value)}
      />
    </FormContainer>
  );
}
