import styled, {css} from "styled-components";

const GamePageStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  max-width: 1600px;
  margin: 4em auto;
  gap: 2em;
  position: relative;

  h3 {
    color: white;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`
const ShortInfo = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  h2 {
    text-align: center;
  }

  svg.back {
    position: absolute;
    align-self: start;
    height: 2em;
    width: 2em;
    top: -2.5em;
    left: .5em;

    &:hover {
      cursor: pointer;
      color: #4799eb;
    }
  }
`

const LongInfo = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: rgba(255, 255, 255, 0.5);

  p {
    line-height: 1.5em;
    @media (max-width: 1400px) {
      width: 600px;
    }
    @media (max-width: 1100px) {
      width: 600px;
    }
    @media (max-width: 650px) {
      width: 550px;
    }
    @media (max-width: 580px) {
      width: 450px;
    }
    @media (max-width: 500px) {
      width: 400px;
    }
    @media (max-width: 430px) {
      width: 350px;
    }
    @media (max-width: 390px) {
      width: 300px;
    }
    @media (max-width: 330px) {
      width: 250px;
    }
    @media (max-width: 270px) {
      width: 200px;
    }
  }

  @media (max-width: 1100px) {
    align-items: center;
  }

`

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: 1em;
  max-width: 900px;
  min-width: 600px;
  margin: 0 auto;

  @media (max-width: 650px) {
    width: 100%;
    min-width: 0;
  }

  div {
    width: 26%;

    @media (max-width: 1350px) {
      width: 34%;
    }

    @media (max-width: 650px) {
      width: 100%;
    }
  }

  a {
    color: #4799eb;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`

const Requirements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  position: relative;
  gap: 1em;
  max-width: 900px;
  min-width: 600px;

  @media (max-width: 650px) {
    width: 100%;
    min-width: 0;
  }

  div {
    width: 100%;
    @media (max-width: 1400px) {
      width: 600px;
    }
    @media (max-width: 1100px) {
      width: 600px;
    }
    @media (max-width: 650px) {
      width: 550px;
    }
    @media (max-width: 580px) {
      width: 450px;
    }
    @media (max-width: 500px) {
      width: 400px;
    }
    @media (max-width: 430px) {
      width: 350px;
    }
    @media (max-width: 390px) {
      width: 300px;
    }
    @media (max-width: 330px) {
      width: 250px;
    }
    @media (max-width: 270px) {
      width: 200px;
    }
  }
`

interface IMainScreenshot {
    $mouseIsOver: boolean
}

const MainScreenshot = styled.img<IMainScreenshot>`
  width: 250px;
  position: relative;
  opacity: 1;
  z-index: 1;

  ${props => props.$mouseIsOver && css`
    opacity: 0;
    z-index: 100;
  `}
`

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .5em;

  img {
    width: 50px;
    height: 50px;
  }

  img.slide {
    height: auto;
    width: 70px;
  }

  svg {
    color: white;
    height: 40px;
    width: 40px;

    &:hover {
      cursor: pointer;
      color: #4799eb;
    }
  }
`

const Slides = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;
`

export {
    GamePageStyled,
    ShortInfo,
    LongInfo,
    Slides,
    AdditionalInfo,
    Requirements,
    MainScreenshot,
    Gallery
}