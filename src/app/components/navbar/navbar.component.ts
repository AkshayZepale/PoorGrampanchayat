import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentLang: string = 'mr';
  isCollapsed = true;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || 'mr';
  }

  switchLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
    this.closeMenu();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  closeMenu() {
  this.isCollapsed = true;  // 👈 Auto close menu
}

}

