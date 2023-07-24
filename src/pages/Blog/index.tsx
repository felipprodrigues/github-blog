import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/Form";
import { Cards } from "../../components/Cards";

import { MainContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../lib/axios";
import axios from "axios";

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
  const [cardsData, setCardsData] = useState<DataProps | null>(null);
  const [post, setPost] = useState<Post>({
    number: "",
    title: "",
    body: [],
    created_at: "",
  });
  const [newCard, setNewCard] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    // formState: {isSubmitting}
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function fetchCardData(texto = "") {
    try {
      const { data } = await api.get(
        `/search/issues?q=${texto}%20repo:rocketseat-education/reactjs-github-blog-challenge`
      );

      setCardsData(data);

      // const findTitle = cardsData?.items.filter(
      //   (item: any) => item.title !== texto.query
      // );

      // console.log(findTitle, "aqui a porra");
      // // setNewCard(findTitle || []);
    } catch (error) {
      return;
    }
  }

  async function fetchPost() {
    try {
      const { data } = await axios.get(
        `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/3`
      );

      setPost({
        number: data.number,
        title: data.title,
        body: data.body, // Fix the property name here
        created_at: data.created_at,
      });

      console.log(data, "aqui ");
      console.log(post, "aqui ");
    } catch (e) {
      return;
    }
  }

  useEffect(() => {
    void fetchCardData();
    void fetchPost();

    console.log(newCard, "aqui");
  }, []);

  return (
    <MainContainer>
      <Profile />

      <SearchForm
        handleSubmit={handleSubmit}
        register={register}
        fetchCardData={fetchCardData}
        // handleSearch={handleSearch}
      />

      <Cards cardsData={cardsData} post={post} />
    </MainContainer>
  );
}
