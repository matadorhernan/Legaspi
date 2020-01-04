import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote, Option } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";

@Component({
  selector: "app-auto-quote-si",
  templateUrl: "./auto-quote-si.component.html",
  styleUrls: ["./auto-quote-si.component.scss"]
})
export class AutoQuoteSiComponent implements OnInit {
  @Output() validEvent = new EventEmitter<boolean>();
  private quote: Quote;
  public tableware: Option = {
    a: true,
    b: true,
    c: true,
    d: false,
    e: false,
    f: false,
    g: false,
    i: false
  };

  public setSelection(item: string) {
    switch (item) {
      case "a":
        this.tableware.a = !this.tableware.a;
        break;
      case "b":
        this.tableware.b = !this.tableware.b;
        break;
      case "c":
        this.tableware.c = !this.tableware.c;
        break;
      case "d":
        this.tableware.d = !this.tableware.d;
        break;
      case "e":
        this.tableware.e = !this.tableware.e;
        break;
      case "f":
        this.tableware.f = !this.tableware.f;
        break;
      case "g":
        this.tableware.g = !this.tableware.g;
        break;
      case "i":
        this.tableware.i = !this.tableware.i;
        break;
    }

    this.quote.tableware = this.tableware;
    sessionStorage.setItem("quote", JSON.stringify(this.quote));
  }
  ngOnInit() {
    this.quote = JSON.parse(sessionStorage.getItem("quote")) || {};
    if (!_.isEmpty(this.quote.tableware)) {
      this.tableware = this.quote.tableware;
    }
    this.validEvent.emit(true);
  }
}
