import firebase from 'firebase/app';
import { UserData } from './user-data';
export interface Article {
  id: string;
  ownerId: string;
  title: string;
  description?: string;
  image: string | any;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
  likeCount?: number;
}

export interface ArticleWithOwner extends Article {
  user: UserData;
}
