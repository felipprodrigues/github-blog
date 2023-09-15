import {
  ArrowSquareUpRight,
  Buildings,
  CaretLeft,
  GithubLogo,
  Users,
} from "phosphor-react";
import { Container, Content, ContentTags, ContentTitle } from "./styles";
import { useContext, useEffect, useRef, useState } from "react";

import { api } from "../../lib/axios";
import { Link, useLocation } from "react-router-dom";
import { ContentRef } from "../../pages/Post/styles";
import { PostContext } from "../../contexts/Post/PostsContext";

interface GithubApiProps {
  name: string;
  followers: number;
  html_url: string;
  login: string;
  company?: string;
  bio?: string;
  avatar_url: string;
}

export function Profile() {
  const [githubApi, setGithubApi] = useState<GithubApiProps>({
    name: "",
    followers: 0,
    html_url: "",
    login: "",
    company: "",
    bio: "",
    avatar_url: "",
  });

  useEffect(() => {
    void fetchUser();
  }, []);

  async function fetchUser(): Promise<void> {
    try {
      const response = await api.get<GithubApiProps>(`/users/wesbos`);

      const gitData = response.data;
      setGithubApi({
        name: gitData.name,
        followers: gitData.followers,
        html_url: gitData.html_url,
        login: gitData.login,
        company: gitData.company,
        bio: gitData.bio,
        avatar_url: gitData.avatar_url,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error occurred:", error.message);
      } else {
        console.log("Unknown error occurred:", error);
      }
    }
  }

  const location = useLocation();
  const blogPage = location.pathname === "/";

  const { postData } = useContext(PostContext);
  const firstPostRef = useRef<HTMLAnchorElement>(null);

  return (
    <Container>
      {blogPage && <img src={githubApi.avatar_url} alt="" />}

      <Content>
        {blogPage ? (
          <ContentTitle>
            <h2>{githubApi.name}</h2>

            <div>
              <a
                href={githubApi.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
                <ArrowSquareUpRight size={18} />
              </a>
            </div>
          </ContentTitle>
        ) : (
          <ContentRef>
            <Link to="/">
              <CaretLeft size={20} />
              VOLTAR
            </Link>

            {postData.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={index === 0 ? firstPostRef : null}
              >
                VER NO GITHUB
                <ArrowSquareUpRight size={20} />
              </a>
            ))}
          </ContentRef>
        )}

        {blogPage ? (
          <p>
            {githubApi.bio ? githubApi.bio : "Nenhuma descrição foi inserida"}
          </p>
        ) : (
          <ContentTitle>
            <h2>{postData.map((item) => item.title)}</h2>
          </ContentTitle>
        )}

        <ContentTags>
          <div>
            <GithubLogo size={20} />
            <span>{githubApi.login}</span>
          </div>
          <div>
            <Buildings size={20} />
            <span>{githubApi.company ? githubApi.company : "---"}</span>
          </div>
          <div>
            <Users size={20} />
            <span>{githubApi.followers} seguidores</span>
          </div>
        </ContentTags>
      </Content>
    </Container>
  );
}
