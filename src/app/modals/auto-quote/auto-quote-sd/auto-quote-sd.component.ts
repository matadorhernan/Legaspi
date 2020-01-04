import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Quote, Option } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";

@Component({
  selector: "app-auto-quote-sd",
  templateUrl: "./auto-quote-sd.component.html",
  styleUrls: ["./auto-quote-sd.component.scss"]
})
export class AutoQuoteSdComponent implements OnInit {
  @Output() validEvent = new EventEmitter<boolean>();
  private quote: Quote;
  public venue: Option = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false
  };

  public setSelection(item: string) {
    switch (item) {
      case "a":
        this.venue.a = !this.venue.a;
        break;
      case "b":
        this.venue.b = !this.venue.b;
        break;
      case "c":
        this.venue.c = !this.venue.c;
        break;
      case "d":
        this.venue.d = !this.venue.d;
        break;
      case "e":
        this.venue.e = !this.venue.e;
        break;
      case "f":
        this.venue.f = !this.venue.f;
        break;
    }

    this.quote.venue = this.venue;
    sessionStorage.setItem("quote", JSON.stringify(this.quote));
  }
  ngOnInit() {
    this.quote = JSON.parse(sessionStorage.getItem("quote")) || {};
    if (!_.isEmpty(this.quote.venue)) {
      this.venue = this.quote.venue;
    }
    this.validEvent.emit(true);
  }
}
