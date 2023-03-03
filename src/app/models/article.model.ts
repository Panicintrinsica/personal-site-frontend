export interface Article {
  title: string;
  shortContent: string;
  fullContent: string;
  category: string;
  tags: string[];
  slug: string;
  isPublished: boolean;
  author: string;
  createdAt?: Date;
  updatedAt?: Date;
}
