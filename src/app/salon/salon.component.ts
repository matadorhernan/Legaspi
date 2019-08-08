import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  public halls = [1,2,3,4,5,6]
  constructor() { }

  ngOnInit() {
  }

}
