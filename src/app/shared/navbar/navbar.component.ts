import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Router } from "@angular/router";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements AfterViewInit {
  public pageName: string;
  public isAutoQuoteModalActive: boolean;
  public isMobileNavActive: boolean = false;

  public updateIndicator(left: number, width: number) {
    this.indicatorElement.nativeElement.style.width = `${width}px`;
    this.indicatorElement.nativeElement.style.left = `${left}px`;
  }

  public toggleModal() {
    this.modalService.isAutoQuoteModalActive$.next(
      !this.isAutoQuoteModalActive
    );
  }

  @ViewChild("indicatorElement", { static: false })
  indicatorElement?: ElementRef;
  @ViewChild("homeLabel", { static: false })
  homeLabel?: ElementRef;
  @ViewChild("cateringLabel", { static: false })
  cateringLabel?: ElementRef;
  @ViewChild("galleryLabel", { static: false })
  galleryLabel?: ElementRef;
  @ViewChild("venuesLabel", { static: false })
  venuesLabel?: ElementRef;
  @ViewChild("contactLabel", { static: false })
  contactLabel?: ElementRef;

  @ViewChild("mobileNav", { static: false })
  mobileNav?: ElementRef;

  constructor(private router: Router, private modalService: ModalService) {
    modalService.isAutoQuoteModalActive$.subscribe(status => {
      this.isAutoQuoteModalActive = status;
    });
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((url: any) => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1);

      if (this.router.url.split("/")[1] != this.pageName) {
        this.pageName = this.router.url.split("/")[1];
        this.isMobileNavActive = false;

        switch (this.pageName) {
          case "banqueteria":
            this.updateIndicator(
              this.cateringLabel.nativeElement.offsetLeft,
              this.cateringLabel.nativeElement.offsetWidth
            );
            break;
          case "salones":
            this.updateIndicator(
              this.venuesLabel.nativeElement.offsetLeft,
              this.venuesLabel.nativeElement.offsetWidth
            );
            break;
          case "galeria":
            this.updateIndicator(
              this.galleryLabel.nativeElement.offsetLeft,
              this.galleryLabel.nativeElement.offsetWidth
            );
            break;
          case "contacto":
            this.updateIndicator(
              this.contactLabel.nativeElement.offsetLeft,
              this.contactLabel.nativeElement.offsetWidth
            );
            break;
          default:
            this.updateIndicator(
              this.homeLabel.nativeElement.offsetLeft,
              this.homeLabel.nativeElement.offsetWidth
            );
            break;
        }
      }
    });
  }

  public toggleMobileMenu() {
    if (!this.isMobileNavActive) {
      setTimeout(() => {
        this.mobileNav.nativeElement.focus();
      }, 6);
    }
    this.isMobileNavActive = !this.isMobileNavActive;
  }

  public minMobileNav(e) {
    this.isMobileNavActive = false;
  }
}
