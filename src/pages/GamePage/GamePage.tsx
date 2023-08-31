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
import Loader from "../../ui/Loader/Loader";


const GamePage = () => {

    const [game, setGame] = useState<IGame>()
    const params = useParams()

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        if (params?.game_id) {
            setIsLoading(true)
            const cache_games = JSON.parse(localStorage.getItem('games') || '[]')
            while (Date.now() - cache_games?.at(-1)?.time > 300000) {
                cache_games.pop()
            }
            const cache_game = cache_games.filter((cache: { data: IGame, time: number }) => params.game_id && cache.data?.id === +params.game_id)[0]
            if (cache_game) {
                setGame(cache_game)
                setIsLoading(false)
            } else {
                getGame(+params.game_id).then(
                    game => {
                        setGame(game)
                        setIsLoading(false)
                        localStorage.setItem('games', JSON.stringify([{data: game, time: Date.now()}, ...cache_games]))
                    },
                    err => {
                        console.log(err)
                        setIsLoading(false)
                    }
                )
            }
        }

        return () => {
        }
    }, [])

    const [slideNum, setSlideNum] = useState(1)

    const [modalIsVisible, setModalIsVisible] = useState(false)

    return (
        <>
            <GamePageStyled>
                {isLoading
                    ? <Loader size={'large'}/>
                    : <>
                        {
                            game
                                ? <>
                                    <ShortInfo>
                                        <ReplyIcon className={'back'} onClick={() => {
                                            navigate(-1)
                                        }}/>
                                        <img src={game?.thumbnail}/>
                                        <h2>{game?.title}</h2>
                                        <Slides>
                                            <MainScreenshot
                                                src={`${game?.screenshots[slideNum]?.image || ""}`}
                                                id={'main-screenshot'}
                                                $mouseIsOver={modalIsVisible}
                                                onMouseOver={() => {
                                                    setModalIsVisible(true)

                                                }}
                                                onMouseLeave={() => {
                                                    setModalIsVisible(false)
                                                }}
                                            />
                                            {game?.screenshots && game?.screenshots?.length > 0 &&
                                                <Gallery>
                                                    <ArrowLeftIcon
                                                        onClick={() => {
                                                            if (slideNum > 0) {
                                                                setSlideNum(slideNum - 1)
                                                            }
                                                        }}
                                                    />
                                                    {game?.screenshots.slice(Math.max(slideNum - 1, 0), Math.min(slideNum + 2, game?.screenshots?.length + 1)).map((ss, i) =>
                                                        <img
                                                            key={ss.id}
                                                            src={`${ss.image}`}
                                                            className={'slide'}
                                                            style={{border: i === 1 ? '1px solid #4799eb' : 'none'}}
                                                        />
                                                    )}
                                                    <ArrowRightIcon
                                                        onClick={() => {
                                                            if (game?.screenshots && slideNum < game?.screenshots?.length) {
                                                                setSlideNum(slideNum + 1)
                                                            }
                                                        }}
                                                    />
                                                </Gallery>
                                            }
                                        </Slides>
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
                                            <Information title={"Ссылка на игру"}><a href={`${game?.game_url}`}
                                                                                     target={"_blank"}>Официальная
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
                                            src={`${game?.screenshots[slideNum]?.image || ""}`}
                                            style={{
                                                width: '80vw',
                                            }}
                                        />
                                    </div>
                                </>
                                : <>
                                    <ShortInfo>
                                        <ReplyIcon className={'back'} onClick={() => {
                                            navigate(-1)
                                        }}/>
                                    </ShortInfo>
                                    <LongInfo>
                                        <h1 style={{color: 'white', textAlign: 'center'}}>Не удалось получить данные :(</h1>
                                    </LongInfo>

                                </>
                        }
                    </>
                }
            </GamePageStyled>
        </>
    );
};

export default GamePage;