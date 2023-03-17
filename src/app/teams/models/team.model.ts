import { Player } from 'src/app/players/models/player.model';

export class Team {
  id: number;
  name: string;
  players: Player[];

  constructor(team: Team) {
    this.id = team.id || 0;
    this.name = team.name;
    this.players = team.players;
  }
}
