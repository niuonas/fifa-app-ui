import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsPageComponent } from './teams-page/teams-page.component';

@NgModule({
  declarations: [TeamsPageComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TeamsPageComponent],
})
export class TeamsModule {}
