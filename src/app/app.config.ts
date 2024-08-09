import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { userReducer } from "./features/users-feature/users-store/user.reducer";
import { UserEffects } from "./features/users-feature/users-store/user.effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideAnimations } from "@angular/platform-browser/animations";
import { loaderInterceptor } from "./core/interceptors/loader.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loaderInterceptor])),
    provideStore(),
    provideEffects(),
    provideStore({ userState: userReducer }),
    provideEffects([UserEffects]),
    provideStoreDevtools({ maxAge: 25 }),
    provideAnimations(),

    // registering interceptors
  ],
};
