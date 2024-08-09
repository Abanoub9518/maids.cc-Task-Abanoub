import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadUser } from "../../users-store/user.actions";
import { selectUser } from "../../users-store/user.selectors";
import { CommonModule } from "@angular/common";
import { bounceAnimation } from "../../../../core/directives/bounce";
import { BounceAnimationDirective } from "../../../../core/directives/bounce-animation.directive";

@Component({
  selector: "app-user-details",
  standalone: true,
  imports: [CommonModule, BounceAnimationDirective],
  templateUrl: "./user-details.component.html",
  styleUrl: "./user-details.component.scss",
  animations: [bounceAnimation],
})
export class UserDetailsComponent {
  user$!: Observable<any>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.user$ = this.store.select(selectUser);
    this.store.dispatch(loadUser({ id }));
  }

  goBack() {
    this.router.navigate(["/dashboard"]);
  }
}
