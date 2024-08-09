import { Action, createReducer, on } from "@ngrx/store";
import {
  loadUsersSuccess,
  loadUsersFailure,
  loadUserSuccess,
  loadUserFailure,
  selectUserById,
} from "./user.actions";
import { User } from "../model/user.model";

export interface UserState {
  users: User[];
  filteredUsers: User[];
  total: number;
  totalPages: number;
  currentPage: number;
  error: any;
  user: { data: User };
}

export const initialState: UserState = {
  users: [],
  filteredUsers: [],
  total: 0,
  totalPages: 0,
  currentPage: 1,
  error: null,
  user: {
    data: {
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      avatar: "",
    },
  },
};

const _userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { paginatedUsers }) => ({
    ...state,
    users: paginatedUsers.data,
    filteredUsers: paginatedUsers.data,
    total: paginatedUsers.total,
    totalPages: paginatedUsers.total_pages,
    currentPage: paginatedUsers.page,
    error: null,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(loadUserFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(selectUserById, (state, { id }) => {
    console.log(!id);
    if (id == "") {
      return {
        ...state,
        filteredUsers: state.users,
        totalPages: state.total / state.users.length,
        currentPage: state.currentPage,
      };
    }

    const user = state.users.find((user) => user.id == parseInt(id));
    return {
      ...state,
      filteredUsers: user ? [user] : [],
      totalPages: 1,
      currentPage: 1,
    };
  })
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
