import { createAction, props } from "@ngrx/store";
import { PaginatedUsers } from "../model/user.model";

// Load a list of users
export const loadUsers = createAction(
  "[User] Load Users",
  props<{ page: number }>()
);

// Success and failure actions for loading users
export const loadUsersSuccess = createAction(
  "[User] Load Users Success",
  props<{ paginatedUsers: PaginatedUsers }>()
);

export const loadUsersFailure = createAction(
  "[User] Load Users Failure",
  props<{ error: any }>()
);

// Load a single user
export const loadUser = createAction(
  "[User] Load User",
  props<{ id: number }>()
);

// Success and failure actions for loading a single user
export const loadUserSuccess = createAction(
  "[User] Load User Success",
  props<{ user: any }>()
);

export const loadUserFailure = createAction(
  "[User] Load User Failure",
  props<{ error: any }>()
);

// Action to select a user by ID
export const selectUserById = createAction(
  "[User] Select User By ID",
  props<{ id: string }>()
);
