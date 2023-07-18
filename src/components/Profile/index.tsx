import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from "phosphor-react";
import { Container, Content, ContentTags, ContentTitle } from "./styles";
import { useEffect } from "react";
import axios from "axios";
import { api } from "../../lib/axios";

export function Profile() {
  async function fetchApi() {
    // const token = "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";
    // console.log(token);

    const config = {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      //   // "Content-Type": "application/json",
      // },
    };

    try {
      const response = await axios.get(
        "https://api.github.com/users/felipprodrigues",
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error, "aqui o erro");
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Container>
      <img src="" alt="" />

      <Content>
        <ContentTitle>
          <h2>Cameron Williamson</h2>

          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              GITHUB
              <ArrowSquareUpRight size={18} />
            </a>
          </div>
        </ContentTitle>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ContentTags>
          <div>
            <GithubLogo size={20} />
            <span>cameronwll</span>
          </div>
          <div>
            <Buildings size={20} />
            <span>Rocketseat</span>
          </div>
          <div>
            <Users size={20} />
            <span>32 seguidores</span>
          </div>
        </ContentTags>
      </Content>
    </Container>
  );
}
