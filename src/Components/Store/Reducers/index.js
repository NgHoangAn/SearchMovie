import { combineReducers } from "redux";
import reducerMovies from "./ReducerMovies";

const rootReducer = combineReducers({
    infoMovies: reducerMovies
});
export default rootReducer;