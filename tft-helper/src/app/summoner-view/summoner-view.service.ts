import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummonerViewService {

  summonerinfo$: BehaviorSubject<any>;

  constructor(private http: HttpClient) { }

  getSummonerInfo(summoner: string){
    const requestName = this.massageName(summoner);
    const params = new HttpParams().set('summonerName', requestName);
    const url: string = 'localhost:4200';

    this.http.post<any>(url, params)
      .subscribe(data => {

      })

  }

  massageName(name: string){
    name.replace(' ', '_');
    return name;
  }

}
