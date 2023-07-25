// CombinedProvider.tsx
import React, { ReactNode } from "react";
import { BlogProvider } from "./Blog/BlogContext";
import { PostProvider } from "./Post/PostsContext";

interface CombinedProviderProps {
  children: ReactNode;
}

const CombinedProvider: React.FC<CombinedProviderProps> = ({ children }) => {
  return (
    <BlogProvider>
      <PostProvider>{children}</PostProvider>
    </BlogProvider>
  );
};

export default CombinedProvider;
