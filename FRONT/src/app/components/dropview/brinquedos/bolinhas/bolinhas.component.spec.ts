import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolinhasComponent } from './bolinhas.component';

describe('BolinhasComponent', () => {
  let component: BolinhasComponent;
  let fixture: ComponentFixture<BolinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolinhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
