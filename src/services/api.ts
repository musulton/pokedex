import {ImageLinkItem} from "@/types";
import {PAGE_SIZE} from "@/pages/pokemon";

export const fetchData = async (
    params: {[key: string]: string}
): Promise<{ pokemon: Array<ImageLinkItem>; count: number }> => {
    const offset: number = params?.page > 0 ? (params?.page - 1) * PAGE_SIZE : 0
    const pokemonList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?offset=${offset}&limit=${PAGE_SIZE}`)
    const pokemonListJson = await pokemonList.json()
    const pokemon: Array<ImageLinkItem> = []

    for (let item of pokemonListJson?.results) {
        const pokemonItem = await fetch(item?.url)
        const result = await pokemonItem.json()
        pokemon.push({
            imageSrc: result?.sprites?.other?.dream_world?.front_default,
            name: result?.name,
            id: result?.id
        })
    }

    return {
        count: pokemonListJson?.count,
        pokemon
    }
}
