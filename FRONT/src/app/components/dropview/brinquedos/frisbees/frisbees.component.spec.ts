import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisbeesComponent } from './frisbees.component';

describe('FrisbeesComponent', () => {
  let component: FrisbeesComponent;
  let fixture: ComponentFixture<FrisbeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrisbeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrisbeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
