export interface Service {
  id: number;
  title: string;
  titleMr: string;
  titleEn: string;
  titleHi: string;
  description: string;
  descriptionMr: string;
  descriptionEn: string;
  descriptionHi: string;
  requiredDocuments: string[];
  processTime: string;
  url: string;
  isActive: boolean;
  icon?: string;
  iconColor?: string;
}

