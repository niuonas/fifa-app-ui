import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  PLAYERS_API_PATH = 'https://localhost:44352/Players';
  constructor(private httpClient: HttpClient) {}

  public getPlayers$(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.PLAYERS_API_PATH);
  }

  public addPlayer$(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(this.PLAYERS_API_PATH, player);
  }

  public addPlayerFast$(): Observable<Player> {
    return this.httpClient.post<Player>(this.PLAYERS_API_PATH + '/fast', null);
  }

  public deletePlayer$(id: number): Observable<any> {
    return this.httpClient.delete(this.PLAYERS_API_PATH + '/' + id);
  }

  public editPlayer$(id: number, player: Player): Observable<any> {
    return this.httpClient.patch(this.PLAYERS_API_PATH + '/' + id, player);
  }
}
