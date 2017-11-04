import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Work } from './../models/work';

@Component({
  selector: 'app-work-modal',
  templateUrl: './work-modal.component.html'
})
export class WorkModalComponent implements OnInit {

  @Input() work: Work;
  @Input() width: Number;
  @Input() height: Number;
  @Output() hide: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }

  public hideModal(): void {
    this.hide.emit(true);
  }

}
