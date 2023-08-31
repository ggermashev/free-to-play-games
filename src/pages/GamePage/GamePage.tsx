import React, {useEffect, useState} from 'react';
import {
    GamePageStyled,
    ShortInfo,
    LongInfo,
    Slides,
    AdditionalInfo,
    Requirements,
    MainScreenshot,
    Gallery
} from "./GamePage.styled";
import {IGame} from "../../types/types";
import {getGame, getGames} from "../../api/api";
import {useNavigate, useParams} from "react-router-dom";
import Information from "../../ui/Information/Information";
import ReplyIcon from '@mui/icons-material/Reply';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const GamePage = () => {

    const [game, setGame] = useState<IGame>()
    const params = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        if (params?.game_id) {
            getGame(+params.game_id).then(game => {
                setGame(game)
            })
        }

        return () => {
        }
    }, [])

    const [slideNum, setSlideNum] = useState(0)

    const [modalIsVisible, setModalIsVisible] = useState(false)

    return (
        <>
            <GamePageStyled>
                <ShortInfo>
                    <ReplyIcon className={'back'} onClick={() => {
                        navigate(-1)
                    }}/>
                    <img src={game?.thumbnail}/>
                    <h2>{game?.title}</h2>
                    {/*<Slides>*/}
                    {/*    <MainScreenshot*/}
                    {/*        src={`${game?.screenshots[slideNum].image || ""}`}*/}
                    {/*        id={'main-screenshot'}*/}
                    {/*        $mouseIsOver={modalIsVisible}*/}
                    {/*        onMouseOver={() => {*/}
                    {/*            setModalIsVisible(true)*/}

                    {/*        }}*/}
                    {/*        onMouseLeave={() => {*/}
                    {/*            setModalIsVisible(false)*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*    <Gallery>*/}
                    {/*        <ArrowLeftIcon*/}
                    {/*            onClick={() => {*/}
                    {/*                if (slideNum > 0) {*/}
                    {/*                    setSlideNum(slideNum - 1)*/}
                    {/*                }*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*        {game?.screenshots.slice(slideNum - 1, slideNum + 2).map((ss, i) =>*/}
                    {/*            <img*/}
                    {/*                key={ss.id}*/}
                    {/*                src={`${ss.image}`}*/}
                    {/*            />*/}
                    {/*        )}*/}
                    {/*        <ArrowRightIcon*/}
                    {/*            onClick={() => {*/}
                    {/*                if (game?.screenshots && slideNum < game?.screenshots?.length) {*/}
                    {/*                    setSlideNum(slideNum + 1)*/}
                    {/*                }*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*    </Gallery>*/}
                    {/*</Slides>*/}
                </ShortInfo>
                <LongInfo>
                    <p>{game?.description}</p>
                    <h3>Дополнительная информация</h3>
                    <AdditionalInfo>
                        <Information title={"Дата релиза"}>{game?.release_date}</Information>
                        <Information title={"Жанр"}>{game?.genre}</Information>
                        <Information title={"Издатель"}>{game?.publisher}</Information>
                        <Information title={"Разработчик"}>{game?.developer}</Information>
                        <Information title={"Платформа"}>{game?.platform}</Information>
                        <Information title={"Ссылка на игру"}><a href={`${game?.game_url}`} target={"_blank"}>Официальная
                            страница</a></Information>
                    </AdditionalInfo>
                    <h3>Системные требования</h3>
                    <Requirements>
                        <Information
                            title={"OS"}>{game?.minimum_system_requirements?.os || 'Нет информации'}</Information>
                        <Information
                            title={"Processor"}>{game?.minimum_system_requirements?.processor || 'Нет информации'}</Information>
                        <Information
                            title={"Memory"}>{game?.minimum_system_requirements?.memory || 'Нет информации'}</Information>
                        <Information
                            title={"Graphics"}>{game?.minimum_system_requirements?.graphics || 'Нет информации'}</Information>
                        <Information
                            title={"Storage"}>{game?.minimum_system_requirements?.storage || 'Нет информации'}</Information>
                    </Requirements>
                </LongInfo>
                <div
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'fixed',
                        width: '100%',
                        height: '100vh',
                        top: 0,
                        left: 0,
                        zIndex: 50,
                        // display: 'flex'
                        display: modalIsVisible ? "flex" : 'none',
                    }}
                >
                    <img
                        src={`${game?.screenshots[slideNum].image || ""}`}
                        style={{
                            width: '80vw',
                        }}
                    />
                </div>
            </GamePageStyled>
        </>
    );
};

export default GamePage;