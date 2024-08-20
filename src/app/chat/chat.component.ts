import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectUsername} from "../../store/user/user.selectors";
import {Observable} from "rxjs";
import {AppState} from "../../store/app.state";
import {AsyncPipe} from "@angular/common";
import {MessageComponent} from "../message/message.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    AsyncPipe,
    MessageComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit{
  username$: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.username$ = this.store.select(selectUsername);
  }

}
