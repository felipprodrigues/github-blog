import { Card, CardContainer } from "./styles";

import { useContext } from "react";
import { BlogContext, CardProps } from "../../contexts/Blog/BlogContext";
import { PostContext } from "../../contexts/Post/PostsContext";
import { handleTimeDate } from "../../helpers/timeDateFn";
import { Link } from "react-router-dom";

interface ContextProps {
  BlogContext: () => void;
  PostContext: () => void;
}

export function Cards() {
  const { cards } = useContext<ContextProps>(BlogContext);
  const { setPostNumber } = useContext<ContextProps>(PostContext);

  if (!cards || !cards?.items || cards?.items?.length === 0) {
    return <span>Nenhum resultado encontrado...</span>;
  }

  const cardsData: CardProps = cards.items;

  return (
    <>
      <CardContainer>
        {cardsData.map((item: CardProps) => {
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
        })}
      </CardContainer>
    </>
  );
}
