import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindshboardComponent } from './admindshboard.component';

describe('AdmindshboardComponent', () => {
  let component: AdmindshboardComponent;
  let fixture: ComponentFixture<AdmindshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindshboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
