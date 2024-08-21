import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {MessageInterface} from "../../../interfaces/message.interface";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit{
  @Input() data : MessageInterface;
  @Input() username : string|null;
  @Output() onDelete = new EventEmitter<number>();

  safeImage:any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.safeImage = this.data.image ? this.sanitizer.bypassSecurityTrustUrl(this.data.text) : null;
  }

  async copy() {
    await navigator.clipboard.writeText(this.data.text);
  }

  delete() {
    this.onDelete.emit(this.data.id)
  }
}
