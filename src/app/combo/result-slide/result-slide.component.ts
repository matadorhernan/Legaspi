import { Component, OnInit } from '@angular/core';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'app-result-slide',
  templateUrl: './result-slide.component.html',
  styleUrls: ['./result-slide.component.css']
})
export class ResultSlideComponent implements OnInit {

  public basePrice = 10000

  private contactKey = 'legaspi_con'
  private kindKey = 'legaspi_kind'
  private sizeKey = 'legaspi_size'
  private staffKey = 'legaspi_staff'
  private utilityKey = 'legaspi_utility'

  public name:string
  public email:string
  public setting:string
  public size:string

  public waiter:boolean
  public cook:boolean
  public security:boolean
  public mariachi:boolean

  public pool:boolean
  public lobby:boolean
  public garden:boolean
  public parking:boolean
  

  constructor(private comboService:ComboService) {

    this.name = comboService.getSession(this.contactKey).name
    this.email = comboService.getSession(this.contactKey).email
    this.setting = comboService.getSession(this.kindKey)
    this.size = comboService.getSession(this.sizeKey)

    this.waiter = comboService.getSession(this.staffKey).waiter
    this.cook = comboService.getSession(this.staffKey).cook
    this.security = comboService.getSession(this.staffKey).security
    this.mariachi = comboService.getSession(this.staffKey).mariachi
    
    this.pool = comboService.getSession(this.utilityKey).pool
    this.lobby = comboService.getSession(this.utilityKey).lobby
    this.garden = comboService.getSession(this.utilityKey).garden
    this.parking = comboService.getSession(this.utilityKey).parking

    if(this.setting == 'company')
      this.basePrice -= 5000

    if(this.waiter)
      this.basePrice += 3000

    if(this.cook) 
     this.basePrice += 3000

     if(this.security)
     this.basePrice += 3000

     if(this.mariachi)
     this.basePrice += 10000

     if(this.pool)
     this.basePrice += 1000

     if(this.lobby)
     this.basePrice += 1000

     if(this.garden)
     this.basePrice += 1000

     if(this.parking)
     this.basePrice += 3000
    
  }

  ngOnInit() {
  }

}
