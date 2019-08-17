import { Component, OnInit } from '@angular/core';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'app-eventsize-slide',
  templateUrl: './eventsize-slide.component.html',
  styleUrls: ['./eventsize-slide.component.css']
})

export class EventsizeSlideComponent implements OnInit {

  
  public currentSelected: string = '';
  private key = 'legaspi-size'

  constructor(private comboService:ComboService) {
    let savedSelected = this.comboService.getSession(this.key)
    if(savedSelected){
      this.currentSelected = savedSelected;
      this.comboService.isCurrentValid.next(true);
    }
  }

  ngOnInit() {
  }

  
  selectOperations(inputChoice: string) {
    if (this.currentSelected == inputChoice) {
      this.currentSelected = '';
      this.comboService.isCurrentValid.next(false);
      this.comboService.setSession(this.key, '')
    } else {
      this.currentSelected = inputChoice;
      this.comboService.isCurrentValid.next(true);
      this.comboService.setSession(this.key, inputChoice)
    }
  }


}
