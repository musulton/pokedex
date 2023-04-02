import {memo} from "react";
import {css} from "styled-components"
import {Child, COLOR_TYPE, Label, Parent, ProgressBarWrapper} from "@/components/ProgressBar/styles";

interface Props {
    percentage: number
    label: string
}

const getColorType = (percentage: number): any => {
    if (percentage >= 80) {
        return COLOR_TYPE["green"]
    } else if (percentage >= 60) {
        return COLOR_TYPE["orange"]
    } else if (percentage >= 40) {
        return COLOR_TYPE["yellow"]
    } else {
        return COLOR_TYPE["red"]
    }
}


const ProgressBar = ({
     percentage,
     label,
}: Props): JSX.Element => {
    return (
        <ProgressBarWrapper>
            <Label>{label} {percentage}</Label>
            <Parent>
                <Child percentage={percentage} progressColor={getColorType(percentage)} />
            </Parent>
        </ProgressBarWrapper>
    )
}

export default memo(ProgressBar);
