import React, {FC} from 'react';
import {IGame} from "../../types/types";
import {GameCardStyled, Info, Photo, Description} from "./GameCard.styled";
import {useNavigate} from "react-router-dom";

interface IGameCard {
    game: IGame
}

const GameCard: FC<IGameCard> = ({game}) => {

    const navigate = useNavigate()

    return (
        <GameCardStyled
            onClick={() => {
                navigate(`/game/${game.id}`)
            }}
        >
            <Photo src={game.thumbnail}/>
            <h3>{game.title}</h3>
            <Info>
                <li><span>Жанр: {game.genre}</span></li>
                <li><span>Издатель: {game.publisher}</span></li>
                <li><span>Дата релиза: {game.release_date}</span></li>
            </Info>
            <Description>{game.short_description}</Description>
        </GameCardStyled>
    );
};

export default GameCard;