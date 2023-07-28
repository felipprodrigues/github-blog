import { useContext } from "react";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import { PostContext } from "../../contexts/Post/PostsContext";

import { ContentBody } from "./styles";
import { Profile } from "../../components/Profile";
import { RotatingLines } from "react-loader-spinner";
import { BlogContext } from "../../contexts/Blog/BlogContext";

export function Post() {
  const { postData } = useContext(PostContext);
  const { loading } = useContext(BlogContext);

  return (
    <>
      <div>
        <Profile />

        {loading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        ) : (
          postData.map((item) => (
            <ContentBody key={item.url}>
              <p>
                <ReactMarkdown
                  key={item.url}
                  rehypePlugins={[rehypeHighlight]}
                  remarkPlugins={[remarkGfm]}
                >
                  {item.body}
                </ReactMarkdown>
              </p>
            </ContentBody>
          ))
        )}
      </div>
    </>
  );
}
