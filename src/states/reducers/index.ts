import { combineReducers } from "redux";
import repositoriesReducer from "./repositoryReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
