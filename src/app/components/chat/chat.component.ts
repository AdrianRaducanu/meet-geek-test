import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectUsername} from "../../../store/user/user.selectors";
import {Observable} from "rxjs";
import {AppState} from "../../../store/app.state";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {MessageComponent} from "../message/message.component";
import {FormsModule} from "@angular/forms";
import {ChatService} from "../../services/chat.service";
import {MessageInterface} from "../../../interfaces/message.interface";
import {imageBase} from "../../../utils/const";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    AsyncPipe,
    MessageComponent,
    FormsModule,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  username$: Observable<string>;
  textInput: string = "";
  messages: MessageInterface[] = [];
  immediateResponse: boolean = false;
  loadingState: boolean = false;

  constructor(private store: Store<AppState>, private chatService: ChatService) {
  }

  ngOnInit() {
    this.username$ = this.store.select(selectUsername);
    this.chatService.getMessages().subscribe(res => {
      this.messages = res;
      this.loadingState = this.messages.length ? this.messages[this.messages.length - 1].isUser : false;
    })
  }

  sendMessage() {
    this.chatService.addMessage({text: this.textInput, isUser: true, id: this.messages.length}, this.immediateResponse);
    this.textInput = "";
  }

  sendImage() {
    this.chatService.addMessage({text: imageBase, isUser: true, id: this.messages.length, image: true}, this.immediateResponse);

  }

  deleteMessage(id: number) {
    this.chatService.deleteMessage(id);
  }

}
