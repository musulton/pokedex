import styled from "styled-components";

export const colors = [
    "#4DB6AC", "#81C784", "#AED581", "#DCE775", "#FFD54F", "#FFB74D", "#FF8A65"
]

export const MainStyled = styled.main`
  min-height: 100vh;
  background-color: aliceblue;
  padding: 1rem 6rem;
`

export const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  
  @media(max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    grid-column-gap: 35px;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1023px){
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    grid-column-gap: 30px;
  }
`

export const Title = styled.h1`
  font-size: 38px;
  text-align: left;
`

export const Description = styled.p`
  
`

export const InfoContainer = styled.div`
  margin: 20px 0;
`
