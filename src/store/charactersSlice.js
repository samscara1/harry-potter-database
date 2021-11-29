import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async function(characters = '') {
            let response = await fetch(`https://hp-api.herokuapp.com/api/characters/${characters}`)
            let chars = await response.json()
            return chars
    }

)

const initialState = {
    characters: [],
    searchValue: ''
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        changeSearchValue: (state, { payload: { value } }) => {
            state.searchValue = value
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.characters = action.payload
        })
    }
})

export const { changeSearchValue } = charactersSlice.actions;

export default charactersSlice.reducer;