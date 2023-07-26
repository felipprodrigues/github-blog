import { Link } from "react-router-dom";
import { useContext } from "react";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import { PostContext } from "../../contexts/Post/PostsContext";

import {
  ArrowSquareUpRight,
  Buildings,
  CaretLeft,
  GithubLogo,
  Users,
} from "phosphor-react";
import {
  Container,
  ContentBody,
  Content,
  ContentRef,
  ContentTags,
  ContentTitle,
} from "./styles";

// interface GithubApiProps {
//   name: string;
//   followers: number;
//   url: string;
//   login: string;
//   company?: string;
//   bio?: string;
//   avatar_url: string;
// }

export function Post() {
  const { post } = useContext(PostContext);
  console.log(post, "aqui");
  return (
    <>
      {post.map((item) => (
        <>
          <Container key={item.number}>
            <Content>
              <ContentRef>
                <Link to="/">
                  <CaretLeft size={20} />
                  VOLTAR
                </Link>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER NO GITHUB
                  <ArrowSquareUpRight size={20} />
                </a>
              </ContentRef>

              <ContentTitle>
                <h2>{item.title}</h2>
              </ContentTitle>

              <ContentTags>
                <div>
                  <GithubLogo size={20} />
                  {/* <span>{item.user.login}</span> */}
                </div>
                <div>
                  <Buildings size={20} />
                  <span>None</span>
                </div>
                <div>
                  <Users size={20} />
                  <span>10 seguidores</span>
                </div>
              </ContentTags>
            </Content>
          </Container>

          <ContentBody>
            {/* <p> */}
            <ReactMarkdown
              key={item.number}
              rehypePlugins={[rehypeHighlight]}
              remarkPlugins={[remarkGfm]}
            >
              {item.body}
            </ReactMarkdown>
            {/* </p> */}
          </ContentBody>
        </>
      ))}
    </>
  );
}
