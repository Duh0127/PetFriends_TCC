import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarinhasComponent } from './varinhas.component';

describe('VarinhasComponent', () => {
  let component: VarinhasComponent;
  let fixture: ComponentFixture<VarinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarinhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
