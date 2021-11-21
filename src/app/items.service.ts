import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

constructor(private http: HttpClient) { }

estaurl: string = "https://api.github.com/search/repositories?q=language:Java&sort=stars&%10page=1";

pulls_url: string;

items: any;


  listarItems(): Observable<any>{
      return this.http.get(this.estaurl);
  }



}
