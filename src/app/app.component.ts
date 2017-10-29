import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public navVisible: Boolean;

  constructor() {
    this.navVisible = false;
  }

  public toggleNav(): void {
    this.navVisible = !this.navVisible;
    console.log(this.navVisible);
  }
}
