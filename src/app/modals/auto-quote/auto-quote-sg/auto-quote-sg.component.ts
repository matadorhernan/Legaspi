import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote, Option } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";

@Component({
  selector: "app-auto-quote-sg",
  templateUrl: "./auto-quote-sg.component.html",
  styleUrls: ["./auto-quote-sg.component.scss"]
})
export class AutoQuoteSgComponent implements OnInit {
  @Output() validEvent = new EventEmitter<boolean>();
  private quote: Quote;
  public chair: Option = {
    a: false,
    b: false
  };

  public setSelection(item: string) {
    this.chair.a = false;
    this.chair.b = false;
    switch (item) {
      case "a":
        this.chair.a = !this.chair.a;
        break;
      case "b":
        this.chair.b = !this.chair.b;
        break;
    }

    this.quote.chair = this.chair;
    sessionStorage.setItem("quote", JSON.stringify(this.quote));
    this.validEvent.emit(true);
  }
  ngOnInit() {
    this.quote = JSON.parse(sessionStorage.getItem("quote")) || {};
    if (!_.isEmpty(this.quote.chair)) {
      this.chair = this.quote.chair;
      this.validEvent.emit(true);
    }
  }
}
