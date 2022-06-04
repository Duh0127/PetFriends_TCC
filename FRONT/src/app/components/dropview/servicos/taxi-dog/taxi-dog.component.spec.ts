import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiDogComponent } from './taxi-dog.component';

describe('TaxiDogComponent', () => {
  let component: TaxiDogComponent;
  let fixture: ComponentFixture<TaxiDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
