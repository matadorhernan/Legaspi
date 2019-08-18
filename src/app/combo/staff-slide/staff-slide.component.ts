import { Component, OnInit } from '@angular/core';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'app-staff-slide',
  templateUrl: './staff-slide.component.html',
  styleUrls: ['./staff-slide.component.css']
})
export class StaffSlideComponent implements OnInit {
  public waiter = false;
  public cook = false;
  public security = false;
  public mariachi = false;

  private key = 'legaspi_staff';

  constructor(private comboService: ComboService) {
    this.comboService.isCurrentValid.next(true);

    let savedSelected = this.comboService.getSession(this.key);
    if (savedSelected) {
      this.waiter = savedSelected.waiter
      this.cook = savedSelected.cook
      this.security = savedSelected.security
      this.mariachi = savedSelected.mariachi
    }
  }

  ngOnInit() {}

  selectOperations(inputChoice: string) {
    switch (inputChoice) {
      case 'waiter': this.waiter = !this.waiter
        break;
      case 'cook': this.cook = !this.cook
        break;
      case 'security': this.security = !this.security
        break;
      case 'mariachi': this.mariachi = !this.mariachi
        break;
    }

    let staff = {
      waiter: this.waiter,
      cook: this.cook,
      security: this.security,
      mariachi: this.mariachi
    }

    this.comboService.setSession(this.key, staff)
  }
}
