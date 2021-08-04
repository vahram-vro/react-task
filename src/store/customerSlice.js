const {createSlice} = require("@reduxjs/toolkit");

const defaultState = {
    customers: [],
}

const customerSlice = createSlice({
    name: 'customers',
    initialState: defaultState,
    reducers: {
        setCustomer(state, action) {
            state.customers = action.payload
        }
    }
})

export default customerSlice.reducer
export const {setCustomer} = customerSlice.actions