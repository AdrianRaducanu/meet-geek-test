import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {UserState} from "../../store/user/user.state";
import {Router} from "@angular/router";
import {setUsername} from "../../store/user/user.actions";
import {AppState} from "../../store/app.state";

@Component({
  selector: 'app-input',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  userInput: string = "";

  constructor(private store: Store<AppState>, private router: Router) {
  }

  async onSubmit(): Promise<void> {
    console.log(this.userInput)
    this.store.dispatch(setUsername({username: this.userInput}));
    this.userInput = "";
    await this.router.navigate(['/chat']);
  }
}
