/* eslint-disable */
import { CardContainer } from "./styles";

import { useContext } from "react";
import { BlogContext, CardProps } from "../../contexts/Blog/BlogContext.tsx";
import { PostContext } from "../../contexts/Post/PostsContext";
import { handleTimeDate } from "../../helpers/timeDateFn";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

export function Cards() {
  const { cards, loading }: any = useContext(BlogContext);
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
          cards.items.map((items: CardProps) => {
            return (
              <Link
                to={`/post/${items.number}`}
                key={`${items.id}-${items.title}`}
                onClick={() => setPostNumber(items.number)}
              >
                <div>
                  <h2>{items.title}</h2>
                  <span>Há {handleTimeDate(items.created_at)} dias</span>
                </div>
                <div>
                  {items.body ? (
                    <p>{items.body.substring(0, 200)}...</p>
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
