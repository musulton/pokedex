import styled, {css} from "styled-components";

export const COLOR_TYPE: { [key: string]: any } = {
    green: css`background-color: #27AE60`,
    orange: css`background-color: #E67E22`,
    yellow: css`background-color: #F1C40F`,
    red: css`background-color: #E74C3C`
}

export const Label = styled.h3`
  font-size: 14px;
  font-weight: normal;
  margin: 5px;
`
export const Parent = styled.div`
  height: 10px;
  width: 100%;
  background-color: lightgray;
  border: 2px solid #2C3E50;
`

interface ChildProps {
    percentage: number
    progressColor: string
}

export const Child = styled.div<ChildProps>`
  height: 100%;
  width: ${p => p.percentage / 1.5}%;
  ${p => p.progressColor}
`

export const ProgressBarWrapper = styled.div`
  margin: 5px 0;    
`
