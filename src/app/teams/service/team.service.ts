import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/players/models/player.model';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  TEAMS_API_PATH = 'https://localhost:44352/Teams';
  constructor(private httpClient: HttpClient) {}

  public getTeams$(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.TEAMS_API_PATH);
  }

  public addPlayerToTeam$(player: Player, teamId: number): Observable<Team> {
    return this.httpClient.patch<Team>(
      this.TEAMS_API_PATH + '/addPlayer/' + teamId,
      player
    );
  }
}
