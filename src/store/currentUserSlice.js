import localDb from "../API/local";

const {createSlice} = require("@reduxjs/toolkit");

const defaultState = {
    currentUser: localDb.getItem('user') || null,
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: defaultState,
    reducers: {
        addCurrentUser(state, action) {
            state.currentUser = {...state.currentUser, ...action.payload};
            localDb.setItem('user', state.currentUser);
        },
        deleteCurrentUserAndLogOut(state, action) {
            state.currentUser = null;
            localDb.removeItem('user');
        }
    }
})

export default currentUserSlice.reducer
export const {addCurrentUser, deleteCurrentUserAndLogOut} = currentUserSlice.actions