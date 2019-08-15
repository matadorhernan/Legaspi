import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComboService {

  public isShowingCombo:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
