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
  public currentSlide: number = 1;
  public slides: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  public lastValid: number = 5;

  constructor(private comboService: ComboService) {
    comboService.isShowingCombo.subscribe(status => {
      this.isShowingCombo = status;
    });
  }

  ngOnInit() {}

  public slideTo(slide) {
    if (slide > this.lastValid) {
      this.currentSlide = this.lastValid  + 1;
    } else {
      this.currentSlide = slide;
    }
  }

  public nextSlide() {

    if(this.currentSlide > this.lastValid){
      this.lastValid ++;
    }

    this.currentSlide++;
  }

  public prevSlide() {
    this.currentSlide--;
  }

  public toggleCombo() {
    this.comboService.isShowingCombo.next(!this.isShowingCombo);
  }
}
