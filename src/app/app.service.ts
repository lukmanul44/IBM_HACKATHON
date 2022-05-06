import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppModel} from '../app/app.model'
@Injectable({
    providedIn: 'root'
  })
  export class BranchService {
   
    constructor(private http: HttpClient, 
      ) {
    }
  
  
    getUserByaadharNum(num:any): Observable<AppModel[]> {
      return this.http.get<AppModel[]>("http://localhost:8080/ibm/project/user/get"+num);
    }
  
    
  
  }
  