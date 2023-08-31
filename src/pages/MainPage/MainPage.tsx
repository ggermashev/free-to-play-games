import React, {useEffect, useState} from 'react';
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

const MainPage = () => {

    const games = useAppSelector(state => state.games).games
    const filters = useAppSelector(state => state.filters)
    const dispatch = useAppDispatch()

    const [visibleGames, setVisibleGames] = useState<IGame[]>([])

    useEffect(() => {

        getGames({genre: filters.genre, platform: filters.platform, sortBy: filters.sortBy}).then(games => {
            dispatch(setGames(games))
            setVisibleGames(games.slice(0, 12))
        })

        return () => {
        }
    }, [filters.genre, filters.platform, filters.sortBy])

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
                        const cpGames = [...games]
                        dispatch(setGames(cpGames.reverse()))
                        setVisibleGames(cpGames.slice(0, 12))
                    }}>Перевернуть</Button>
                </Row>
            </ChosenFilters>
            <GamesContainer>
                {visibleGames.map(game => <GameCard key={game.id} game={game}/>)}
            </GamesContainer>
        </MainPageStyled>
    );
};

export default MainPage;