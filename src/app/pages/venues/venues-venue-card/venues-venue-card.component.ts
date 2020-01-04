import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-venues-venue-card",
  templateUrl: "./venues-venue-card.component.html",
  styleUrls: ["./venues-venue-card.component.scss"]
})
export class VenuesVenueCardComponent implements AfterViewInit {
  @Input("text") text;
  @Input("background") background;
  @Input("title") title;

  constructor() {}

  @ViewChild("titleElement", { static: false })
  titleElement?: ElementRef;
  @ViewChild("backgroundElement", { static: false })
  backgroundElement?: ElementRef;
  @ViewChild("textElement", { static: false })
  textElement?: ElementRef;

  ngAfterViewInit() {
    this.textElement.nativeElement.innerHTML = this.text;
    this.titleElement.nativeElement.innerHTML = this.title;
    this.backgroundElement.nativeElement.src = this.background;
  }
}
