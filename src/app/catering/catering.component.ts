import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: [
    './catering.main.css',
    './catering.node.css',
    './catering.silverware.css',
    './catering.component.css',
]
})
export class CateringComponent implements OnInit {

  public plate: HTMLElement;
  public spoon: HTMLElement;
  public knife: HTMLElement;
  public fork: HTMLElement;

  public isBanquet = false;
  public isCompany = false;
  public isCompanyOne = false;
  public isCompanyTwo = false;
  public isCompanyThree = false;
  public isFamily = false;
  public isFamilyOne = false;
  public isFamilyTwo = false;
  public isFamilyThree = false;

  public contentCatering = {}

  constructor( private languageService:LanguageService) {
    this.languageService.currentLanguage.subscribe(lang => {

      this.contentCatering = this.languageService.content;
    })
  }

  ngOnInit() {
    this.plate = document.getElementById('img-plate');
    this.spoon = document.getElementById('img-spoon');
    this.knife = document.getElementById('img-knife');
    this.fork = document.getElementById('img-fork');
  }
  public animateAssets(verticalOffset) {
    this.plate.style.transform = `translateY(-${verticalOffset * .2}px)`;
    this.spoon.style.right = `-${200 + (verticalOffset * .1)}px`;
    this.knife.style.right = `-${230 + (verticalOffset * .15)}px`;
    this.fork.style.right = `-${300 + (verticalOffset * .075)}px`;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.animateAssets(verticalOffset);
  }
}
