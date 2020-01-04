import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote, Option } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";

@Component({
  selector: "app-auto-quote-sh",
  templateUrl: "./auto-quote-sh.component.html",
  styleUrls: ["./auto-quote-sh.component.scss"]
})
export class AutoQuoteShComponent implements OnInit {
  @Output() validEvent = new EventEmitter<boolean>();

  private quote: Quote;
  public music: Option = {
    a: true,
    b: false,
    c: false,
    d: false,
    e: false
  };

  public setSelection(item: string) {
    switch (item) {
      case "a":
        this.music.a = !this.music.a;
        break;
      case "b":
        this.music.b = !this.music.b;
        break;
      case "c":
        this.music.c = !this.music.c;
        break;
      case "d":
        this.music.d = !this.music.d;
        break;
      case "e":
        this.music.e = !this.music.e;
        break;
    }

    this.quote.music = this.music;
    sessionStorage.setItem("quote", JSON.stringify(this.quote));
  }
  ngOnInit() {
    this.quote = JSON.parse(sessionStorage.getItem("quote")) || {};
    if (!_.isEmpty(this.quote.music)) {
      this.music = this.quote.music;
    }
    this.validEvent.emit(true);
  }
}
