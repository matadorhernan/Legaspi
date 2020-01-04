import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Option, Quote } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";

@Component({
  selector: "app-auto-quote-sj",
  templateUrl: "./auto-quote-sj.component.html",
  styleUrls: ["./auto-quote-sj.component.scss"]
})
export class AutoQuoteSjComponent implements OnInit {
  @Output() validEvent = new EventEmitter<boolean>();
  private quote: Quote;
  public plates: Option = {
    a: true,
    b: true,
    c: true,
    d: false
  };

  public setSelection(item: string) {
    switch (item) {
      case "a":
        this.plates.a = !this.plates.a;
        break;
      case "b":
        this.plates.b = !this.plates.b;
        break;
      case "c":
        this.plates.c = !this.plates.c;
        break;
      case "d":
        this.plates.d = !this.plates.d;
        break;
    }

    this.quote.plates = this.plates;
    sessionStorage.setItem("quote", JSON.stringify(this.quote));
  }
  ngOnInit() {
    this.quote = JSON.parse(sessionStorage.getItem("quote")) || {};
    if (!_.isEmpty(this.quote.plates)) {
      this.plates = this.quote.plates;
    }
    this.validEvent.emit(true);
  }
}
