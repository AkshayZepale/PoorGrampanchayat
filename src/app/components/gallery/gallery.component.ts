import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api/api.service';
import { GalleryItem } from '../../models/gallery-item.model';
import { LOCAL_GALLERY_ITEMS } from '../../data/gallery-data';
import { getLocalizedField } from '../../utils/localization.util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  galleryItems: GalleryItem[] = [...LOCAL_GALLERY_ITEMS];
  loading = false;
  selectedImage: GalleryItem | null = null;
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
        this.galleryItems = [...this.galleryItems];
        this.selectedImage = this.selectedImage ? { ...this.selectedImage } : null;
      }
    );
    this.loadGallery();
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  loadGallery(): void {
    this.loading = this.galleryItems.length === 0;
    this.apiService.getGalleryItems().subscribe({
      next: (data) => {
        this.galleryItems = data && data.length ? data : LOCAL_GALLERY_ITEMS;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading gallery:', err);
        this.galleryItems = LOCAL_GALLERY_ITEMS;
        this.loading = false;
      }
    });
  }

  openModal(item: GalleryItem): void {
    this.selectedImage = item;
  }

  closeModal(): void {
    this.selectedImage = null;
  }

  getLocalizedTitle(item: GalleryItem): string {
    return getLocalizedField(item, 'title', this.currentLang);
  }

  getLocalizedDescription(item: GalleryItem): string {
    return getLocalizedField(item, 'description', this.currentLang);
  }
}

