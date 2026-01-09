export interface Notice {
  id: number;
  title: string;
  titleMr: string;
  titleEn: string;
  titleHi: string;
  description: string;
  descriptionMr: string;
  descriptionEn: string;
  descriptionHi: string;
  publishDate: Date;
  fileUrl?: string;
  isActive: boolean;
}

