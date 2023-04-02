import {colors} from "@/pages/pokemon/styled";

export const getRandomColor = (): string => {
    const randomPick = Math.floor(Math.random() * colors.length);
    return colors[randomPick]
}

export const capitalize = (str: string): string => str?.charAt(0)?.toUpperCase() + str?.slice(1);

export const padWithLeadingZeros = (num: number, totalLength: number): string => {
    return String(num)?.padStart(totalLength, '0');
}
