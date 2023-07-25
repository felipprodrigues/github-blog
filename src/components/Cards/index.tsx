import { Card, CardContainer } from "./styles";
// import { DataProps } from "../../pages/Blog";
import { parseISO, differenceInDays } from "date-fns";
import { useContext } from "react";
import { BlogContext } from "../../contexts/Blog/BlogContext";

interface CardItemsProps {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

export function Cards() {
  const { cardsData } = useContext(BlogContext);

  if (!cardsData || !cardsData.items || cardsData.items.length === 0) {
    return <span>Nenhum resultado encontrado...</span>;
  }

  function handleTimeDate(dateParam: string) {
    const now = new Date();
    const parsedPostDate = parseISO(dateParam);
    const daysDifference = differenceInDays(now, parsedPostDate);

    return daysDifference;
  }

  return (
    <>
      <CardContainer>
        {cardsData.items.map((item: CardItemsProps) => {
          // console.log(item.body, "aqui");
          return (
            <Card key={`${item.id}-${item.title}`}>
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
