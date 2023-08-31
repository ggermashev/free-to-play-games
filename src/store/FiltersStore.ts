import {createSlice} from "@reduxjs/toolkit";

const Filters = createSlice({
    name: "Filters",
    initialState: {
        platform: 'all',
        genre: 'all',
        sortBy: 'all'

    },
    reducers: {
        setPlatform(state, action) {
            state.platform = action.payload
        },
        setGenre(state, action) {
            state.genre = action.payload
        },
        setSortBy(state, action) {
            state.sortBy = action.payload
        }
    }
})

export default Filters.reducer
export const {
    setPlatform,
    setGenre,
    setSortBy
} = Filters.actions