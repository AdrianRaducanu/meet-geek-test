import {createReducer, on} from "@ngrx/store";
import {initialState} from "./user.state";
import {setUsername} from "./user.actions";

export const userReducer = createReducer(
  initialState,
  on(setUsername, (state, {username}) => ({ ...state, username}))
);
