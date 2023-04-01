import {GetStaticPaths, GetStaticProps} from "next";
import Image from "next/image";

import ProgressBar from "@/components/ProgressBar";
import styles from "@/styles/Pokemon.module.css"

type Stat = Array<{ base_stat: number }>
interface Props {
    pokemon: {
        name: string
        types: Array<{
            type: {
                name: string
            }
        }>
        stats: Array<{ stat: Stat }>
        sprites: {
            other: {
                dream_world: {
                    front_default: string
                }
            }
        }
    },
}

const StatBar = ({ stats }: { stats: Stat }): JSX.Element => (
    <>
        <ProgressBar
            label="HP"
            bgColor={"#A5D6A7"}
            color={"#43A047"}
            progress={stats?.[0]?.base_stat}
        />
        <ProgressBar
            label="Attack"
            bgColor={"#FFAB91"}
            color={"#E64A19"}
            progress={stats?.[1]?.base_stat}
        />
        <ProgressBar
            label="Defense"
            bgColor={"#FFF59D"}
            color={"#FBC02D"}
            progress={stats?.[2]?.base_stat}
        />
        <ProgressBar
            label="Special Attack"
            bgColor={"#EF9A9A"}
            color={"#D32F2F"}
            progress={stats?.[3]?.base_stat}
        />
        <ProgressBar
            label="Special Defence"
            bgColor={"#FFAB91"}
            color={"#E64A19"}
            progress={stats?.[4]?.base_stat}
        />
        <ProgressBar
            label="Speed"
            bgColor={"#81D4FA"}
            color={"#0288D1"}
            progress={stats?.[5]?.base_stat}
        />
    </>
)

const Character = ({pokemon}: Props): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>{pokemon?.name}</h1>
                <div className={styles.typeContainer}>
                    <p className={styles.type}>{pokemon?.types?.[0]?.type?.name}</p>
                    <p className={styles.type}>{pokemon?.types?.[1]?.type?.name}</p>
                </div>
            </div>

            <Image
                src={pokemon?.sprites?.other?.dream_world?.front_default as string}
                alt={pokemon?.name as string}
                width={300}
                height={300}
            />
            <StatBar stats={pokemon?.stats as Stat} />
        </div>
    )
}

export default Character;

export const getStaticProps: GetStaticProps = async ({params}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${params.name}`);
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
    }
}

export const getStaticPaths: GetStaticPaths = () => ({
    paths: [],
    fallback: true
})
