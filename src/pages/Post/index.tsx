interface CardItemsProps {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

export function Post({ post }: CardItemsProps) {
  console.log(post, "aqui entro do elemento");
  return <h1>Details page</h1>;
}
