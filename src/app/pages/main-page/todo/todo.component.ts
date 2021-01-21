import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
 
      this.apiDataRender = response.data;
  
    })
  }
 
  deleteItem(item){
    this.apiData.removeItem(item.id).subscribe((res) => {
      if(res.status ==='ok'){
        this.getData();
      }
    })
  }
  checkThisItem(itemStatus, item){
    if(!itemStatus.target.checked){
      this.apiData.unCheckItem(item.id).subscribe((res)=>{
        if(res.status ==='ok'){
          this.getData();
        }
      })
    }else{
      this.apiData.checkItem(item.id).subscribe((res)=>{
        if(res.status ==='ok'){
          this.getData();
        }
      })
    }   
  }
  trackByFn(index) {
    return index;
  }

}
