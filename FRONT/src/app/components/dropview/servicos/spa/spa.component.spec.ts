import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaComponent } from './spa.component';

describe('SpaComponent', () => {
  let component: SpaComponent;
  let fixture: ComponentFixture<SpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
