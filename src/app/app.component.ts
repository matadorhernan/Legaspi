import { Component } from '@angular/core';
import { ComboService } from './services/combo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'legaspi';
  isShowingCombo:boolean = false;

  constructor(private comboService:ComboService){
    comboService.isShowingCombo.subscribe(status =>{
      this.isShowingCombo = status;
    })
  }

}
