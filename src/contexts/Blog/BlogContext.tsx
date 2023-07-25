import React, { ReactNode, createContext, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
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
      const { data } = await api.get(
        `/search/issues?q=${texto}%20repo:rocketseat-education/reactjs-github-blog-challenge`
      );

      setCardsData(data);
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
