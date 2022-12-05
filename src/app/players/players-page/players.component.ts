import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PlayerDialogComponent } from '../components/player-dialog/player-dialog.component';
import { Player } from '../models/player.model';
import { PlayerService } from '../service/player-service.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersPageComponent implements OnInit {
  constructor(private playerService: PlayerService, public dialog: MatDialog) {}

  players$: Observable<Player[]> = new Observable();
  displayedColumns: string[] = ['Name', 'Surname', 'Nationality', 'Overall'];
  player: Player = {} as Player;

  ngOnInit(): void {
    this.players$ = this.playerService.getPlayers$();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: '250px',
      data: this.player,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.player = result;
      this.addPlayer(this.player);
    });
  }

  addPlayer(player: Player) {
    this.playerService
      .addPlayer$(player)
      .subscribe((x) => (this.players$ = this.playerService.getPlayers$()));
  }

  deletePlayer() {
    this.playerService.deletePlayer$();
  }
}
