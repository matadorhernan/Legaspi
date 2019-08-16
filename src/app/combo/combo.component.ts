import { Component, OnInit } from '@angular/core';
import { ComboService } from '../services/combo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
  public isShowingCombo: boolean = false;

  public isFormContactValid: boolean = false;
  public isFormKindValid: boolean = false;
  public isFormSizeValid: boolean = false;
  public isFormBookingValid: boolean = false;
  public isFormStaffValid: boolean = false;
  public isFormResultValid: boolean = false;

  public currentSlide: number = 1;
  public isCurrentValid:boolean = true;
  public slides: Array<number> = [1, 2, 3, 4, 5, 6];

  public lastValid: number = 4;

  constructor(private comboService: ComboService) {
    comboService.isShowingCombo.subscribe(status => {
      this.isShowingCombo = status;
    });

    comboService.isFormContactValid.subscribe(status => {
      this.isFormContactValid = status;
    });

  }

  ngOnInit() {}

  public slideTo(slide) {
    if (slide > this.lastValid) {
      this.isCurrentValid = false;
      this.currentSlide = this.lastValid + 1;
    } else {
      this.currentSlide = slide;
    }
  }

  public nextSlide() {

    if (this.currentSlide >= this.lastValid) {
      this.lastValid = this.currentSlide;
      this.isCurrentValid = false;
    }
    
    this.currentSlide++;

  }

  public prevSlide() {
    this.currentSlide--;
    this.isCurrentValid = true;
  }

  public toggleCombo() {
    this.comboService.isShowingCombo.next(!this.isShowingCombo);
  }
}
