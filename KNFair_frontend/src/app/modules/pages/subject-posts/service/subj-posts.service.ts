import { Injectable } from '@angular/core';
import { Subcject } from '../../subjects/model/subcject';

@Injectable({
  providedIn: 'root'
})
export class SubjPostsService {

  private _subj: Subcject;
  constructor() { }

  get subj(): Subcject {
    return this._subj;
  }

  set subj(subj: Subcject) {
    this._subj = subj;
  }
  
}
