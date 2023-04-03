import {useState} from "react";

import {ImageLinkItem} from "@/types";
import Pagination from "@/components/Pagination/Pagination";
import ImageCard from "@/components/ImageCard";
import Loading from "@/components/Loading";
import Error from "@/pages/_error";
import {Description, GridStyled, InfoContainer, MainStyled, Title} from "@/pages/pokemon/styled";
import {fetchData} from "@/services/api";
import useQuery from "@/hook/useQuery";

export const PAGE_SIZE = 9
const PAGE_NUMBER_LIMIT = 5

export interface Data {
    count: number
    pokemon: Array<any>
}

const Pokemon = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [maxPageLimit, setMaxPageLimit] = useState(PAGE_NUMBER_LIMIT)
    const [minPageLimit, setMinPageLimit] = useState(0)

    const {data, error, loading} = useQuery<Data>(
        fetchData,
        {
            page: currentPage
        }
    );

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

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
              onChangeMaxPageLimit={setMaxPageLimit}
              onChangeMinPageLimit={setMinPageLimit}
              maxPageLimit={maxPageLimit}
              minPageLimit={minPageLimit}
              pageNumberLimit={PAGE_NUMBER_LIMIT}
              onChangePage={setCurrentPage}
              currentPage={currentPage}
              pageSize={PAGE_SIZE}
              totalCount={data?.count as number}
          />
      </MainStyled>
  )
}

export default Pokemon;
