import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {UserState} from "./user.state";

export const selectUserState = (state: AppState) => state.user;

// Step 2: Create a selector for the username
export const selectUsername = createSelector(
  selectUserState,
  (state: UserState) => state.username
);
