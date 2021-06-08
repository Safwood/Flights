import {combineReducers} from "redux";
import flights from "./flights/reducers"
import settings from "./settings";

const rootReducer = combineReducers({
    flights,
    settings
})

export default rootReducer