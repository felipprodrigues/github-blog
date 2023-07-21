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

export interface DataProps {
  total_count: number;
  incomplete_results: boolean;
  items: any[];
}

export interface Post {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export function Blog() {
  const [cardsData, setCardsData] = useState<DataProps>([]);
  const [posts, setPosts] = useState<Post>({
    number: "",
    title: "",
    body: [],
    created_at: "",
  });

  const {
    register,
    handleSubmit,
    // formState: {isSubmitting}
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearch(query = "") {
    if (!query) return;

    try {
      const encodedQuery = encodeURIComponent(query);
      const fetchCardInfo = await api.get(
        `/search/issues?q=${encodedQuery}%20repo:wesbos/awesome-uses`
      );

      console.log(fetchCardInfo, "auqi");
      setCardsData(fetchCardInfo.data);
      return fetchCardInfo;
    } catch (error) {
      console.error("Error occurred during API request:", error);
    }
  }

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
