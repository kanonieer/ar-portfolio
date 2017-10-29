import { Component, OnInit, Input } from '@angular/core';

import { Work } from './../models/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {

  @Input() work: Work;
  public maxWidth: Number = 200;
  public maxHeight: Number = 200;

  constructor() {

  }

  ngOnInit() {
    this.maxWidth = Math.floor(window.innerWidth / (this.work.image_file.length + 1));
    this.maxHeight = Math.floor(window.innerHeight / (this.work.image_file.length + 1));
  }

}
