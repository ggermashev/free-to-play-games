import styled, {css} from "styled-components";

interface IDropdown {
    $showDropdown: boolean
}

const SelectStyled = styled.div`
  background-color: inherit;
  color: rgba(255, 255, 255, 0.5);
  @media (hover: hover) {
    &:hover {
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  position: relative;
`

const Dropdown = styled.div<IDropdown>`
  top: 3em;
  position: absolute;
  min-width: 10em;
  background-color: #3a3f44;
  color: #aaa;
  overflow-y: auto;
  max-height: 20em;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: .3em;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid black;
  p {
    padding: .5em 1em .5em 2em;
    width: 100%;
    @media(hover: hover) {
      &:hover {
        cursor: pointer;
        background-color: #272b30;
        color: white;
      }
    }
  }
  
  
  ${prop => !prop.$showDropdown && css`
    display: none;
  `}
`

export {SelectStyled, Dropdown}