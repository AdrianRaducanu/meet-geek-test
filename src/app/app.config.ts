import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideState, provideStore} from "@ngrx/store";
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {userReducer} from "../store/user/user.reducer";
import {appReducer} from "../store/app.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(appReducer)
  ]
};
