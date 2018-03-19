import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phrase = 'Hello world!';
  isHidden = true;
  buttonText = 'Show me the magic phrase :D';

  togglePhrase () {
    this.isHidden = !this.isHidden;
    this.buttonText = this.isHidden ?
      'Show me the magic phrase :D' : 'Hide it :(';
  }
}
