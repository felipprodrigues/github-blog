/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { ReactNode, createContext, useEffect, useState } from "react";

import { api } from "../../lib/axios";

export interface DataProps {
  total_count: number;
  incomplete_results: boolean;
  items: CardProps[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cards: CardProps[];
  setSearchInput: (input: string) => void;
  totalCount: number;
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

export const BlogContext = createContext<DataProps>({
  total_count: 0,
  incomplete_results: false,

  items: [],
  loading: false,
  setLoading: function (): void {
    throw new Error("Function not implemented.");
  },
  cards: [],
  setSearchInput: function (_input: string): void {
    throw new Error("Function not implemented.");
  },
  totalCount: 0,
});

const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await api.get(
        `/search/issues?q=${searchInput}%20repo:rocketseat-education/reactjs-github-blog-challenge`
      );

      setCards(response.data);

      setTotalCount(response.data.total_count);
      setLoading(false);
    } catch (error) {
      return;
    }
    setLoading(false);
  }

  return (
    <BlogContext.Provider
      value={{ cards, setSearchInput, totalCount, loading, setLoading }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider };
