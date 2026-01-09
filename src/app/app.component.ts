import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-gram-panchayat';

  constructor(private translate: TranslateService) {
    // Set default language to Marathi
    translate.setDefaultLang('mr');
    translate.use('mr');
  }
}

