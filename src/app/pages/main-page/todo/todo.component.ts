import { Component, OnInit } from '@angular/core';
import { ApiData } from 'src/app/interfaces/api-data';
import { GetFromApiService } from 'src/app/sevices/get-from-api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public apiDataRender:ApiData[];
  constructor(private apiData: GetFromApiService) { }

  ngOnInit(): void {
   this.getData();
   
   
    
  }

  getData():void {
    this.apiData.getData().subscribe((response) => {
      console.log( 'from getFunction', response.data);
      this.apiDataRender = response.data;
      console.log(this.apiDataRender);
    })
  }


 

}
