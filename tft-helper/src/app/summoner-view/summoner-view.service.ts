import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PlayerData } from '../player-data'

@Injectable({
  providedIn: 'root'
})
export class SummonerViewService {

  summonerinfo$: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.summonerinfo$ = new BehaviorSubject<any>({});
  }

  getSummonerInfo(summoner: string){
    const requestName = this.massageName(summoner);
    const params = new HttpParams().set('summonerName', requestName);
    const url: string = environment.url;
    const port: string = environment.apiPort;

    this.http.post<any>(`${url}:${port}/user?summonerName=${requestName}`, params)
      .subscribe((data: PlayerData) => {
        this.summonerinfo$.next(data);
        document.documentElement.style.setProperty('@keyframes html', `to {
            stroke-dashoffset: 69;
        }`); //suffix may be px or ''
      })
  }

  massageName(name: string){
    name.replace(' ', '_');
    return name;
  }

}
