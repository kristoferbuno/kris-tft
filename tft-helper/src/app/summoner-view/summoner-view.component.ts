import { Component, OnInit } from '@angular/core';
import { SummonerViewService } from './summoner-view.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerData } from '../player-data'

@Component({
  selector: 'app-summoner-view',
  templateUrl: './summoner-view.component.html',
  styleUrls: ['./summoner-view.component.css']
})
export class SummonerViewComponent implements OnInit {
  summoner$;
  summonerName;

  constructor(public summonerViewService: SummonerViewService,
              private route: ActivatedRoute) {
                this.route.queryParams.subscribe(params => {
                  this.summonerName = params['summoner'];
                })
              }

  ngOnInit() {
    this.summonerViewService.summonerinfo$.subscribe((data) => {
      console.log(data);
      this.summoner$ = data;
    });
    this.summonerViewService.getSummonerInfo(this.summonerName);
  }

  getWinRate(){
    let wins = this.summoner$.wins;
    let loss = this.summoner$.losses;
    if (loss > 0){
      return Math.round(100*wins/loss);
    }
    else return 0;
  }

  circleNumber(){
    let lossrate = 1 - .01*this.getWinRate();
    return 440*lossrate;
  }

}
