import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../model/user.model";
import { Store } from "@ngrx/store";
import {
  selectCurrentPage,
  selectFilteredUsers,
  selectTotalPages,
  selectTotalUsers,
} from "../../users-store/user.selectors";
import { loadUsers } from "../../users-store/user.actions";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../card/card.component";

import { BounceAnimationDirective } from "../../../../core/directives/bounce-animation.directive";
import { bounceAnimation } from "../../../../core/directives/bounce";

@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [CommonModule, CardComponent, BounceAnimationDirective],
  templateUrl: "./user-list.component.html",
  styleUrl: "./user-list.component.scss",
  animations: [bounceAnimation], // Include animations here
})
export class UserListComponent {
  users$: Observable<User[]>;
  total$: Observable<number>;
  totalPages$: Observable<number>;
  currentPage$: Observable<number>;

  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectFilteredUsers); // Use the filtered users
    this.total$ = this.store.select(selectTotalUsers);
    this.totalPages$ = this.store.select(selectTotalPages);
    this.currentPage$ = this.store.select(selectCurrentPage);

    this.currentPage$.subscribe((page) => (this.currentPage = page));
    this.totalPages$.subscribe((pages) => (this.totalPages = pages));
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // Dispatch action to load users based on the current page
    this.store.dispatch(loadUsers({ page: this.currentPage }));
  }

  onPageChange(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadUsers();
    }
  }
}
