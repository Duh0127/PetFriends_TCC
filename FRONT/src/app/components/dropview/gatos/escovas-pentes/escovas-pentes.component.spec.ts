import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscovasPentesComponent } from './escovas-pentes.component';

describe('EscovasPentesComponent', () => {
  let component: EscovasPentesComponent;
  let fixture: ComponentFixture<EscovasPentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscovasPentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscovasPentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
