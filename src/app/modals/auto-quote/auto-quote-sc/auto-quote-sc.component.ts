import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Option, Quote } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";

@Component({
  selector: "app-auto-quote-sc",
  templateUrl: "./auto-quote-sc.component.html",
  styleUrls: ["./auto-quote-sc.component.scss"]
})
export class AutoQuoteScComponent implements OnInit {
  @Output() validEvent = new EventEmitter<boolean>();

  private quote: Quote;
  public staff: Option = {
    a: true,
    b: false,
    c: false,
    d: false,
    e: true,
    f: false,
    g: false
  };

  public setSelection(item: string) {
    switch (item) {
      case "a":
        this.staff.a = !this.staff.a;
        break;
      case "b":
        this.staff.b = !this.staff.b;
        break;
      case "c":
        this.staff.c = !this.staff.c;
        break;
      case "d":
        this.staff.d = !this.staff.d;
        break;
      case "e":
        this.staff.e = !this.staff.e;
        break;
      case "f":
        this.staff.f = !this.staff.f;
        break;
      case "g":
        this.staff.g = !this.staff.g;
        break;
    }

    this.quote.staff = this.staff;
    sessionStorage.setItem("quote", JSON.stringify(this.quote));
  }
  ngOnInit() {
    this.quote = JSON.parse(sessionStorage.getItem("quote")) || {};
    if (!_.isEmpty(this.quote.staff)) {
      this.staff = this.quote.staff;
    }
    this.validEvent.emit(true);
  }
}
