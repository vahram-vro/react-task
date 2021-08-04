import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import currentUserSlice from "./currentUserSlice";
import customerSlice from "./customerSlice";
import countrySlice from "./countrySlice";
import usersSlice from "./usersSlice";
import suggestionsSlice from "./suggestionsSlice";

const reducer = combineReducers({
    // here we will be adding reducers
    users: usersSlice,
    current: currentUserSlice,
    customer: customerSlice,
    country: countrySlice,
    suggestion: suggestionsSlice
})

const store = configureStore({
    reducer,
})

export default store;