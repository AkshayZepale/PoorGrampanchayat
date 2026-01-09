import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api/api.service';
import { LOCAL_NOTICES } from '../../data/notices-data';
import { Notice } from '../../models/notice.model';
import { getLocalizedField } from '../../utils/localization.util';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit, OnDestroy {
  notices: Notice[] = [...LOCAL_NOTICES];
  loading = false;
  currentLang = 'mr';
  private langSub?: Subscription;

  constructor(
    private apiService: ApiService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || 'mr';
    this.langSub = this.translate.onLangChange.subscribe(({ lang }) => {
      this.currentLang = lang || 'mr';
      this.refreshLocalizedData();
    });
    this.loadNotices();
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

    openFile(url: string, event: Event) {
  event.stopPropagation();  // Prevent routerLink navigation
  window.open(url, '_blank');
}

downloadFile(url: string, event: Event) {
  event.stopPropagation(); // Prevent routerLink navigation

  const a = document.createElement('a');
  a.href = url;
  a.download = url.split('/').pop() || 'download';

  document.body.appendChild(a); // Required for Firefox & Safari
  a.click();
  document.body.removeChild(a);
}


  loadNotices(): void {
    this.loading = this.notices.length === 0;
    this.apiService.getNotices().subscribe({
      next: (data) => {
        this.notices = data && data.length ? data : LOCAL_NOTICES;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading notices:', err);
        this.notices = LOCAL_NOTICES;
        this.loading = false;
      }
    });
  }

  getNoticeTitle(notice: Notice): string {
    return getLocalizedField(notice, 'title', this.currentLang);
  }

  getNoticeDescription(notice: Notice): string {
    return getLocalizedField(notice, 'description', this.currentLang);
  }

  private refreshLocalizedData(): void {
    this.notices = [...this.notices];
  }
}
