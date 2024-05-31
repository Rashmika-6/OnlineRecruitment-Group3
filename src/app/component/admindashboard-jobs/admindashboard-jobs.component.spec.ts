import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardJobsComponent } from './admindashboard-jobs.component';

describe('AdmindashboardJobsComponent', () => {
  let component: AdmindashboardJobsComponent;
  let fixture: ComponentFixture<AdmindashboardJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindashboardJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindashboardJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
