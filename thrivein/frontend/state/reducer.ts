import { combineReducers } from "redux";

// reducers
import { reducer as user } from "./user";

const reducers = {
  user,
};

const combinedReducers = combineReducers(reducers);

// Use the undefined trick to clear state, https://stackoverflow.com/a/35641992
export const appReducer = (state, action) => {
  if (action.type === "CLEAR_ALL_STATE") {
    return combinedReducers(undefined, action);
  }

  return combinedReducers(state, action);
};
