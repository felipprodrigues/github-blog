import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/Form";
import { Cards } from "../../components/Cards";

import { MainContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../lib/axios";

const searchFormSchema = z.object({
  query: z.string(),
});

export type SearchFormInput = z.infer<typeof searchFormSchema>;

export function Blog() {
  const [cardsData, setCardsData] = useState([]);

  const {
    register,
    handleSubmit,
    // formState: {isSubmitting}
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearch(data: SearchFormInput) {
    if (!data) return;

    const fetchCardInfo = await api.get(
      `/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/reactjs-github-blog-challenge`
    );

    console.log(fetchCardInfo);
    setCardsData(fetchCardInfo);
    return fetchCardInfo;
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <MainContainer>
      <Profile />

      <SearchForm
        handleSubmit={handleSubmit}
        register={register}
        handleSearch={handleSearch}
      />

      <Cards cardsData={cardsData} />
    </MainContainer>
  );
}
