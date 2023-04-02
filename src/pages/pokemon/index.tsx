import {useEffect, useState} from "react";

import {ImageLinkItem} from "@/types";
import Pagination from "@/components/Pagination/Pagination";
import ImageCard from "@/components/ImageCard";
import {Description, GridStyled, InfoContainer, MainStyled, Title} from "@/pages/pokemon/styled";
import {fetchData} from "@/services/api";

export const PAGE_SIZE = 9

export interface Data {
    count: number
    pokemon: Array<any>
}

const Pokemon = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [data, setData] = useState<Data>(null);

    useEffect(() => {
        fetchData(currentPage, setData)
    }, [currentPage])

    return (
      <MainStyled>
          <InfoContainer>
              <Title>Pokémon</Title>
              <Description>
                  Pokémon are mysterious creatures with many secrets. Some Pokémon live with humans and some live in the wild in meadows, caves, or the sea.
              </Description>
          </InfoContainer>
          <GridStyled>
              {data?.pokemon?.map((item: ImageLinkItem) => (
                  <ImageCard imageItem={item} key={item?.id} />
              ))}
          </GridStyled>
          <Pagination
              onChangePage={setCurrentPage}
              currentPage={currentPage}
              pageSize={PAGE_SIZE}
              totalCount={data?.count as number}
          />
      </MainStyled>
  )
}

export default Pokemon;
