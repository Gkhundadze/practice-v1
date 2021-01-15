import { Injectable } from '@angular/core';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public newsData:News[] = [
    {
      title: 'typography lab',
      imgUrl: '../assets/images/card-section/img-1.jpg',
      id: 1
    },
    {
      title: 'online marketing',
      imgUrl: '../assets/images/card-section/img-2.jpg',
      id: 2
    },
    {
      title: 'c# coding',
      imgUrl: '../assets/images/card-section/img-3.jpg',
      id: 3
    },
    {
      title: 'interface design',
      imgUrl: '../assets/images/card-section/img-4.jpg',
      id: 4
    }
  ]
  constructor() { }
}
