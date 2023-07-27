import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../../lib/axios";

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
  const [postData, setPostData] = useState<PostProps[]>([]);
  const [postNumber, setPostNumber] = useState("");

  const fetchPost = useCallback(async () => {
    try {
      const response = await api.get(
        `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${postNumber}`
      );

      setPostData([response.data]);

      console.log(response.data);
    } catch (e) {
      return;
    }
  }, [postNumber]);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  return (
    <PostContext.Provider
      value={{
        postData,
        setPostNumber,
        fetchPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider };
