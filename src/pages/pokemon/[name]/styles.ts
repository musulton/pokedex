import styled from "styled-components";

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  box-sizing: border-box;
  padding: 0 30px;
`
export const PokemonName = styled.h1`
  color: black;
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 1rem 0 0;
`

export const TypeName = styled.h4`
  color: black;
  font-size: 14px;
  margin: 0 0.5rem 1rem 0;
  padding: 8px;
  text-align: center;
  background-color: #BDC3C7;
  border: 2px solid #2C3E50;
`

export const CharacterWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`

export const BaseStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`

export const BaseStatText = styled.h3`
  margin: 0;
`
