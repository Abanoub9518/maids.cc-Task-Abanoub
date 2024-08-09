import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  loadUser,
  loadUserSuccess,
  loadUserFailure,
} from "./user.actions";
import { catchError, map, mergeMap, switchMap, of } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  // Load users with caching
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(({ page }) => {
        const cachedUsers = this.userService["paginatedUsersCache"].get(page);
        if (cachedUsers) {
          return of(loadUsersSuccess({ paginatedUsers: cachedUsers }));
        }
        return this.userService.getUsers(page).pipe(
          map((response) => loadUsersSuccess({ paginatedUsers: response })),
          catchError((error) => of(loadUsersFailure({ error })))
        );
      })
    )
  );

  // Load user by ID with caching
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap(({ id }) => {
        const cachedUser = this.userService["userCache"].get(id);
        if (cachedUser) {
          return of(loadUserSuccess({ user: cachedUser }));
        }
        return this.userService.getUser(id).pipe(
          map((user) => loadUserSuccess({ user })),
          catchError((error) => of(loadUserFailure({ error })))
        );
      })
    )
  );
}
