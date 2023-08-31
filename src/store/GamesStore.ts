import {createSlice} from "@reduxjs/toolkit";
import {IGame} from "../types/types"

const Games = createSlice({
    name: "Games",
    initialState: {
        games: [] as IGame[],
    },
    reducers: {
        setGames(state, action) {
            try {
                state.games = [...action.payload]
            } catch (e) {
                console.log(e)
                state.games = [] as IGame[]
            }
        }
    }
})

export default Games.reducer
export const {
    setGames
} = Games.actions