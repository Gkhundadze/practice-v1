import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/sevices/news.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {
  public detailedNews:News[] = null;
  constructor(public newsdetailed:NewsService) { }

  ngOnInit(): void {
    console.log(this.newsdetailed.newsData);
    this.detailedNews = this.newsdetailed.newsData;
  }

}
