export interface IMage {
  id: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: JSON;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
}

export interface IUser {
  id: string;
  name: string;
  image: IMage;
}
export interface ICategory {
  id: string;
  name: string;
  slug: string;
}

export interface IArticle {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  banner: boolean;
  image: IMage;
  author: IUser;
  slug: string;
  category: ICategory;
  published_at: Date;
}

export interface IMagazine {
  id: string;
  cover: {
    url: string;
  };
  title: string;
  issue: string;
  pdf: {
    url: string;
  };
  date: Date;
}

export interface ICategory {
  slug: string;
  name: string;
}
