import {memo} from "react";

import styles from "@/styles/Component.module.css"

interface Props {
    progress: number
    label: string
    color: string
    bgColor: string

}

const ProgressBar = ({
     progress,
     label,
     color,
     bgColor
}: Props): JSX.Element => {
    return (
        <>
            <h3>{label} = {progress}%</h3>
            <div className={styles.progressBarContainer} style={{
                backgroundColor: bgColor
            }}>
                <div className={styles.progressBarChild} style={{
                    width: `${progress}%`,
                    backgroundColor: color
                }} />
            </div>
        </>
    )
}

export default memo(ProgressBar);
