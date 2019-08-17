import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComboService {

  public isShowingCombo:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isCurrentValid:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  public getLocal(){
    return JSON.parse(sessionStorage.getItem('legaspi'))
  }

  public setLocal(payload){
    return sessionStorage.setItem('legaspi', JSON.stringify(payload))
  }
  
}
