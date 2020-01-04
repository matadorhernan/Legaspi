import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  public isAutoQuoteModalActive$: BehaviorSubject<
    boolean
  > = new BehaviorSubject(false);

  constructor() {}
}
