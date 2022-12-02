import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersPageComponent } from './players-page/players.component';
import { PlayersRoutingModule } from './players-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PlayersPageComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [PlayersPageComponent],
})
export class PlayersModule {}
