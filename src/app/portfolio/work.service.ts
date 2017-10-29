import { Injectable } from '@angular/core';
import { data } from './images-data';
import { Work } from './../models/work';

@Injectable()
export class WorkService {

  constructor() {}

  public getData(): Array<Work> {
    return data;
  }
}
