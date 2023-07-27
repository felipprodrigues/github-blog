import React, { ReactNode, createContext, useEffect, useState } from "react";

import { api } from "../../lib/axios";

interface DataProps {
  total_count: number;
  incomplete_results: boolean;
  items: CardProps[];
}

export interface CardProps {
  id: number;
  title: string;
  created_at: string;
  body: string;
  number: number;
}

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogContext = createContext<DataProps | null>(null);

const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<DataProps>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    void fetchData();
  }, [searchInput]);

  async function fetchData() {
    try {
      const response = await api.get(
        `/search/issues?q=${searchInput}%20repo:rocketseat-education/reactjs-github-blog-challenge`
      );

      setCards(response.data);

      setTotalCount(response.data.total_count);
    } catch (error) {
      return;
    }
  }

  return (
    <BlogContext.Provider value={{ cards, setSearchInput, totalCount }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider };
