import styled from "styled-components";

const HeaderStyled = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 4em;
  background-color: inherit;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;

  img {
    margin-right: 2em;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 767px) {
    padding-right: .5em;

    img {
      margin-right: 0;
    }
  }
  
`

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
`

const Filters = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
  display: inherit;
  gap: inherit;
`


export {HeaderStyled, Container, Filters}