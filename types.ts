
export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
}

export interface Comment {
  id: string;
  text: string;
  authorId: string;
  postId: string;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
  tags: string[];
  imageUrl: string;
  views: number;
}
