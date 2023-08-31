import styled from "styled-components";

const MenuBtnStyled = styled.button`
  @media(min-width: 767px) {
    display: none;
  }
  background-color: inherit;
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.5);
  border-radius: .3em;
  padding: 0 .5em;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: rgba(255,255,255,0.7);
    }
  }
  svg {
    height: 1.5em;
    width: auto;
  }
`

export {MenuBtnStyled}