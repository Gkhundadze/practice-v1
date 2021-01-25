import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { GetFromApiService } from '../sevices/get-from-api.service';

@Injectable({
  providedIn: 'root'
})
export class GetFromApiResolver implements Resolve<boolean> {
  constructor( private GetApiData: GetFromApiService){

  };
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.GetApiData.getData();
  }
}
