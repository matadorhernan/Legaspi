import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComboService {

  public isShowingCombo:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isCurrentValid:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  public getSession(key:string){
    return JSON.parse(sessionStorage.getItem(key))
  }

  public setSession(key:string, payload){
    return sessionStorage.setItem(key , JSON.stringify(payload))
  }
  
}
