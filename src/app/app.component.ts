import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./core/components/header/header.component";
import { CardComponent } from "./features/users-feature/components/card/card.component";
import { UserListComponent } from "./features/users-feature/components/user-list/user-list.component";
import { LoaderComponent } from "./core/components/loader/loader.component";
import { LoaderService } from "./core/services/loader.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CardComponent,
    UserListComponent,
    LoaderComponent,
  ],

  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "maids-task";
}
