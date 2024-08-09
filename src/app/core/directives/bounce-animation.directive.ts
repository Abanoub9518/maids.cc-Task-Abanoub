// bounce.directive.ts
import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from "@angular/core";
import { bounceAnimation } from "./bounce"; // Adjust path as necessary
import { AnimationBuilder } from "@angular/animations";

@Directive({
  selector: "[appBounce]",

  standalone: true,
})
export class BounceAnimationDirective {
  @Input() @HostBinding("@bounce") bounce = true; // Apply the animation
}
