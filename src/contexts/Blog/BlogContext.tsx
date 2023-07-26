import React, { ReactNode, createContext, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../lib/axios";

const searchFormSchema = z.object({
  query: z.string(),
});

export type SearchFormInput = z.infer<typeof searchFormSchema>;

interface Item {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
}

export interface DataProps {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogContext = createContext<DataProps | null>(null);

const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [cardsData, setCardsData] = useState<DataProps | null>(null);

  const {
    register,
    handleSubmit,
    // formState: {isSubmitting}
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function fetchCardData(texto = "") {
    try {
      const response = await api.get(
        `/search/issues?q=${texto}%20repo:rocketseat-education/reactjs-github-blog-challenge`
      );

      setCardsData(response.data);

      console.log(texto, "aqui o digitado");
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
    void fetchCardData();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        register,
        handleSubmit,
        fetchCardData,
        cardsData,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider };
