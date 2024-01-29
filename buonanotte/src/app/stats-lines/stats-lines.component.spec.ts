import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsLinesComponent } from './stats-lines.component';

describe('StatsLinesComponent', () => {
  let component: StatsLinesComponent;
  let fixture: ComponentFixture<StatsLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsLinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
