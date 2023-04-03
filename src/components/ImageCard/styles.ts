import Image from "next/image";
import styled from "styled-components";

interface ImgWrapperProps {
    bgColor: string
}

export const ImageStyled = styled(Image)`
  width: auto;
  height: 130px;
  
  @media(max-width: 768px) {
    width: auto;
    height: 60px;
  }
`

export const ImgWrapper = styled.div<ImgWrapperProps>`
  margin: 5px;
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  place-self: center;
  border: 2px solid #2C3E50;
  
  padding: 15px;
  background-color: ${p => p.bgColor};
  transition: color .3s, background .3s;
  
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #2C3E50;
  }

  @media(max-width: 768px) {
    width: 80px;
    height: 100px;
  }
`

export const TextWrapper = styled.div`
  margin: 15px 0 0 0;
  text-align: center;
`

export const NameText = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;

  @media(max-width: 768px) {
    font-size: 14px;
  }
`

export const IdText = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
`
