import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  public getPlayers$(): Observable<Player[]> {
    return this.httpClient.get<Player[]>('https://localhost:44352/Players');
  }
}
