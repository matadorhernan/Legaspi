import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'app-contact-slide',
  templateUrl: './contact-slide.component.html',
  styleUrls: ['./contact-slide.component.css']
})
export class ContactSlideComponent implements OnInit {
  public formContact: FormGroup;

  constructor(private comboService: ComboService) {
    this.comboService.isCurrentValid.next(false);
  }

  ngOnInit() {

    this.formContact = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });

    let savedContact = this.comboService.getLocal()

    if (savedContact){
      this.formContact.patchValue(savedContact)
      if(this.formContact.valid){
        this.comboService.isCurrentValid.next(true);
        this.comboService.setLocal(this.formContact.value)
      }
    }

    this.formContact.valueChanges.subscribe(data => {
      if (this.formContact.valid) {
        this.comboService.isCurrentValid.next(true);
        this.comboService.setLocal(this.formContact.value)
      } else {
        this.comboService.isCurrentValid.next(false);
      }
    });
  }
}
