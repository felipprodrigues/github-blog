/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
 
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../lib/axios";
import { BlogContext } from "../Blog/BlogContext";

export interface PostProps {
  url: string | undefined;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export interface PostContextProps {
  postData: PostProps[];
  setPostNumber: React.Dispatch<React.SetStateAction<number>>;
  fetchPost: () => Promise<void>;
}

interface PostProviderProps {
  children: ReactNode;
}

export const PostContext = createContext<PostContextProps>({
  postData: [],
  setPostNumber: () => {},
  fetchPost: async () => {},
});

const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [postData, setPostData] = useState<PostProps[]>([]);
  const [postNumber, setPostNumber] = useState(0);

  const { setLoading } = useContext(BlogContext);

  const fetchPost = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${postNumber}`
      );

      setPostData([response.data]);
      setLoading(false);
    } catch (e) {
      return;
    }
    setLoading(false);
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
