import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanhoTosaComponent } from './banho-tosa.component';

describe('BanhoTosaComponent', () => {
  let component: BanhoTosaComponent;
  let fixture: ComponentFixture<BanhoTosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanhoTosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanhoTosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
