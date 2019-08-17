import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timelogAPI } from '../constants/app-config';

@Injectable({
  providedIn: 'root'
})
export class TimelogService {

  constructor(private httpClient: HttpClient) { }

  save(postData: Object): Observable<any> {
    return this.httpClient.post(timelogAPI, postData);
  }

  getAll():any{
    return this.httpClient.get(timelogAPI);
  }
  
}
