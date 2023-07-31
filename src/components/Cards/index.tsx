/* eslint-disable @typescript-eslint/no-unsafe-member-access */
 
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { CardContainer } from "./styles";

import { useContext } from "react";
import { BlogContext, CardProps } from "../../contexts/Blog/BlogContext";
import { PostContext } from "../../contexts/Post/PostsContext";
import { handleTimeDate } from "../../helpers/timeDateFn";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

export function Cards() {
  const { cards, loading } = useContext(BlogContext);
  const { setPostNumber } = useContext(PostContext);

  if (!cards || !cards?.items || cards?.items?.length === 0) {
    return <span>Nenhum resultado encontrado...</span>;
  }

  return (
    <>
      <CardContainer>
        {loading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        ) : (
          cards.items.map((item: CardProps) => {
            return (
              <Link
                to={`/post/${item.number}`}
                key={`${item.id}-${item.title}`}
                onClick={() => setPostNumber(item.number)}
              >
                <div>
                  <h2>{item.title}</h2>
                  <span>Há {handleTimeDate(item.created_at)} dias</span>
                </div>
                <div>
                  {item.body ? (
                    <p>{item.body.substring(0, 200)}...</p>
                  ) : (
                    <p>"Esqueceram de preencher as informações"</p>
                  )}
                </div>
              </Link>
            );
          })
        )}
      </CardContainer>
    </>
  );
}
