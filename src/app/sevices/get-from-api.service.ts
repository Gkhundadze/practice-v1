import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetFromApiService {
  
  constructor(private httpClient : HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('https://us-central1-js04-b4877.cloudfunctions.net/tasks');
  }
}