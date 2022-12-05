import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.css'],
})
export class PlayerDialogComponent {
  player: Player = {} as Player;
  isEdit = false;
  constructor(
    public dialogRef: MatDialogRef<PlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.player = data.player;
    this.isEdit = data.isEdit;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
