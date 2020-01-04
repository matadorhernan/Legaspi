import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Quote, Option } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";

@Component({
  selector: "app-auto-quote-sf",
  templateUrl: "./auto-quote-sf.component.html",
  styleUrls: ["./auto-quote-sf.component.scss"]
})
export class AutoQuoteSfComponent implements OnInit {
  @Output() validEvent = new EventEmitter<boolean>();
  private quote: Quote;
  public tablecloth: Option = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false
  };

  public setSelection(item: string) {
    this.tablecloth.a = false;
    this.tablecloth.b = false;
    this.tablecloth.c = false;
    this.tablecloth.d = false;
    this.tablecloth.e = false;
    switch (item) {
      case "a":
        this.tablecloth.a = !this.tablecloth.a;
        break;
      case "b":
        this.tablecloth.b = !this.tablecloth.b;
        break;
      case "c":
        this.tablecloth.c = !this.tablecloth.c;
        break;
      case "d":
        this.tablecloth.d = !this.tablecloth.d;
        break;
      case "e":
        this.tablecloth.e = !this.tablecloth.e;
        break;
    }

    this.quote.tablecloth = this.tablecloth;
    sessionStorage.setItem("quote", JSON.stringify(this.quote));
    this.validEvent.emit(true);
  }
  ngOnInit() {
    this.quote = JSON.parse(sessionStorage.getItem("quote")) || {};
    if (!_.isEmpty(this.quote.tablecloth)) {
      this.tablecloth = this.quote.tablecloth;
      this.validEvent.emit(true);
    }
  }
}
