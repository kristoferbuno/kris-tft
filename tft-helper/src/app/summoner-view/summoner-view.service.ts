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
    let requestName = this.massageName(summoner);
    let params = new HttpParams().set('summonerName', requestName);

        this.http.get()

  }

  massageName(name: string){
    name.replace(' ', '_');
    return name;
  }

}
