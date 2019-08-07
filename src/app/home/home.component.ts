import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.shows.css',
    './home.main.css',
    './home.component.css',
  ]
})
export class HomeComponent implements OnInit {

  public plate : HTMLElement;
  public pepper : HTMLElement;
  public tomato : HTMLElement;
  public tomato2 : HTMLElement;

  constructor() { }

  ngOnInit() {
    this.plate = document.getElementById('img-plate');
    this.pepper = document.getElementById('img-pepper');
    this.tomato = document.getElementById('img-tomato');
    this.tomato2 = document.getElementById('img-tomato-2');
  }
  public animateAssets(verticalOffset){
    this.pepper.style.transform = `translateY(-${verticalOffset*.9}px)`;
    this.tomato.style.transform = `translateY(-${verticalOffset*.8}px)`;
    this.tomato2.style.transform = `translateY(-${verticalOffset *.7}px)`;
    this.plate.style.transform = `translateY(-${verticalOffset*.5}px)`;
  }
 
  @HostListener("window:scroll", []) 
  onWindowScroll() {

    let verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
    this.animateAssets(verticalOffset);
}

}
