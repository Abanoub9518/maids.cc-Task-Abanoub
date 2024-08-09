// bounce.directive.ts
import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appBounce]",

  standalone: true,
})
export class BounceAnimationDirective {
  @Input() @HostBinding("@bounce") bounce = true; // Apply the animation
}
