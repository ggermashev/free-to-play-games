import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getGames} from "../../api/api";
import {setGames} from "../../store/GamesStore";
import {
    MainPageStyled,
    BannerBG,
    Banner,
    GamesContainer,
    ChosenFilters,
    Row,
} from "./MainPage.styled";
import GameCard from "../../components/GameCard/GameCard";
import {IGame} from "../../types/types";
import Button from "../../ui/Button/Button";
import Loader from "../../ui/Loader/Loader";

const MainPage = () => {

    const games = useAppSelector(state => state.games).games
    const [visibleGames, setVisibleGames] = useState<IGame[]>()
    const filters = useAppSelector(state => state.filters)
    const dispatch = useAppDispatch()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getGames({genre: filters.genre, platform: filters.platform, sortBy: filters.sortBy}).then(
            games => {
                dispatch(setGames(games))
                setVisibleGames(games?.slice(0, 12))
                setIsLoading(false)
            },
            err => {
                console.log(err)
                setIsLoading(false)
            })

        return () => {
        }
    }, [filters.genre, filters.platform, filters.sortBy])

    const onVisible = useCallback((isVisible: boolean) => {
        if (isVisible) {
            setIsLoading(true)
            if (visibleGames) {
                setVisibleGames([...visibleGames, ...games?.slice(visibleGames.length, visibleGames.length + 12)])
            }
            setIsLoading(false)
        }
    }, [visibleGames])

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1,
        };
        let observer = new IntersectionObserver(entry => {
            onVisible(entry[0].isIntersecting)
        }, options);
        observer.observe(document.querySelector(`#border`) as Element)

        return () => {
            observer.disconnect()
        }
    }, [visibleGames])

    return (
        <MainPageStyled>
            <BannerBG>
                <Banner>
                    <p>Сервис разработан в рамках тестового задания</p>
                    <p>Оригинальный источник доступен по
                        <a href={"https://www.freetogame.com/"} target={"_blank"}> ссылке</a>
                    </p>
                </Banner>
            </BannerBG>
            <ChosenFilters>
                <h3>Примененные фильры</h3>
                <Row>
                    <p><span style={{color: '#4799eb'}}>Платформа: </span>{filters.platform}</p>
                    <p><span style={{color: '#4799eb'}}>Жанр: </span>{filters.genre}</p>
                    <p><span style={{color: '#4799eb'}}>Сортировать по: </span>{filters.sortBy}</p>
                    <Button onClick={() => {
                        const cpGames = [...games].reverse()
                        dispatch(setGames(cpGames))
                        setVisibleGames(cpGames.slice(0,12))
                    }}>Перевернуть</Button>
                </Row>
            </ChosenFilters>
            <GamesContainer>
                {isLoading
                    ? <Loader size={'large'}/>
                    : <>
                        {visibleGames
                            ?
                            <>
                                {visibleGames.map(game => <GameCard key={game.id} game={game}/>)}
                            </>
                            : <h1 style={{textAlign: 'center'}}>Не удалось получить данные :(</h1>
                        }
                    </>
                }
                <div id={"border"} className={'border'}>

                </div>
            </GamesContainer>
        </MainPageStyled>
    );
};

export default MainPage;