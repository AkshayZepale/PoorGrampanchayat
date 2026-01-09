import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api/api.service';
import { Service } from '../../models/service.model';
import { LOCAL_SERVICES } from '../../data/services-data';
import { getLocalizedField } from '../../utils/localization.util';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
  services: Service[] = [...LOCAL_SERVICES];
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
    this.loadServices();
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  loadServices(): void {
    this.loading = this.services.length === 0;
    this.apiService.getServices().subscribe({
      next: (data) => {
        this.services = data && data.length ? data : LOCAL_SERVICES;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading services:', err);
        this.services = LOCAL_SERVICES;
        this.loading = false;
      }
    });
  }

  getServiceTitle(service: Service): string {
    return getLocalizedField(service, 'title', this.currentLang);
  }

  getServiceDescription(service: Service): string {
    return getLocalizedField(service, 'description', this.currentLang);
  }

  /** 
   * Opens the service URL in a new tab.
   * Adds https:// automatically if missing.
   */
  openUrl(url: string): void {
    if (!url) return;
    const validUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
    window.open(validUrl, '_blank', 'noopener,noreferrer');
  }

  private refreshLocalizedData(): void {
    this.services = [...this.services];
  }
}
