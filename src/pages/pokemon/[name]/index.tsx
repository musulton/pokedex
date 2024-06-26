import React from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";

import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Loading from "@/components/Loading";
import {
    BaseStatText, BaseStatWrapper,
    CharacterWrapper, ImageStyled, LeftSection,
    PokemonName,
    TypeName,
    TypeWrapper
} from "@/pages/pokemon/[name]/styles";
import {capitalize} from "@/utils/common";
import pokemonBall from "@/assets/pokemon-ball.png"

interface Props {
    pokemon: {
        name: string
        types: Array<{
            type: {
                name: string
            }
        }>
        stats: Array<{ base_stat: number }>
        sprites: {
            other: {
                dream_world: {
                    front_default: string
                }
            }
        }
    },
}

interface StatBarProps {
    stats: Array<{base_stat: number}>
}

const StatBar: React.FC<StatBarProps> = ({ stats }) => (
    <BaseStatWrapper>
        <BaseStatText>Base Stats Information</BaseStatText>
        <ProgressBar
            label="HP"
            percentage={stats?.[0]?.base_stat}
        />
        <ProgressBar
            label="Attack"
            percentage={stats?.[1]?.base_stat}
        />
        <ProgressBar
            label="Defense"
            percentage={stats?.[2]?.base_stat}
        />
        <ProgressBar
            label="Special Attack"
            percentage={stats?.[3]?.base_stat}
        />
        <ProgressBar
            label="Special Defence"
            percentage={stats?.[4]?.base_stat}
        />
        <ProgressBar
            label="Speed"
            percentage={stats?.[5]?.base_stat}
        />
    </BaseStatWrapper>
)

const Character: React.FC<Props> = ({pokemon}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loading />
    }

    return (
        <CharacterWrapper>
            <LeftSection>
                <PokemonName>{capitalize(pokemon?.name)}</PokemonName>
                <TypeWrapper>
                    {pokemon?.types?.map((item, idx) => (
                        <TypeName
                            key={idx}
                        >
                            {item?.type?.name}
                        </TypeName>
                    ))}
                </TypeWrapper>
                <StatBar stats={pokemon?.stats} />
            </LeftSection>

            <ImageStyled
                src={pokemon?.sprites?.other?.dream_world?.front_default || pokemonBall}
                alt={pokemon?.name as string}
                width={400}
                height={400}
            />
        </CharacterWrapper>
    )
}

export default Character;

export const getStaticProps: GetStaticProps = async ({params}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${params?.name}`);
    const errorCode: boolean | number = res.ok ? false : res.status

    if (errorCode) {
        return {
            notFound: true
        }
    }

    const data = await res.json();

    return {
        props: {
            pokemon: data
        },
        revalidate: 1
    }
}

export const getStaticPaths: GetStaticPaths = () => ({
    paths: [],
    fallback: true
})
