export interface ArticleType {
  id: number;
  title: string;
  slugname: string;
  category: string;
  image: string;
  description: string;
  content: string;
  author: string;
  date: string;
}

export interface UserType {
  id: number;
  name: string;
  avatar: string;
  email: string;
  password: string;
}
