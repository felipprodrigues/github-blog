import { useContext } from "react";
import { BlogContext } from "../../contexts/Blog/BlogContext"; // Use named import

import { FormContainer } from "./styles";

import { SubmitHandler } from "react-hook-form";

interface SearchFormInput {
  register: any; // Replace 'any' with the specific type for the 'register' function from react-hook-form
  handleSubmit: SubmitHandler<FormValues>; // Replace 'FormValues' with the type of your form values
  fetchCardData: (query: string) => Promise<void>; // Replace 'string' with the type of 'query' parameter used in 'fetchCardData'
  // handleSearch: (query: string) => Promise<void>; // Replace 'string' with the type of 'query' parameter used in 'fetchCardData'
}

export function SearchForm() {
  const { register, handleSubmit, fetchCardData } =
    useContext<SearchFormInput>(BlogContext);

  return (
    <FormContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>

      <form onSubmit={handleSubmit(fetchCardData)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </form>
    </FormContainer>
  );
}
