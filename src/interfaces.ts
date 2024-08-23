export interface IAuthor {
  id: string;
  name: string,
  username: string,
}

export interface ILink {
  id: string;
  label: string;
  href: string;
}

export interface IPost {
  author: IAuthor;
  id: string;
  content: string;
  image: string;
  timestamp: number;
}
