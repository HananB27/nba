import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaApiService {

  private baseUrl = 'https://free-nba.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    const options = {
      params: { page: '0' },
      headers: {
        'X-RapidAPI-Key': '70911187c4mshdb3dfd60b77a1b0p18b79fjsne934449af779',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };
    return this.http.get(`${this.baseUrl}/teams`, options);
  }

  getGames(): Observable<any> {
    const options = {
      params: { page: '0', per_page: '25' },
      headers: {
        'X-RapidAPI-Key': '70911187c4mshdb3dfd60b77a1b0p18b79fjsne934449af779',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };
    return this.http.get(`${this.baseUrl}/games`, options);
  }
}