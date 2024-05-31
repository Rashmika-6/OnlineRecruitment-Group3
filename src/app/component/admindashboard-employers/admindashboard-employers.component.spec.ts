import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardEmployersComponent } from './admindashboard-employers.component';

describe('AdmindashboardEmployersComponent', () => {
  let component: AdmindashboardEmployersComponent;
  let fixture: ComponentFixture<AdmindashboardEmployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindashboardEmployersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindashboardEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
