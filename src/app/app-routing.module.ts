import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayersPageComponent } from './players/players-page/players.component';
import { TeamsPageComponent } from './teams/teams-page/teams-page.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayersPageComponent,
  },
  {
    path: 'teams',
    component: TeamsPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
