import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job4uComponent } from './job4u.component';

describe('Job4uComponent', () => {
  let component: Job4uComponent;
  let fixture: ComponentFixture<Job4uComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Job4uComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Job4uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
