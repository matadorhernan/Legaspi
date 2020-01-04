import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Option, Quote } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";

@Component({
  selector: "app-auto-quote-se",
  templateUrl: "./auto-quote-se.component.html",
  styleUrls: ["./auto-quote-se.component.scss"]
})
export class AutoQuoteSeComponent implements OnInit {
  @Output() validEvent = new EventEmitter<boolean>();
  private quote: Quote;
  public table: Option = {
    a: false,
    b: false,
    c: false,
    d: false
  };

  public setSelection(item: string) {
    this.table.a = false;
    this.table.b = false;
    this.table.c = false;
    this.table.d = false;
    switch (item) {
      case "a":
        this.table.a = !this.table.a;
        break;
      case "b":
        this.table.b = !this.table.b;
        break;
      case "c":
        this.table.c = !this.table.c;
        break;
      case "d":
        this.table.d = !this.table.d;
        break;
    }

    this.quote.table = this.table;
    sessionStorage.setItem("quote", JSON.stringify(this.quote));
    this.validEvent.emit(true);
  }
  ngOnInit() {
    this.quote = JSON.parse(sessionStorage.getItem("quote")) || {};
    if (!_.isEmpty(this.quote.table)) {
      this.table = this.quote.table;
      this.validEvent.emit(true);
    }
  }
}
