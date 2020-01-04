import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input
} from "@angular/core";

@Component({
  selector: "app-item-toggle",
  templateUrl: "./item-toggle.component.html",
  styleUrls: ["./item-toggle.component.scss"]
})
export class ItemToggleComponent implements AfterViewInit {
  @Input("label") label;
  @Input("icon") icon;
  @Input("activated") activated;
  constructor() {}

  @ViewChild("labelElement", { static: false })
  labelElement?: ElementRef;
  @ViewChild("iconElement", { static: false })
  iconElement?: ElementRef;

  ngAfterViewInit() {
    this.labelElement.nativeElement.innerHTML = this.label;
    this.iconElement.nativeElement.src = this.icon;
  }
}
