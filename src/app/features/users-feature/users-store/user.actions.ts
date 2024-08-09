import { createAction, props } from "@ngrx/store";
import { PaginatedUsers } from "../model/user.model";

// Load Users
export const loadUsers = createAction(
  "[User] Load Users",
  props<{ page: number }>()
);

export const loadUsersSuccess = createAction(
  "[User] Load Users Success",
  props<{ paginatedUsers: PaginatedUsers }>()
);

export const loadUsersFailure = createAction(
  "[User] Load Users Failure",
  props<{ error: any }>()
);

// Load Single User
export const loadUser = createAction(
  "[User] Load User",
  props<{ id: number }>()
);

export const loadUserSuccess = createAction(
  "[User] Load User Success",
  props<{ user: any }>()
);

export const loadUserFailure = createAction(
  "[User] Load User Failure",
  props<{ error: any }>()
);

// Search Users
export const selectUserById = createAction(
  "[User] Select User By ID",
  props<{ id: string }>()
);
