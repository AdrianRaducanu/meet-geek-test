import { createAction, props } from '@ngrx/store';

export const setUsername = createAction(
  '[Username] Set',
  props<{ username: string }>()
);
