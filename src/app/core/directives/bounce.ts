// animations.ts
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from "@angular/animations";

export const bounceAnimation = trigger("bounce", [
  transition(":enter", [
    animate(
      "1s",
      keyframes([
        style({ transform: "translateY(0)", offset: 0 }),
        style({ transform: "translateY(-30px)", offset: 0.3 }),
        style({ transform: "translateY(0)", offset: 0.5 }),
        style({ transform: "translateY(-15px)", offset: 0.7 }),
        style({ transform: "translateY(0)", offset: 1.0 }),
      ])
    ),
  ]),
]);
