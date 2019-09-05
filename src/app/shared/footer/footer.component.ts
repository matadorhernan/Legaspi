import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public contentFooter = {}

  constructor( private router: Router, private languageService:LanguageService) {
    languageService.currentLanguage.subscribe(lang=>{
      this.contentFooter = this.languageService.content
    })
   }
   public navigate(route: string) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
    this.router.navigate([route]);
  }
  ngOnInit() {
  }

}
