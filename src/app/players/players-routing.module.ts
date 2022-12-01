import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersPageComponent } from './players-page/players.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
