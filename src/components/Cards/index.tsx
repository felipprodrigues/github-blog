// import { resolve } from "dns";
import { Card, CardContainer } from "./styles";

export function Cards({ cardsData }: any) {
  const resolve = cardsData.data.items;
  console.log(cardsData.data.items, "request auqi");
  return (
    <>
      <CardContainer>
        {resolve.map((item: any) => {
          return (
            <Card key={item.title}>
              <div>
                <h2>{item.title}</h2>
                <span>Há 1 dia</span>
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
