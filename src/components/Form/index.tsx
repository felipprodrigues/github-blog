import { FormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    // formState: {isSubmitting}
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearch(data: SearchFormInput) {
    await console.log(data, "aqui o data");
  }

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
