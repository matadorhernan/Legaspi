import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.scss"]
})
export class BrandComponent implements AfterViewInit {
  @Input("invert") invert: boolean;

  constructor() {}

  @ViewChild("brand", { static: false })
  brandElement?: ElementRef;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if (this.invert) {
      this.brandElement.nativeElement.classList.add("invert");
    }
  }
}
