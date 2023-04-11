import { Component } from '@angular/core';
import { NbaApiService } from '../Service/nba-api.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  games: any[] = [];

  constructor(private nbapiService: NbaApiService) { }

  ngOnInit(): void {
    this.nbapiService.getGames().subscribe(
      (response) => {
        this.games = response.data;
        // console.log(this.games);
      }
    );
  }
}
