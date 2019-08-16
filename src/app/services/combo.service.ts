import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComboService {

  public isShowingCombo:BehaviorSubject<boolean> = new BehaviorSubject(false);

  public isFormContactValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormKindValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormSizeValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormBookingValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormStaffValid:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFormResultValid:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
