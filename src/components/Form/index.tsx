import { FormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect } from "react";
import { api } from "../../lib/axios";
import { type } from "os";
import { SearchFormInput } from "../../pages/Blog";

export function SearchForm({
  register,
  handleSubmit,
  handleSearch,
}: SearchFormInput) {
  return (
    <FormContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>

      <form onSubmit={handleSubmit(handleSearch)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </form>
    </FormContainer>
  );
}
