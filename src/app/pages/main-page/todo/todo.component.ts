import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiData } from 'src/app/interfaces/api-data';
import { GetFromApiService } from 'src/app/sevices/get-from-api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public apiDataRender:ApiData[];
  public inputForm:FormGroup;
  constructor(
    private apiData: GetFromApiService,
    private fb: FormBuilder
    
    ) { }

  ngOnInit(): void {
   this.getData();
   this.inputForm = this.fb.group({
     text: ["", [Validators.required]]
   });
  
   
  }
  submitForm(inputForm:FormGroup): void{
    if(inputForm.valid){     
      this.apiData.sendTaskToApi(inputForm.value).subscribe((res)=>{
        this.inputForm.reset();
        this.getData();
      })
    }else{
      alert('რამე ჩაწერე ბიჭო!');
    }
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
  trackByFn(index) {return index;}
}
