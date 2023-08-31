import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: .5em;
  border-radius: .5em;
  background-image: linear-gradient(#4799eb, #4799eb 60%, #49acff);
  color: white;
  font-size: 1.05em;

  @media(hover: hover) {
    &:hover {
      cursor: pointer;
      background-image: linear-gradient(#478eeb, #4780eb 60%, #496dff);
    }
  }
  
`

export {ButtonStyled}