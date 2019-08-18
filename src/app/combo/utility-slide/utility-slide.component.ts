import { Component, OnInit } from '@angular/core';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'app-utility-slide',
  templateUrl: './utility-slide.component.html',
  styleUrls: ['./utility-slide.component.css']
})
export class UtilitySlideComponent implements OnInit {

  public pool = false;
  public lobby = false;
  public garden = false;
  public parking = false;

  private key = 'legaspi_utility';

  constructor(private comboService: ComboService) {
    this.comboService.isCurrentValid.next(true);

    let savedSelected = this.comboService.getSession(this.key);
    if (savedSelected) {
      this.pool = savedSelected.pool
      this.lobby = savedSelected.lobby
      this.garden = savedSelected.garden
      this.parking = savedSelected.parking
    }
  }

  ngOnInit() {}

  selectOperations(inputChoice: string) {
    switch (inputChoice) {
      case 'pool': this.pool = !this.pool
        break;
      case 'lobby': this.lobby = !this.lobby
        break;
      case 'garden': this.garden = !this.garden
        break;
      case 'parking': this.parking = !this.parking
        break;
    }

    let staff = {
      pool: this.pool,
      lobby: this.lobby,
      garden: this.garden,
      parking: this.parking
    }

    this.comboService.setSession(this.key, staff)
  }

}
