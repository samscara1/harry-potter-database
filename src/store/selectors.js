export const selectCharacters = state => state.characters.characters
export const selectSearchValue = state => state.characters.searchValue
export const selectFilteredCharacters = state => state.characters.characters.filter(char => {
    return(
        char.name.toLowerCase().includes(state.characters.searchValue.toLowerCase()) ||
        char.house.toLowerCase().includes(state.characters.searchValue.toLowerCase())
    )       
})
