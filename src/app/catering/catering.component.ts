import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: [
    './catering.component.css',
    './catering.main.css',
    './catering.node.css',
    './catering.silverware.css',
]
})
export class CateringComponent implements OnInit {

  public plate: HTMLElement;
  public spoon: HTMLElement;
  public knife: HTMLElement;
  public fork: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.plate = document.getElementById('img-plate');
    this.spoon = document.getElementById('img-spoon');
    this.knife = document.getElementById('img-knife');
    this.fork = document.getElementById('img-fork');
  }
  public animateAssets(verticalOffset) {
    this.plate.style.transform = `translateY(-${verticalOffset * .2}px)`;
    this.spoon.style.right = `-${200 + (verticalOffset * .1)}px`;
    this.knife.style.right = `-${40 + (verticalOffset * .15)}px`;
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
