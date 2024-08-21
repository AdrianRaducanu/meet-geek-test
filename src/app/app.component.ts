import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/'])
  }

}
