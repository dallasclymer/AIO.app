import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropInDashboardComponent } from './drop-in-dashboard.component';

describe('DropInDashboardComponent', () => {
  let component: DropInDashboardComponent;
  let fixture: ComponentFixture<DropInDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropInDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropInDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
