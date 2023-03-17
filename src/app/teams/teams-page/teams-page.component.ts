import { PlayerDialogComponent } from './../../players/components/player-dialog/player-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Team } from '../models/team.model';
import { TeamService } from '../service/team.service';
import { Player } from 'src/app/players/models/player.model';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.css'],
})
export class TeamsPageComponent implements OnInit, OnDestroy {
  constructor(private teamService: TeamService, public dialg: MatDialog) {}

  player: Player = {} as Player;
  displayedColumns: string[] = ['Name', 'Players'];
  teams$: Observable<Team[]> = new Observable();
  selectedTeam: Team = {} as Team;
  subscription: Subscription = {} as Subscription;

  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams$();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openDialog(team: Team): void {
    this.selectedTeam = team;
    const dialogRef = this.dialg.open(PlayerDialogComponent, {
      width: '250px',
      data: {
        player: this.player,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addPlayerToTeam(result);
      }
    });
  }

  addPlayerToTeam(player: Player) {
    this.subscription = this.teamService
      .addPlayerToTeam$(player, this.selectedTeam.id)
      .subscribe(() => {
        (this.teams$ = this.teamService.getTeams$()),
          (this.player = {} as Player);
      });
  }
}
