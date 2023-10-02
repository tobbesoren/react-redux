
import { combineReducers } from "redux";
import {reducer as counterReducer} from "./counter";
import {reducer as profileReducer} from "./profile";

const rootReducer = combineReducers({
    counter: counterReducer,
    profile: profileReducer
})

export {rootReducer};