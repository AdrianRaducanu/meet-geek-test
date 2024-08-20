import { Routes } from '@angular/router';
import {ChatComponent} from "./chat/chat.component";
import {InputComponent} from "./input/input.component";

export const routes: Routes = [
  {path: "", component: InputComponent},
  {path: "chat", component: ChatComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
