import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamasCasinhasComponent } from './camas-casinhas.component';

describe('CamasCasinhasComponent', () => {
  let component: CamasCasinhasComponent;
  let fixture: ComponentFixture<CamasCasinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamasCasinhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamasCasinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
