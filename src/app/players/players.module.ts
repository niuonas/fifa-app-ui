import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersPageComponent } from './players-page/players.component';
import { PlayersRoutingModule } from './players-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PlayersPageComponent],
  imports: [CommonModule, PlayersRoutingModule, HttpClientModule],
  exports: [PlayersPageComponent],
})
export class PlayersModule {}
