import { Component } from '@angular/core';
import { NbaApiService } from '../Service/nba-api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  teams: any[] = [];

  constructor(private nbapiService: NbaApiService) { }

  ngOnInit(): void {
    this.nbapiService.getTeams().subscribe(
      (response) => {
        this.teams = response.data;
        console.log(this.teams);
      }
    );
  }
}
