import axios from "axios";

import { ReactNode, createContext, useEffect, useState } from "react";

export interface PostProps {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

interface PostContextProps {
  post: PostProps[];
}

interface PostProviderProps {
  children: ReactNode;
}

export const PostContext = createContext<PostContextProps>({
  post: [],
});

const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [post, setPost] = useState<PostProps[]>([
    {
      number: 0,
      title: "",
      body: "",
      created_at: "",
    },
  ]);

  async function fetchPost() {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/3`
      );

      const data = response.data as PostProps;

      setPost([data]);

      console.log(data, "aqui ");
      console.log(post, "aqui ");
    } catch (e) {
      return;
    }
  }

  useEffect(() => {
    void fetchPost();
  }, []);

  return (
    <PostContext.Provider
      value={{
        post,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider };
