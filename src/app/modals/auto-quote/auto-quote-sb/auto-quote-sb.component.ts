import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote, Option } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";
@Component({
  selector: "app-auto-quote-sb",
  templateUrl: "./auto-quote-sb.component.html",
  styleUrls: ["./auto-quote-sb.component.scss"]
})
export class AutoQuoteSbComponent implements OnInit {
  private quote: Quote;
  @Output() validEvent = new EventEmitter<boolean>();

  public eventSize: Option = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false
  };

  public setSelection(item: string) {
    this.eventSize.a = false;
    this.eventSize.b = false;
    this.eventSize.c = false;
    this.eventSize.d = false;
    this.eventSize.e = false;
    switch (item) {
      case "a":
        this.eventSize.a = true;
        break;
      case "b":
        this.eventSize.b = true;
        break;
      case "c":
        this.eventSize.c = true;
        break;
      case "d":
        this.eventSize.d = true;
        break;
      case "e":
        this.eventSize.e = true;
        break;
    }

    this.quote.eventSize = this.eventSize;
    sessionStorage.setItem("quote", JSON.stringify(this.quote));
    this.validEvent.emit(true);
  }

  constructor() {}

  ngOnInit() {
    this.quote = JSON.parse(sessionStorage.getItem("quote")) || {};
    if (!_.isEmpty(this.quote.eventSize)) {
      this.eventSize = this.quote.eventSize;
      this.validEvent.emit(true);
    }
  }
}
