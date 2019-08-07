import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  public navSelector:HTMLElement;
  public pageName:string;

  public homeMenu:HTMLElement;
  public bookingMenu:HTMLElement;
  public cateringMenu:HTMLElement;
  public galleryMenu:HTMLElement;
  
  constructor(private router:Router) {  
    router.events.subscribe((url: any) => {
      let parts = router.url.split('/');
      this.pageName = parts[1];
    });
  }

  navSelected(inputRoute:string){
    this.router.navigate([`${inputRoute}`]);
  }

  ngOnInit() {
    this.navSelector = document.getElementById('nav-selector');
    this.homeMenu = document.getElementById('home');
    this.bookingMenu = document.getElementById('booking');
    this.cateringMenu = document.getElementById('catering');
    this.galleryMenu = document.getElementById('gallery');

    
    
  }

}
