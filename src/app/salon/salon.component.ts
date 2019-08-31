import { Component, OnInit } from '@angular/core';
import { SalonService } from '../services/salon.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  public salons = [];

  constructor(private salonService:SalonService) { 
    this.salons = this.salonService.halls;
    console.log(this.salons.length);
    
  }

  ngOnInit() {
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  }

}
