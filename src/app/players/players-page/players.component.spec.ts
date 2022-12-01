import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersPageComponent } from '../players-page/players.component';

describe('PlayersComponent', () => {
  let component: PlayersPageComponent;
  let fixture: ComponentFixture<PlayersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
