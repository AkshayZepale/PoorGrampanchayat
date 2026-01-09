export interface Blog {
  id: number;
  title: string;
  titleMr: string;
  titleEn: string;
  titleHi: string;
  summary: string;
  summaryMr: string;
  summaryEn: string;
  summaryHi: string;
  content: string;
  contentMr: string;
  contentEn: string;
  contentHi: string;
  imageUrl?: string;
  publishDate: Date;
  author: string;
  isActive: boolean;
}

