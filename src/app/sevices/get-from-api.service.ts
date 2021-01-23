import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiData } from '../interfaces/api-data';


@Injectable({
  providedIn: 'root'
})
export class GetFromApiService {
  
  constructor(private httpClient : HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('https://us-central1-js04-b4877.cloudfunctions.net/tasks');
  }
  removeItem(id:string): Observable<any>{
    return this.httpClient.delete('https://us-central1-js04-b4877.cloudfunctions.net/tasks/'+id);
  }
  checkItem(id:string): Observable<any>{
    return this.httpClient.post('https://us-central1-js04-b4877.cloudfunctions.net/tasks/check/'+id, {});
  }
  unCheckItem(id:string): Observable<any>{
    return this.httpClient.post('https://us-central1-js04-b4877.cloudfunctions.net/tasks/uncheck/'+id, {});
  }
  sendTaskToApi(data:any): Observable<any>{
    return this.httpClient.post('https://us-central1-js04-b4877.cloudfunctions.net/tasks/create', data);
  }

}