const {createSlice} = require("@reduxjs/toolkit");

const defaultState = {
    country: [],
}

const countrySlice = createSlice({
    name: 'country',
    initialState: defaultState,
    reducers: {
        setCountries(state, action) {
            state.country = action.payload
        }
    }
})

export default countrySlice.reducer
export const {setCountries} = countrySlice.actions