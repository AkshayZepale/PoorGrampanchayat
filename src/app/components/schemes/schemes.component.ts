import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api/api.service';
import { Scheme } from '../../models/scheme.model';
import { LOCAL_SCHEMES } from '../../data/schemes-data';
import { getLocalizedField } from '../../utils/localization.util';

@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.scss']
})
export class SchemesComponent implements OnInit, OnDestroy {
  schemes: Scheme[] = [...LOCAL_SCHEMES];
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
    this.loadSchemes();
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  loadSchemes(): void {
    this.loading = this.schemes.length === 0;
    this.apiService.getSchemes().subscribe({
      next: (data) => {
        this.schemes = data && data.length ? data : LOCAL_SCHEMES;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading schemes:', err);
        this.schemes = LOCAL_SCHEMES;
        this.loading = false;
      }
    });
  }

  getSchemeTitle(scheme: Scheme): string {
    return getLocalizedField(scheme, 'title', this.currentLang);
  }

  getSchemeDescription(scheme: Scheme): string {
    return getLocalizedField(scheme, 'description', this.currentLang);
  }

  getSchemeEligibility(scheme: Scheme): string {
    return getLocalizedField(scheme, 'eligibility', this.currentLang);
  }

  getSchemeBenefits(scheme: Scheme): string {
    return getLocalizedField(scheme, 'benefits', this.currentLang);
  }

  getSchemeProcess(scheme: Scheme): string {
    return getLocalizedField(scheme, 'applicationProcess', this.currentLang);
  }

  //   openUrl(url: string): void {
  //   if (!url) return;
  //   const validUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
  //   window.open(validUrl, '_blank', 'noopener,noreferrer');
  // }

openFile(url: string, event: Event) {
  event.stopPropagation();  // Prevent routerLink navigation
  window.open(url, '_blank');
}

  private refreshLocalizedData(): void {
    this.schemes = [...this.schemes];
  }
  
}

