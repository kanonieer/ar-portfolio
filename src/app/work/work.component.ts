import { Component, OnInit, Input } from '@angular/core';

import { Work } from './../models/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {

  @Input() work: Work;
  public maxWidth: Number = 300;
  public maxHeight: Number = 300;
  public modalVisible = false;

  constructor() {

  }

  ngOnInit() {
    // this.maxWidth = Math.floor(window.innerWidth / (this.work.image_file.length + 1));
    this.maxWidth = this.setWidth();
    // this.maxHeight = Math.floor(window.innerHeight / (this.work.image_file.length + 1));
    this.maxHeight = this.setHeight();
    console.log(this.maxWidth + ' x ' + this.maxHeight);
  }

  public showModal(): void {
    this.modalVisible = true;
  }

  public hideModal(): void {
    this.modalVisible = false;
  }

  private setWidth(): Number {
    const windowWidth = window.innerWidth;
    const length = this.work.image_file.length;

    if (windowWidth < 800) {
      return Math.floor(windowWidth - 60);
    } else {
      const newWidth =  Math.floor(windowWidth / (length + 1));
      return (newWidth > 300) ? 300 : newWidth;
    }
  }

  private setHeight(): Number {
    const windowHeight = window.innerHeight;
    const length = this.work.image_file.length;

    if (windowHeight < 800) {
      return Math.floor(windowHeight - 60);
    } else {
      const newHeight = Math.floor(windowHeight / (length + 1));
      return (newHeight > 300) ? 300 : newHeight;
    }
  }
}
