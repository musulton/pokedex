import {render} from "@testing-library/react";
import {useRouter} from "next/router";

import PokemonDetail, {getStaticProps, getStaticPaths} from "../../src/pages/pokemon/[name]";

jest
    .mock("../../src/components/Loading", () => "Loading")
    .mock("../../src/components/ProgressBar", () => "ProgressBar")
    .mock('next/router', () => ({
        useRouter: jest.fn(() => ({
            isFallback: false
        }))
    }))

describe("Pokemon Detail pages", () => {
    it("should render Pokemon correctly", () => {
        const pokemonData = {
            name: "Pokemon",
            types: [{ type: { name: "type 1" } }, { type: { name: "type 2" } }],
            stats: [{
                stat: [{
                    base_stat: 100
                }]
            }],
            sprites: {
                other: {
                    dream_world: {
                        front_default: "https://avatars.githubusercontent.com/u/45544958?v=4"
                    }
                }
            }
        }

        const {container} = render(<PokemonDetail pokemon={pokemonData} />)

        expect(container.firstChild).toMatchSnapshot();
    })

    it("should render Pokemon when loading", () => {
        useRouter.mockImplementation(() => ({
            isFallback: true
        }))

        const pokemonData = {
            name: "Pokemon",
            types: [{ type: { name: "type 1" } }, { type: { name: "type 2" } }],
            stats: [{
                stat: [{
                    base_stat: 100
                }]
            }],
            sprites: {
                other: {
                    dream_world: {
                        front_default: "https://avatars.githubusercontent.com/u/45544958?v=4"
                    }
                }
            }
        }

        const {container} = render(<PokemonDetail pokemon={pokemonData} />)

        expect(container.firstChild).toMatchSnapshot();
    })

    it("getStaticPaths - should return data correctly", () => {
        const result = getStaticPaths({});
        expect(result).toEqual({
            paths: [],
            fallback: true
        })
    })

    describe("getStaticProps", () => {
        const originalFetch = global.fetch
        const mockData = [{
            id: 1,
            name: "Pokemon"
        }]

        beforeEach(() => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve(mockData),
                }))
        })

        afterEach(() => {
            global.fetch = originalFetch
        })

        it("should return data when fetch is successful", async () => {
            const mockParam = "test"
            const result = await getStaticProps({params: {name: mockParam}});

            expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_URL}/${mockParam}`)
            expect(result).toEqual({
                revalidate: 1,
                props: {
                    pokemon: mockData
                }
            })
        })

        it("should return not found when fetch is fail", async () => {
            global.fetch.mockImplementation(() => Promise.resolve({
                status: 400,
                json: () => Promise.resolve({success: false})
            }))

            const result = await getStaticProps({})
            expect(result).toEqual({
                notFound: true
            })
        })
    })
})
