import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  txt = txt;
  author = author;

  constructor() { }

}

const txt = 'A dreamer is one who can only find his way by moonlight' +
  ' and his punishment is that he sees the dawn before the rest of the world.';
const author = 'Oscar Wilde';
