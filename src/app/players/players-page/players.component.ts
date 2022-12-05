import { Component, OnInit, ViewChild } from '@angular/core';
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

  displayedColumns: string[] = [
    'Name',
    'Surname',
    'Nationality',
    'Overall',
    'Action',
  ];
  player: Player = {} as Player;
  players$: Observable<Player[]> = new Observable();
  isEdit = false;

  ngOnInit(): void {
    this.players$ = this.playerService.getPlayers$();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: '250px',
      data: {
        player: this.player,
        isEdit: this.isEdit,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (this.isEdit) {
          this.playerService
            .editPlayer$(result)
            .subscribe(
              () => (this.players$ = this.playerService.getPlayers$())
            );
        } else {
          this.addPlayer(result);
        }
      }
      this.isEdit = false;
      this.player = {} as Player;
    });
  }

  addPlayer(player: Player) {
    this.playerService
      .addPlayer$(player)
      .subscribe(() => (this.players$ = this.playerService.getPlayers$()));
  }

  deletePlayer(player: Player) {
    this.playerService
      .deletePlayer$(player.id)
      .subscribe(() => (this.players$ = this.playerService.getPlayers$()));
  }

  editPlayer(player: Player) {
    this.isEdit = true;
    this.player = player;
    this.openDialog();
  }
}
