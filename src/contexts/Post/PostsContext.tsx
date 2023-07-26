import axios from "axios";

import { ReactNode, createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

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
  const [post, setPost] = useState<PostProps[]>([]);

  async function fetchPost(param: number) {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${param}`
      );

      const data = response.data as PostProps;
      console.log(response.data, "request da api");
      setPost(data);

      const redirect =
        (window.location.href = `http://127.0.0.1:5173/post/${param}`);

      redirect;
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
        fetchPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider };
