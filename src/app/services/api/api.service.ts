import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../../models/service.model';
import { Notice } from '../../models/notice.model';
import { Blog } from '../../models/blog.model';
import { Officer } from '../../models/officer.model';
import { Scheme } from '../../models/scheme.model';
import { GalleryItem } from '../../models/gallery-item.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7000/api'; // Update with your .NET API URL

  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) { }

  private getLanguageCode(): string {
    const lang = this.translate.currentLang || 'mr';
    const langMap: { [key: string]: string } = {
      'mr': 'mr',
      'en': 'en',
      'hi': 'hi'
    };
    return langMap[lang] || 'mr';
  }

  private getParams(): HttpParams {
    return new HttpParams().set('lang', this.getLanguageCode());
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}/services`, { params: this.getParams() });
  }

  getService(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.apiUrl}/services/${id}`, { params: this.getParams() });
  }

  getNotices(): Observable<Notice[]> {
    return this.http.get<Notice[]>(`${this.apiUrl}/notices`, { params: this.getParams() });
  }

  getNotice(id: number): Observable<Notice> {
    return this.http.get<Notice>(`${this.apiUrl}/notices/${id}`, { params: this.getParams() });
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/blogs`, { params: this.getParams() });
  }

  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/blogs/${id}`, { params: this.getParams() });
  }

  getOfficers(): Observable<Officer[]> {
    return this.http.get<Officer[]>(`${this.apiUrl}/officers`, { params: this.getParams() });
  }

  getOfficer(id: number): Observable<Officer> {
    return this.http.get<Officer>(`${this.apiUrl}/officers/${id}`, { params: this.getParams() });
  }

  getSchemes(): Observable<Scheme[]> {
    return this.http.get<Scheme[]>(`${this.apiUrl}/schemes`, { params: this.getParams() });
  }

  getScheme(id: number): Observable<Scheme> {
    return this.http.get<Scheme>(`${this.apiUrl}/schemes/${id}`, { params: this.getParams() });
  }

  getGalleryItems(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>(`${this.apiUrl}/gallery`, { params: this.getParams() });
  }

  getGalleryItem(id: number): Observable<GalleryItem> {
    return this.http.get<GalleryItem>(`${this.apiUrl}/gallery/${id}`, { params: this.getParams() });
  }
}

