import { Action, createReducer, on } from "@ngrx/store";
import {
  loadUsersSuccess,
  loadUsersFailure,
  loadUserSuccess,
  loadUserFailure,
  selectUserById,
} from "./user.actions";
import { User } from "../model/user.model";

// Interface defining the shape of the User state
export interface UserState {
  users: User[];
  filteredUsers: User[];
  total: number;
  totalPages: number;
  currentPage: number;
  error: any;
  user: { data: User };
}

// Initial state of the User feature
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

// The reducer function handling different actions
const _userReducer = createReducer(
  initialState,
  // Handling the success action for loading users
  on(loadUsersSuccess, (state, { paginatedUsers }) => ({
    ...state,
    users: paginatedUsers.data,
    filteredUsers: paginatedUsers.data,
    total: paginatedUsers.total,
    totalPages: paginatedUsers.total_pages,
    currentPage: paginatedUsers.page,
    error: null,
  })),
  // Handling the failure action for loading users
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // Handling the success action for loading a single user
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  // Handling the failure action for loading a single user
  on(loadUserFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // Handling the action for selecting a user by ID
  on(selectUserById, (state, { id }) => {
    // console.log(!id);
    if (id === "") {
      return {
        ...state,
        filteredUsers: state.users,
        totalPages: Math.ceil(state.total / state.users.length),
        currentPage: state.currentPage,
      };
    }

    const user = state.users.find((user) => user.id === parseInt(id)); // Find the user by ID
    return {
      ...state,
      filteredUsers: user ? [user] : [],
      totalPages: 1,
      currentPage: 1,
    };
  })
);

// Function to export the reducer function
export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
