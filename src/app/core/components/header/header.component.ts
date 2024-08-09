import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ReactiveFormsModule, FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectUserById } from "../../../features/users-feature/users-store/user.actions";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  isMenuOpen = false;
  searchControl = new FormControl("");

  constructor(private store: Store) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => {
        const id = String(term);
        console.log(term);
        this.store.dispatch(selectUserById({ id }));
      });
  }
}
