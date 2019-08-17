import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getProjectListAPI } from '../constants/app-config';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }
 
  getProjectList():any{
    return this.httpClient.get(getProjectListAPI);
  }
}
