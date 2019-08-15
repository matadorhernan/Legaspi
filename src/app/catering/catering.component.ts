import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: [
    './catering.component.css',
    './catering.main.css',
    './catering.node.css',
]
})
export class CateringComponent implements OnInit {

  public plate: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.plate = document.getElementById('img-plate');
  }
  public animateAssets(verticalOffset) {
    this.plate.style.transform = `translateY(-${verticalOffset * .2}px)`;
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
