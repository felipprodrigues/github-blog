import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

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
import { Profile } from "../../components/Profile";

interface GithubApiProps {
  name: string;
  followers: number;
  url: string;
  login: string;
  company?: string;
  bio?: string;
  avatar_url: string;
  title: string;
  body: string;
  user?: GithubUserProps;
}

interface GithubUserProps {
  login: string;
}

export function Post() {
  const { postData } = useContext(PostContext);

  return (
    <>
      <div>
        <Profile />

        {postData.map((item: GithubApiProps) => (
          // <div key={item.url}>
          //   <Container>
          //     <Content>
          //       <ContentRef>
          //         <Link to="/">
          //           <CaretLeft size={20} />
          //           VOLTAR
          //         </Link>

          //         <a href={item.url} target="_blank" rel="noopener noreferrer">
          //           VER NO GITHUB
          //           <ArrowSquareUpRight size={20} />
          //         </a>
          //       </ContentRef>

          //       <ContentTitle>
          //         <h2>{item.title}</h2>
          //       </ContentTitle>

          //       <ContentTags>
          //         <div>
          //           <GithubLogo size={20} />
          //           <span>{item.user.login}</span>
          //         </div>
          //         <div>
          //           <Buildings size={20} />
          //           <span>{item.company || "None"}</span>
          //         </div>
          //         <div>
          //           <Users size={20} />
          //           <span>{item.followers} seguidores</span>
          //         </div>
          //       </ContentTags>
          //     </Content>
          //   </Container>

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
        ))}
      </div>
    </>
  );
}
