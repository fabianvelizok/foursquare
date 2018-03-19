import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phrase: string = 'Hello world!';
  isHidden: boolean = true;
  buttonText: string = 'Show me the magic phrase :D';

  name: string = '';
  nameName: string = '';

  togglePhrase () {
    this.isHidden = !this.isHidden;
    this.buttonText = this.isHidden ?
      'Show me the magic phrase :D' : 'Hide it :(';
  }
}
