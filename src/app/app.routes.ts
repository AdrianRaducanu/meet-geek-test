import { Routes } from '@angular/router';
import {ChatComponent} from "./components/chat/chat.component";
import {InputComponent} from "./components/input/input.component";

export const routes: Routes = [
  {path: "", component: InputComponent},
  {path: "chat", component: ChatComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
