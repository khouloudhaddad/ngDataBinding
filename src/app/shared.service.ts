import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:3000/';

  heros : any[] = [];

  createHero(hero: any){

    return this.http.post(this.url + 'hero/create', hero);

  }

}
