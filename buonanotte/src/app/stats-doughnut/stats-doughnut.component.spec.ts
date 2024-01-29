import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDoughnutComponent } from './stats-doughnut.component';

describe('StatsDoughnutComponent', () => {
  let component: StatsDoughnutComponent;
  let fixture: ComponentFixture<StatsDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsDoughnutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
