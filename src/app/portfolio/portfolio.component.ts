import { Component, OnInit } from '@angular/core';

import { WorkService } from './work.service';
import { Work } from './../models/work';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  public works: Array<Work> = [];
  constructor(private workService: WorkService) {
    this.works = this.workService.getData().sort((a: Work, b: Work) =>  a.order - b.order );
  }

  ngOnInit() {
  }
}
