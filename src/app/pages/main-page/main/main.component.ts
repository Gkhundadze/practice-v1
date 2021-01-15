import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/sevices/news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  newsToRender: News[]=null;
  constructor(private myNews:NewsService) { }

  ngOnInit(): void {
    console.log();
    this.newsToRender = this.myNews.newsData;
    
    
  }

}
