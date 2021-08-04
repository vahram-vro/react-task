import localDb from "../API/local";

const {createSlice} = require("@reduxjs/toolkit");

const defaultState = {
    suggestions: localDb.getItem('suggestions') || [],
}

const suggestionsSlice = createSlice({
    name: 'suggestions',
    initialState: defaultState,
    reducers: {
        setSuggestions(state, action) {
            state.suggestions.push(action.payload)
            localDb.setItem('suggestions', state.suggestions)
        },
        deleteSuggestions(state, action) {
            state.suggestions = state.suggestions.filter((item) => item.email !== action.payload.email);
            localDb.setItem('suggestions', state.suggestions)
        },
    }
})

export default suggestionsSlice.reducer
export const {setSuggestions, deleteSuggestions} = suggestionsSlice.actions