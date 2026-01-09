import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api/api.service';
import { Service } from '../../models/service.model';
import { Notice } from '../../models/notice.model';
import { Blog } from '../../models/blog.model';
import { Officer } from '../../models/officer.model';
import { Scheme } from '../../models/scheme.model';
import { GalleryItem } from '../../models/gallery-item.model';
import { LOCAL_GALLERY_ITEMS } from '../../data/gallery-data';
import { LOCAL_SERVICES } from '../../data/services-data';
import { LOCAL_NOTICES } from '../../data/notices-data';
import { LOCAL_BLOGS } from '../../data/blogs-data';
import { LOCAL_OFFICERS } from '../../data/officers-data';
import { LOCAL_SCHEMES } from '../../data/schemes-data';
import { getLocalizedField } from '../../utils/localization.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sliderImages: any[] = [];
  services: Service[] = [];
  notices: Notice[] = [];
  blogs: Blog[] = [];
  officers: Officer[] = [];
  schemes: Scheme[] = [];
  galleryItems: GalleryItem[] = [];
  currentSlideIndex = 0;
  currentLang = 'mr';
  private langSub?: Subscription;

  constructor(
    private apiService: ApiService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || 'mr';
    this.langSub = this.translate.onLangChange.subscribe(
      ({ lang }) => {
        this.currentLang = lang || 'mr';
        this.refreshLocalizedData();
      }
    );
    this.services = this.getTopServices();
    this.notices = this.getTopNotices();
    this.blogs = this.getTopBlogs();
    this.officers = this.getTopOfficers();
    this.schemes = this.getTopSchemes();
    this.galleryItems = this.getLatestItems(LOCAL_GALLERY_ITEMS);
    this.loadServices();
    this.loadNotices();
    this.loadBlogs();
    this.loadOfficers();
    this.loadSchemes();
    this.loadGallery();
    this.initializeSlider();
  }

  initializeSlider(): void {
    this.sliderImages = [
      { id: 1, imageUrl: 'assets/i18n/ganpatipule.jpg', title: 'Welcome' },
      { id: 2, imageUrl: 'assets/i18n/ships.jpg', title: 'Community' },
      { id: 3, imageUrl: 'assets/i18n/rail.jpg', title: 'Development' }
    ];
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.sliderImages.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }


    openUrl(url: string): void {
    if (!url) return;
    const validUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
    window.open(validUrl, '_blank', 'noopener,noreferrer');
  }
  
  loadServices(): void {
    this.apiService.getServices().subscribe({
      next: (data) => this.services = this.getTopServices(data),
      error: (err) => {
        console.error('Error loading services:', err);
        this.services = this.getTopServices();
      }
    });
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
    this.apiService.getNotices().subscribe({
      next: (data) => this.notices = this.getTopNotices(data),
      error: (err) => {
        console.error('Error loading notices:', err);
        this.notices = this.getTopNotices();
      }
    });
  }

  loadBlogs(): void {
    this.apiService.getBlogs().subscribe({
      next: (data) => this.blogs = this.getTopBlogs(data),
      error: (err) => {
        console.error('Error loading blogs:', err);
        this.blogs = this.getTopBlogs();
      }
    });
  }

  loadOfficers(): void {
    this.apiService.getOfficers().subscribe({
      next: (data) => this.officers = this.getTopOfficers(data),
      error: (err) => {
        console.error('Error loading officers:', err);
        this.officers = this.getTopOfficers();
      }
    });
  }

  loadSchemes(): void {
    this.apiService.getSchemes().subscribe({
      next: (data) => this.schemes = this.getTopSchemes(data),
      error: (err) => {
        console.error('Error loading schemes:', err);
        this.schemes = this.getTopSchemes();
      }
    });
  }

  loadGallery(): void {
    this.apiService.getGalleryItems().subscribe({
      next: (data) => {
        const items = data && data.length ? data : LOCAL_GALLERY_ITEMS;
        this.galleryItems = this.getLatestItems(items);
      },
      error: (err) => {
        console.error('Error loading gallery:', err);
        this.galleryItems = this.getLatestItems(LOCAL_GALLERY_ITEMS);
      }
    });
  }

  private getLatestItems(items: GalleryItem[]): GalleryItem[] {
    return [...items]
      .map(item => ({
        ...item,
        uploadDate: item.uploadDate ? new Date(item.uploadDate) : new Date(0)
      }))
      .sort((a, b) => {
        const dateA = (a.uploadDate as Date).getTime();
        const dateB = (b.uploadDate as Date).getTime();
        return dateB - dateA;
      })
      .slice(0, 3);
  }

  private getTopServices(data?: Service[]): Service[] {
    const items = data && data.length ? data : LOCAL_SERVICES;
    return items.slice(0, 6);
  }

  private getTopNotices(data?: Notice[]): Notice[] {
    const items = data && data.length ? data : LOCAL_NOTICES;
    return items
      .map(notice => ({
        ...notice,
        publishDate: notice.publishDate ? new Date(notice.publishDate) : new Date()
      }))
      .slice(0, 5);
  }

  private getTopBlogs(data?: Blog[]): Blog[] {
    const items = data && data.length ? data : LOCAL_BLOGS;
    return items
      .map(blog => ({
        ...blog,
        publishDate: blog.publishDate ? new Date(blog.publishDate) : new Date()
      }))
      .slice(0, 3);
  }

  private getTopOfficers(data?: Officer[]): Officer[] {
    const items = data && data.length ? data : LOCAL_OFFICERS;
    return items.slice(0, 6);
  }

  private getTopSchemes(data?: Scheme[]): Scheme[] {
    const items = data && data.length ? data : LOCAL_SCHEMES;
    return items.slice(0, 6);
  }

  getLocalizedTitle(item: GalleryItem): string {
    return getLocalizedField(item, 'title', this.currentLang);
  }

  getLocalizedDescription(item: GalleryItem): string {
    return getLocalizedField(item, 'description', this.currentLang);
  }

  getServiceTitle(service: Service): string {
    return getLocalizedField(service, 'title', this.currentLang);
  }

  getServiceDescription(service: Service): string {
    return getLocalizedField(service, 'description', this.currentLang);
  }

  getNoticeTitle(notice: Notice): string {
    return getLocalizedField(notice, 'title', this.currentLang);
  }

  getNoticeDescription(notice: Notice): string {
    return getLocalizedField(notice, 'description', this.currentLang);
  }

  getSchemeTitle(scheme: Scheme): string {
    return getLocalizedField(scheme, 'title', this.currentLang);
  }

  getSchemeDescription(scheme: Scheme): string {
    return getLocalizedField(scheme, 'description', this.currentLang);
  }

  getOfficerName(officer: Officer): string {
    return getLocalizedField(officer, 'name', this.currentLang);
  }

  getOfficerDesignation(officer: Officer): string {
    return getLocalizedField(officer, 'designation', this.currentLang);
  }

  getBlogTitle(blog: Blog): string {
    return getLocalizedField(blog, 'title', this.currentLang);
  }

  getBlogSummary(blog: Blog): string {
    return getLocalizedField(blog, 'summary', this.currentLang);
  }

  getBlogContent(blog: Blog): string {
    return getLocalizedField(blog, 'content', this.currentLang);
  }

  private refreshLocalizedData(): void {
    this.services = [...this.services];
    this.notices = [...this.notices];
    this.blogs = [...this.blogs];
    this.officers = [...this.officers];
    this.schemes = [...this.schemes];
    this.galleryItems = [...this.galleryItems];
  }

}

