import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.subframe.css',
    './navbar.mainframe.css',
    './navbar.component.css'
  ]
})
export class NavbarComponent implements OnInit {
  public pageName: string;
  public isShowingCombo: boolean = false;
  public navSelector: HTMLElement;

  public homeMenu: HTMLElement;
  public bookingMenu: HTMLElement;
  public cateringMenu: HTMLElement;
  public galleryMenu: HTMLElement;

  constructor(private router: Router, private comboService: ComboService) {
    comboService.isShowingCombo.subscribe(status => {
      this.isShowingCombo = status;
    });

    router.events.subscribe((url: any) => {
      if (router.url.split('/')[1] != this.pageName) {
        this.pageName = router.url.split('/')[1];

        switch (this.pageName) {
          case 'booking':
            this.navSelected(
              this.bookingMenu.offsetLeft,
              this.bookingMenu.offsetWidth
            );
            break;
          case 'catering':
            this.navSelected(
              this.cateringMenu.offsetLeft,
              this.cateringMenu.offsetWidth
            );
            break;
          case 'gallery':
            this.navSelected(
              this.galleryMenu.offsetLeft,
              this.galleryMenu.offsetWidth
            );
            break;
          default:
            this.navSelected(
              this.homeMenu.offsetLeft,
              this.homeMenu.offsetWidth
            );
            break;
        }
      }
    });
  }
  navigate(route: string) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
    this.router.navigate([route]);
  }
  navSelected(left: number, width: number) {
    this.navSelector.style.width = `${width}px`;
    this.navSelector.style.left = `${left}px`;
  }

  toggleCombo() {
    this.comboService.isShowingCombo.next(!this.isShowingCombo);
  }

  ngOnInit() {
    this.navSelector = document.getElementById('nav-selector');
    this.homeMenu = document.getElementById('home');
    this.bookingMenu = document.getElementById('booking');
    this.cateringMenu = document.getElementById('catering');
    this.galleryMenu = document.getElementById('gallery');
  }
}
