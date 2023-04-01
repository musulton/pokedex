import {useEffect, useState} from "react";

import {ImageLinkItem} from "@/types";
import Pagination from "@/components/Pagination";
import ImageLink from "@/components/ImageLink";
import styles from '@/styles/Pokemon.module.css'

export const PAGE_SIZE = 9

interface Data {
    count: number
    pokemon: Array<any>
}

const fetchData = async (
    page: number,
    setData: (payload: Data) => void
): Promise<void> => {
    const offset: number = page > 0 ? (page - 1) * PAGE_SIZE : 0
    const pokemonList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?offset=${offset}&limit=${PAGE_SIZE}`)
    const pokemonListJson = await pokemonList.json()
    const pokemon: Array<ImageLink> = []

    for (let item of pokemonListJson?.results) {
        const pokemonItem = await fetch(item?.url)
        const result = await pokemonItem.json()
        pokemon.push({
            imageSrc: result?.sprites?.other?.dream_world?.front_default,
            name: result?.name,
            id: result?.id
        })
    }

    setData({
        count: pokemonListJson?.count,
        pokemon
    })
}

const Pokemon = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [data, setData] = useState<Data>(null);

    useEffect(() => {
        fetchData(currentPage, setData).catch(console.error)
    }, [currentPage])

    return (
      <div className={styles.container}>
          <div className={styles.grid}>
              {data?.pokemon?.map((item: ImageLinkItem) => (
                  <ImageLink imageItem={item} key={item?.id} />
              ))}
          </div>
          <Pagination
            onChangePage={setCurrentPage}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
            totalCount={data?.count as number}
          />
      </div>
  )
}

export default Pokemon;
