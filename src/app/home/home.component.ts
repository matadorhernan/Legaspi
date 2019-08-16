import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ComboService } from '../services/combo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.shows.css', './home.main.css', './home.component.css']
})
export class HomeComponent implements OnInit {
  public isShowingCombo: boolean = false;
  public flour: HTMLElement;
  public pan: HTMLElement;
  public romero: HTMLElement;
  public pepper: HTMLElement;
  public tomato: HTMLElement;
  public tomato2: HTMLElement;

  halls = [1, 2, 3, 4];

  constructor(private comboService: ComboService) {
    comboService.isShowingCombo.subscribe(status => {
      this.isShowingCombo = status;
    });
  }

  ngOnInit() {
    this.flour = document.getElementById('img-flour');
    this.pan = document.getElementById('img-pan');
    this.romero = document.getElementById('img-romero');
    this.pepper = document.getElementById('img-pepper');
    this.tomato = document.getElementById('img-tomato');
    this.tomato2 = document.getElementById('img-tomato-2');
  }
  public animateAssets(verticalOffset) {
    this.pepper.style.transform = `translateY(-${verticalOffset * 0.9}px)`;
    this.tomato.style.transform = `translateY(-${verticalOffset * 0.8}px)`;
    this.tomato2.style.transform = `translateY(-${verticalOffset * 0.7}px)`;
    this.romero.style.transform = `translateY(-${verticalOffset * 0.6}px)`;
    this.pan.style.transform = `translateY(-${verticalOffset * 0.5}px)`;
  }

  public toggleCombo() {
    this.comboService.isShowingCombo.next(!this.isShowingCombo);
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
