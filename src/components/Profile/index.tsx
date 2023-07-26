import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from "phosphor-react";
import { Container, Content, ContentTags, ContentTitle } from "./styles";
import { useEffect, useState } from "react";

import { api } from "../../lib/axios";

// import { api } from "../../lib/axios";

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

  async function fetchUser(): Promise<void> {
    try {
      const response = await api.get<GithubApiProps>(
        `/users/rocketseat-education`
      );

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

  useEffect(() => {
    void fetchUser();
  }, []);

  return (
    <Container>
      <img src={githubApi.avatar_url} alt="" />

      <Content>
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

        <p>{githubApi.bio ? githubApi.bio : "No bio description available"}</p>

        <ContentTags>
          <div>
            <GithubLogo size={20} />
            <span>{githubApi.login}</span>
          </div>
          <div>
            <Buildings size={20} />
            <span>{githubApi.company ? githubApi.company : "None"}</span>
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
