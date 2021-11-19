import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

constructor(private http: HttpClient) { }

estaurl: string = "https://api.github.com/search/repositories?q=language:Java&sort=stars&%20page=1";


  listarItems(): Observable<any>{
      return this.http.get(this.estaurl);
  }

}
