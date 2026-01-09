import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api/api.service';
import { Blog } from '../../models/blog.model';
import { LOCAL_BLOGS } from '../../data/blogs-data';
import { getLocalizedField } from '../../utils/localization.util';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {
  blogs: Blog[] = [...LOCAL_BLOGS];
  loading = false;
  selectedBlog: Blog | null = null;
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
    this.loadBlogs();
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  loadBlogs(): void {
    this.loading = this.blogs.length === 0;
    this.apiService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data && data.length ? data : LOCAL_BLOGS;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading blogs:', err);
        this.blogs = LOCAL_BLOGS;
        this.loading = false;
      }
    });
  }

  viewBlog(blog: Blog): void {
    this.selectedBlog = blog;
  }

  closeBlog(): void {
    this.selectedBlog = null;
  }

  getBlogTitle(blog: Blog | null): string {
    return getLocalizedField(blog, 'title', this.currentLang);
  }

  getBlogSummary(blog: Blog): string {
    return getLocalizedField(blog, 'summary', this.currentLang);
  }

  getBlogContent(blog: Blog | null): string {
    return getLocalizedField(blog, 'content', this.currentLang);
  }

  private refreshLocalizedData(): void {
    this.blogs = [...this.blogs];
    this.selectedBlog = this.selectedBlog ? { ...this.selectedBlog } : null;
  }
}

