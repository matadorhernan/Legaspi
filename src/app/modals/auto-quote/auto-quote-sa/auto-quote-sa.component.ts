import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from "lodash";
import { Quote } from "src/app/interfaces/quote.interface";

@Component({
  selector: "app-auto-quote-sa",
  templateUrl: "./auto-quote-sa.component.html",
  styleUrls: ["./auto-quote-sa.component.scss"]
})
export class AutoQuoteSaComponent implements OnInit {
  @Output() validEvent = new EventEmitter<boolean>();

  public contact: FormGroup;

  constructor() {}

  ngOnInit() {
    let quote: Quote = JSON.parse(sessionStorage.getItem("quote")) || {};

    this.contact = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email])
    });

    if (!_.isEmpty(quote.contact)) {
      this.contact.patchValue(quote.contact);
      this.validEvent.emit(true);
    }

    this.contact.valueChanges.subscribe(value => {
      if (this.contact.valid) {
        quote.contact = this.contact.value;
        sessionStorage.setItem("quote", JSON.stringify(quote));
        this.validEvent.emit(true);
      } else {
        this.validEvent.emit(false);
      }
    });
  }
}
