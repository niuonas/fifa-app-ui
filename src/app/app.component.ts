import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Fifa App Clone';

  constructor(private router: Router) {}
  navigateToPlayers(): void {
    this.router.navigate(['/players']);
  }

  navigateToTeams(): void {
    this.router.navigate(['/teams']);
  }
}
