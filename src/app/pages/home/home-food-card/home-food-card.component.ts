import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-home-food-card",
  templateUrl: "./home-food-card.component.html",
  styleUrls: ["./home-food-card.component.scss"]
})
export class HomeFoodCardComponent implements AfterViewInit {
  @Input("label") label;
  @Input("background") background;
  @Input("icon") icon;
  constructor() {}

  @ViewChild("labelElement", { static: false })
  labelElement?: ElementRef;
  @ViewChild("backgroundElement", { static: false })
  backgroundElement?: ElementRef;
  @ViewChild("iconElement", { static: false })
  iconElement?: ElementRef;

  ngAfterViewInit() {
    this.labelElement.nativeElement.innerHTML = this.label;
    this.backgroundElement.nativeElement.src = this.background;
    this.iconElement.nativeElement.src = this.icon;
  }
}
