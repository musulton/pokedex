import {memo, useState} from "react";
import Image from "next/image";

import {capitalize, getRandomColor, padWithLeadingZeros} from "@/utils/function";
import {ImageLinkItem} from "@/types";
import styles from "@/styles/Component.module.css"
import {useRouter} from "next/router";
import {IdText, ImageStyled, ImgWrapper, NameText, TextWrapper} from "@/components/ImageCard/styles";

interface Props {
    imageItem: ImageLinkItem
}

const ImageCard = ({imageItem}: Props): JSX.Element => {
    const router = useRouter()
    const [isLoading, setLoading] = useState(true)

    return (
            <ImgWrapper
                onClick={() => router.push(`/pokemon/${imageItem?.name}`)}
                bgColor={getRandomColor()}
            >
                <ImageStyled
                    src={imageItem.imageSrc}
                    alt={imageItem.name}
                    onLoadingComplete={() => setLoading(false)}
                    width={150}
                    height={150}
                    isLoading={isLoading}
                />
                <TextWrapper>
                    <NameText>{capitalize(imageItem.name)}</NameText>
                    <IdText>#{padWithLeadingZeros(imageItem.id, 3)}</IdText>
                </TextWrapper>
            </ImgWrapper>
    )
}

export default memo(ImageCard);
