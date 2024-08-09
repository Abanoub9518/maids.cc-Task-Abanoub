import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

// Selector to get the entire user state
export const selectUserState = createFeatureSelector<UserState>("userState");

// Selector to get the list of users from the state
export const selectUsers = createSelector(
  selectUserState,
  (state) => state.users
);

// Selector to get the filtered list of users from the state
export const selectFilteredUsers = createSelector(
  selectUserState,
  (state) => state.filteredUsers
);

// Selector to get the total number of users from the state
export const selectTotalUsers = createSelector(
  selectUserState,
  (state) => state.total
);

// Selector to get the total number of pages from the state
export const selectTotalPages = createSelector(
  selectUserState,
  (state) => state.totalPages
);

// Selector to get the current page number from the state
export const selectCurrentPage = createSelector(
  selectUserState,
  (state) => state.currentPage
);

// Selector to get a single user object from the state
export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);

// Selector to get a user by their ID from the list of users
export const selectUserById = (userId: number) =>
  createSelector(selectUsers, (users) =>
    users.find((user) => user.id === userId)
  );

// Selector to get any errors related to user operations from the state
export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error
);
