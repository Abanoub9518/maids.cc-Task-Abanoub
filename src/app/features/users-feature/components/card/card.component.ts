import { Component, Input } from "@angular/core";
import { User } from "../../model/user.model";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input()
  user!: User;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(["/dashboard", this.user.id]);
  }
}
