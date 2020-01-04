import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
import "jquery";

@Component({
  selector: "app-auto-quote",
  templateUrl: "./auto-quote.component.html",
  styleUrls: ["./auto-quote.component.scss"]
})
export class AutoQuoteComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  public $: any;
  public currentSlide: number = 0;
  public canContinue: boolean = false;

  public nextSlide() {
    this.canContinue = false;
    this.currentSlide++;
  }
  public prevSlide() {
    this.canContinue = true;
    this.currentSlide--;
  }

  public handleEvent(status: boolean) {
    this.canContinue = status;
  }

  ngOnInit() {
    let modal: any = $("#autoQuoteModal");
    this.modalService.isAutoQuoteModalActive$.subscribe(status => {
      if (status == true) {
        modal.modal("show");
      } else {
        modal.modal("hide");
      }
    });

    modal.on("hidden.bs.modal", () => {
      this.modalService.isAutoQuoteModalActive$.next(false);
      this.currentSlide = 0;
    });
  }
}
