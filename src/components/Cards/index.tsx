import { useEffect, useState } from "react";
import { Card, CardContainer } from "./styles";
import { DataProps } from "../../pages/Blog";
import { parseISO, differenceInDays } from "date-fns";

interface CardItemsProps {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

export function Cards({ cardsData }: { cardsData: DataProps | null }) {
  if (!cardsData) {
    return <span>Nenhum resultado encontrado...</span>;
  }

  if (!cardsData.items || cardsData.items.length === 0) {
    return <span>Nenhum item encontrado...</span>;
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
          return (
            <Card key={`${item.id}-${item.title}`}>
              <div>
                <h2>{item.title}</h2>
                <span>Há {handleTimeDate(item.created_at)} dias</span>
              </div>
              <div>
                {item.body.length >= 150 ? (
                  <p>{item.body.substring(0, 200)}...</p>
                ) : (
                  <p>{item.body}</p>
                )}
              </div>
            </Card>
          );
        })}
      </CardContainer>
    </>
  );
}
