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
  displayedColumns: string[] = ['Name', 'Surname', 'Nationality', 'Overall'];

  ngOnInit(): void {
    this.players$ = this.playerService.getPlayers$();
  }

  addPlayer() {
    this.playerService.addPlayer$();
  }

  deletePlayer() {
    this.playerService.deletePlayer$();
  }
}
