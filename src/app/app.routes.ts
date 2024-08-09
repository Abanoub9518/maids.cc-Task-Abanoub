import { Routes } from "@angular/router";
import { UserListComponent } from "./features/users-feature/components/user-list/user-list.component";
import { UserDetailsComponent } from "./features/users-feature/components/user-details/user-details.component";

export const routes: Routes = [
  { path: "dashboard", component: UserListComponent },
  { path: "dashboard/:id", component: UserDetailsComponent },
];
