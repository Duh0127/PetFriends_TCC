import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigieneComponent } from './higiene.component';

describe('HigieneComponent', () => {
  let component: HigieneComponent;
  let fixture: ComponentFixture<HigieneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigieneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
