import styled from "styled-components";

export const colors = [
    "#4DB6AC", "#81C784", "#AED581", "#DCE775", "#FFD54F", "#FFB74D", "#FF8A65"
]

export const MainStyled = styled.main`
  min-height: 100vh;
  background-color: aliceblue;
  padding: 1rem 6rem;
`

export const Container = styled.div`
`

export const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

export const Title = styled.h1`
  font-size: 38px;
  text-align: left;
`

export const Description = styled.p`
  
`

export const InfoContainer = styled.div`
  margin: 25px 0;
`
