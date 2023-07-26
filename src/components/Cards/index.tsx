import { Card, CardContainer } from "./styles";

import { useContext } from "react";
import { BlogContext } from "../../contexts/Blog/BlogContext";
import { PostContext } from "../../contexts/Post/PostsContext";
import { handleTimeDate } from "../../helpers/timeDateFn";

interface CardItemsProps {
  id: number;
  title: string;
  created_at: string;
  body: string;
  number?: number;
}

interface ContextProps {
  BlogContext: () => void;
  PostContext: () => void;
}

export function Cards({ handleNavigate }) {
  const { cardsData } = useContext<ContextProps>(BlogContext);
  const { fetchPost } = useContext<ContextProps>(PostContext);

  if (!cardsData || !cardsData.items || cardsData.items.length === 0) {
    return <span>Nenhum resultado encontrado...</span>;
  }

  // console.log(cardsData, "aqui o cards");

  //1 get number on click
  // fetch api url passing down number clicked
  // redirect to post page
  // log all the content

  return (
    <>
      <CardContainer>
        {cardsData.items.map((item: CardItemsProps) => {
          return (
            <Card
              key={`${item.id}-${item.title}`}
              onClick={() => fetchPost(item.number)}
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
            </Card>
          );
        })}
      </CardContainer>
    </>
  );
}
