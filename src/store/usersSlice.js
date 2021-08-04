import localDb from "../API/local";

const {createSlice} = require("@reduxjs/toolkit");

const defaultState = {
    users: localDb.getItem('users') || [],
}

const usersSlice = createSlice({
    name: 'users',
    initialState: defaultState,
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload);
            localDb.setItem('users', state.users);
        }
    }
})

export default usersSlice.reducer
export const {addUser} = usersSlice.actions