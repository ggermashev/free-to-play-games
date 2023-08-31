import styled from "styled-components";

const FooterStyled = styled.div`
  background-color:  #1c1e22;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 10em;
  color: white;
  width: 100%;
`

const Row = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export {FooterStyled, Row}