import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

constructor(private http: HttpClient) { }

estaurl: string = "https://api.github.com/search/repositories?q=language:Java&sort=stars&%20page=1";
deu: string = "https://api.github.com/users/alexandreribeiro99/repos";

  listarItems(): Observable<any>{
    //https://api.github.com/search/repositories?q=language:Java&sort=stars&%20page=1
    //https://api.github.com/users/alexandreribeiro99/repos
      return this.http.get(this.estaurl);
  }

}
