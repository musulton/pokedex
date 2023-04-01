import {memo, useState} from "react";
import Image from "next/image";

import {getRandomRGB} from "@/utils/styles";
import Link from "next/link";
import {ImageLinkItem} from "@/types";
import styles from "@/styles/Component.module.css"

interface Props {
    imageItem: ImageLinkItem
}

const ImageLink = ({imageItem}: Props): JSX.Element => {
    const [isLoading, setLoading] = useState(true)

    return (
        <Link href={`/pokemon/${imageItem?.name}`}>
            <Image
                src={imageItem.imageSrc}
                alt={imageItem.name}
                onLoadingComplete={() => setLoading(false)}
                width={200}
                height={100}
                className={styles.image}
                style={{
                    backgroundColor: getRandomRGB()
                }}
            />
            <h3>{imageItem.name}</h3>
        </Link>
    )
}

export default memo(ImageLink);
