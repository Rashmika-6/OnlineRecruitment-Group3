import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardGraduatesComponent } from './admindashboard-graduates.component';

describe('AdmindashboardGraduatesComponent', () => {
  let component: AdmindashboardGraduatesComponent;
  let fixture: ComponentFixture<AdmindashboardGraduatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindashboardGraduatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindashboardGraduatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
