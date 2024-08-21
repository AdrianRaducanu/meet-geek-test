import { Injectable } from '@angular/core';
import {BehaviorSubject, concatMap, delay, Observable, of} from "rxjs";
import {MessageInterface} from "../../interfaces/message.interface";
import {getRandomTime} from "../../utils/randomGenerator"

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages$ : BehaviorSubject<MessageInterface[]> = new BehaviorSubject<MessageInterface[]>([]);
  aiMessage: MessageInterface = {
    id: 0,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    isUser: false
  }

  constructor() { }

  getMessages(): Observable<MessageInterface[]> {
    return this.messages$.asObservable();
  }

  deleteMessage(id:number) {
    this.messages$.next(this.messages$.value.filter(msg => msg.id !== id));
  }

  addMessage(msg : MessageInterface, immediateResponse: boolean) {
    this.messages$.next([...this.messages$.value, msg]);
    const aiMessage$ = of({...this.aiMessage, id: msg.id + 1}).pipe(
      concatMap(aiMsg =>
        immediateResponse ? of(aiMsg) : of(aiMsg).pipe(delay(getRandomTime()))
      )
    );

    aiMessage$.subscribe(aiMsg => {
      this.messages$.next([...this.messages$.value, aiMsg]);
    });
  }
}
