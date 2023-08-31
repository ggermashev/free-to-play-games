import styled from "styled-components";

const MainPageStyled = styled.div`
 
`

const BannerBG = styled.div`
  position: relative;
  height: 20em;
  width: 100vw;
  background-color: rgba(0,0,0,0.3);
`

const Banner = styled.div`
  background-image: url(${require('../../images/banner_bg.png')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  max-width: 900px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  color: rgba(255,255,255,0.5);
  
  
  p {
    font-size: 1.5em;
    text-align: center;
  }
  
  a {
    text-decoration: none;
    color: #4799eb;
    &:hover {
      color: white;
    }
  }
`

const ChosenFilters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  padding: 1em;
  margin: 0 auto;
  gap: .5em;
  color: white;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2em;
  
  @media(max-width: 767px) {
    flex-direction: column;
    align-items: start;
    gap: 1em;
  }
`

const GamesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  padding: 1em;
`

export {
    MainPageStyled,
    BannerBG,
    Banner,
    GamesContainer,
    ChosenFilters,
    Row
}