import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api/api.service';
import { Officer } from '../../models/officer.model';
import { LOCAL_OFFICERS } from '../../data/officers-data';
import { getLocalizedField } from '../../utils/localization.util';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.scss']
})
export class OfficersComponent implements OnInit, OnDestroy {
  officers: Officer[] = [...LOCAL_OFFICERS];
  loading = false;
  currentLang = 'mr';
  private langSub?: Subscription;

  constructor(
    private apiService: ApiService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || 'mr';
    this.langSub = this.translate.onLangChange.subscribe(({ lang }) => {
      this.currentLang = lang || 'mr';
      this.refreshLocalizedData();
    });
    this.loadOfficers();
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  loadOfficers(): void {
    this.loading = this.officers.length === 0;
    this.apiService.getOfficers().subscribe({
      next: (data) => {
        this.officers = data && data.length ? data : LOCAL_OFFICERS;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading officers:', err);
        this.officers = LOCAL_OFFICERS;
        this.loading = false;
      }
    });
  }

  getOfficerName(officer: Officer): string {
    return getLocalizedField(officer, 'name', this.currentLang);
  }

  getOfficerDesignation(officer: Officer): string {
    return getLocalizedField(officer, 'designation', this.currentLang);
  }

  private refreshLocalizedData(): void {
    this.officers = [...this.officers];
  }
}

