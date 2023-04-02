import {memo} from "react";
import {useRouter} from "next/router";

import {capitalize, getRandomColor, padWithLeadingZeros} from "@/utils/common";
import {ImageLinkItem} from "@/types";
import {IdText, ImageStyled, ImgWrapper, NameText, TextWrapper} from "@/components/ImageCard/styles";

interface Props {
    imageItem: ImageLinkItem
}

const ImageCard = ({imageItem}: Props): JSX.Element => {
    const router = useRouter()

    return (
            <ImgWrapper
                onClick={() => router.push(`/pokemon/${imageItem?.name}`)}
                bgColor={getRandomColor()}
            >
                <ImageStyled
                    src={imageItem.imageSrc}
                    alt={imageItem.name}
                    width={150}
                    height={150}
                />
                <TextWrapper>
                    <NameText>{capitalize(imageItem.name)}</NameText>
                    <IdText>#{padWithLeadingZeros(imageItem.id, 3)}</IdText>
                </TextWrapper>
            </ImgWrapper>
    )
}

export default memo(ImageCard);
