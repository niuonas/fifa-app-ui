import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { PlayerService } from '../service/player-service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersPageComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  players$: Observable<Player[]> = new Observable();

  ngOnInit(): void {
    this.players$ = this.playerService.getPlayers$();

    this.players$.subscribe((x) => console.log(x));
  }
}
