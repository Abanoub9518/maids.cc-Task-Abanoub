import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { PaginatedUsers, User } from "../model/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "https://reqres.in/api/users";
  private userCache = new Map<number, User>();
  private paginatedUsersCache = new Map<number, PaginatedUsers>();

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<PaginatedUsers> {
    const cachedUsers = this.paginatedUsersCache.get(page);
    if (cachedUsers) {
      return of(cachedUsers);
    }

    return this.http
      .get<PaginatedUsers>(`${this.apiUrl}?page=${page}`)
      .pipe(tap((response) => this.paginatedUsersCache.set(page, response)));
  }

  getUser(id: number): Observable<User> {
    const cachedUser = this.userCache.get(id);
    if (cachedUser) {
      return of(cachedUser);
    }

    return this.http
      .get<User>(`${this.apiUrl}/${id}`)
      .pipe(tap((user) => this.userCache.set(id, user)));
  }
}
