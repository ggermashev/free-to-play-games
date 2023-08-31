import styled from "styled-components";

const GameCardStyled = styled.div`
  width: 300px;
  height: 420px;
  background-color: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.5);
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    cursor: pointer;
    box-shadow: white 2px -2px 10px;
  }
  
  h3 {
    text-align: center;
    color: white;
    text-shadow: black 3px 3px 5px;
    padding: 1em 0;
    min-height: 4em;
  }
`

const Photo = styled.img`
  width: 100%;
  height: auto;
`

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .5em;
  margin-bottom: 1em;
  
  li {
    span {
      position: relative;
      left: -12px;
    }
  }
`

const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  line-height: 1.5em;
  -webkit-line-clamp: 3;
  
  &:hover {
    -webkit-line-clamp: 6;
    overflow-y: visible;
    color: white;
    text-shadow: black 4px 4px 10px;
    z-index: 5;
  }
`

export {GameCardStyled, Info, Photo, Description}