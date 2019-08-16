import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComboService {

  public isShowingCombo:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormOneValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormTwoValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormThreeValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormFourValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormSixValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormSevenValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormEightValid:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
