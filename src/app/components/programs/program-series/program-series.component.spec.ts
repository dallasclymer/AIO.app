import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSeriesComponent } from './program-series.component';

describe('ProgramSeriesComponent', () => {
  let component: ProgramSeriesComponent;
  let fixture: ComponentFixture<ProgramSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
