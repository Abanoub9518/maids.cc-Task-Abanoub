import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>("userState");

export const selectUsers = createSelector(
  selectUserState,
  (state) => state.users
);

export const selectFilteredUsers = createSelector(
  selectUserState,
  (state) => state.filteredUsers
);

export const selectTotalUsers = createSelector(
  selectUserState,
  (state) => state.total
);

export const selectTotalPages = createSelector(
  selectUserState,
  (state) => state.totalPages
);

export const selectCurrentPage = createSelector(
  selectUserState,
  (state) => state.currentPage
);

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);

export const selectUserById = (userId: number) =>
  createSelector(selectUsers, (users) =>
    users.find((user) => user.id === userId)
  );

export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error
);
