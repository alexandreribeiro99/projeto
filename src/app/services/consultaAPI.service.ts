import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class consultaAPI {

constructor(private http: HttpClient) { }

api: string = "https://api.github.com/search/repositories?q=language:Java&sort=stars&%10page=1";
urlRepositorio: string;
testeurl: string;

  listarItems(): Observable<any>{
      return this.http.get(this.api);
  }

  listarPulls(testing): Observable<any>{
    return this.http.get(testing);
}


  }


