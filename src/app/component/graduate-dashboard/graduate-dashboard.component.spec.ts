import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateDashboardComponent } from './graduate-dashboard.component';

describe('GraduateDashboardComponent', () => {
  let component: GraduateDashboardComponent;
  let fixture: ComponentFixture<GraduateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraduateDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
