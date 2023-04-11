import { Component } from '@angular/core';
import { NbaApiService } from '../Service/nba-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  teams: any[] = [];
  games: any[] = [];

  constructor(private nbapiService: NbaApiService) { }

  ngOnInit(): void {
    this.nbapiService.getGames().subscribe(
      (response) => {
        this.games = response.data.slice(0, 6);
      }
    );
    this.nbapiService.getTeams().subscribe(
      (response) => {
        this.teams = response.data.slice(0, 4);
      },
    );
  }
  
    
 
}
