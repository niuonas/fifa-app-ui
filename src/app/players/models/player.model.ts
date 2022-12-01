export class Player {
  id: number;
  name: string;
  surname: string;
  nationality: string;
  overall: number;

  constructor(player: Player) {
    this.id = player.id;
    this.name = player.name;
    this.surname = player.surname;
    this.nationality = player.nationality;
    this.overall = player.overall;
  }
}
