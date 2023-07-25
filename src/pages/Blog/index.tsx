import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/Form";
import { Cards } from "../../components/Cards";

import { MainContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../lib/axios";

// const searchFormSchema = z.object({
//   query: z.string(),
// });

// export type SearchFormInput = z.infer<typeof searchFormSchema>;

// export interface DataProps {
//   total_count: number;
//   incomplete_results: boolean;
//   items: any[];
// }

export function Blog() {
  // const [cardsData, setCardsData] = useState<DataProps | null>(null);

  // const {
  //   register,
  //   handleSubmit,
  //   // formState: {isSubmitting}
  // } = useForm<SearchFormInput>({
  //   resolver: zodResolver(searchFormSchema),
  // });

  // async function fetchCardData(texto = "") {
  //   try {
  //     const { data } = await api.get(
  //       `/search/issues?q=${texto}%20repo:rocketseat-education/reactjs-github-blog-challenge`
  //     );

  //     setCardsData(data);

  //     // const findTitle = cardsData?.items.filter(
  //     //   (item: any) => item.title !== texto.query
  //     // );

  //     // console.log(findTitle, "aqui a porra");
  //     // // setNewCard(findTitle || []);
  //   } catch (error) {
  //     return;
  //   }
  // }

  // useEffect(() => {
  //   void fetchCardData();
  // }, []);

  return (
    <MainContainer>
      <Profile />

      <SearchForm />
      {/* // handleSubmit={handleSubmit}
        // register={register}
        // fetchCardData={fetchCardData}
        // // handleSearch={handleSearch}
      /> */}

      <Cards />
    </MainContainer>
  );
}
