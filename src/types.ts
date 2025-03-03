export interface PostData {
  id: number;
  title: string;
  content: string;
  markupType: MarkupType;
  views: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  tags: Tag[];
}

export enum MarkupType {
  HTML = "HTML",
  MARKDOWN = "MARKDOWN",
  TEXT = "TEXT",
}

export interface Tag {
  id: number;
  name: string;
  createdAt: string;
}

export interface Series {
  title: string;
  id: number;
  description: string;
  createdAt: string;
}
